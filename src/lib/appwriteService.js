import { ID, Query } from "appwrite";
import { account, databases, storage } from "./appwrite";

// Database and Collection IDs
export const DATABASE_ID = "cpc_database";
export const COLLECTIONS = {
  USERS: "users",
  MEMBERS_REGISTRY: "members_registry",
  BLOOD_DONATIONS: "blood_donations",
  BLOOD_REQUESTS: "blood_requests",
  LOST_FOUND: "lost_found",
  EVENTS: "events",
  BULLETINS: "bulletins",
  AUCTIONS: "auctions",
  JOB_VACANCIES: "job_vacancies",
  EVENT_REGISTRATIONS: "event_registrations",
  BULLETIN_COMMENTS: "bulletin_comments"
};

// Storage Bucket IDs
export const BUCKETS = {
  PROFILE_PHOTOS: "profile_photos",
  PROFILE_IMAGES: "profile_images",
  EVENT_IMAGES: "event_images",
  LOST_FOUND_IMAGES: "lost_found_images",
  BULLETIN_ATTACHMENTS: "bulletin_attachments"
};

// ==================== AUTH SERVICE ====================
export const authService = {
  // Check if user exists in members registry
  async checkMemberRegistry(email, phone = null) {
    try {
      const queries = [Query.equal('email', email)];
      
      const result = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.MEMBERS_REGISTRY,
        queries
      );
      
      if (result.documents.length > 0) {
        return { found: true, member: result.documents[0] };
      }
      
      // Fallback: try phone if provided
      if (phone) {
        const phoneQueries = [Query.equal('phone', phone)];
        const phoneResult = await databases.listDocuments(
          DATABASE_ID,
          COLLECTIONS.MEMBERS_REGISTRY,
          phoneQueries
        );
        
        if (phoneResult.documents.length > 0) {
          return { found: true, member: phoneResult.documents[0] };
        }
      }
      
      return { found: false, member: null };
    } catch (error) {
      console.error("Check member registry error:", error);
      return { found: false, member: null };
    }
  },

  // Create new user account with registry matching
  async register({ email, password, name, phone, batch, roll, department, guardianPhone, address, bloodGroup }) {
    try {
      // Check if user exists in registry
      const registryCheck = await this.checkMemberRegistry(email, phone);
      
      let memberData = null;
      let memberId = null;
      
      if (registryCheck.found) {
        // User found in registry - use prefilled data
        memberData = registryCheck.member;
        memberId = memberData.$id;
        name = name || memberData.name;
        batch = batch || memberData.batch;
        roll = roll || memberData.roll;
        department = department || memberData.department;
        guardianPhone = guardianPhone || memberData.guardianPhone;
        phone = phone || memberData.phone;
      } else {
        // User not in registry - create new registry entry
        const newMember = await databases.createDocument(
          DATABASE_ID,
          COLLECTIONS.MEMBERS_REGISTRY,
          ID.unique(),
          {
            name,
            email,
            phone: phone || '',
            batch: batch || '',
            roll: roll || '',
            department: department || '',
            guardianPhone: guardianPhone || '',
            source: 'self',
            verified: false,
            interested: [],
            expert: [],
            createdAt: new Date().toISOString()
          }
        );
        memberId = newMember.$id;
      }
      
      // Create Appwrite account
      const userId = ID.unique();
      const userAccount = await account.create(userId, email, password, name);
      
      // Create user profile with proper permissions
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.USERS,
        userId,
        {
          userId: userAccount.$id,
          memberId,
          name,
          email,
          phone: phone || '',
          batch: batch || '',
          roll: roll || '',
          department: department || '',
          guardianPhone: guardianPhone || '',
          address: address || '',
          bloodGroup: bloodGroup || '',
          bio: '',
          socialLinks: JSON.stringify({}),
          photoUrl: '',
          isAdmin: false,
          profileComplete: registryCheck.found, // Pre-approved members have more complete profiles
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        [
          `read("user:${userAccount.$id}")`,
          `update("user:${userAccount.$id}")`
        ]
      );

      // Auto login after registration
      await account.createEmailPasswordSession(email, password);
      
      return { 
        success: true, 
        user: userAccount,
        isRegistryMember: registryCheck.found,
        profileComplete: registryCheck.found
      };
    } catch (error) {
      console.error("Registration error:", error);
      
      // Provide user-friendly error messages
      if (error.code === 404 && error.message.includes('database')) {
        throw new Error('Database not configured. Please contact the administrator to set up the Appwrite database.');
      } else if (error.code === 404 && error.message.includes('collection')) {
        throw new Error('Database collections not configured. Please contact the administrator.');
      } else if (error.code === 409) {
        throw new Error('An account with this email already exists.');
      } else {
        throw new Error(error.message || 'Registration failed. Please try again.');
      }
    }
  },

  // Login with email and password
  async login(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return { success: true, session };
    } catch (error) {
      console.error("Login error:", error);
      
      if (error.code === 401) {
        throw new Error('Invalid email or password.');
      } else {
        throw new Error(error.message || 'Login failed. Please try again.');
      }
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const user = await account.get();
      
      // Get user profile from database
      const userProfile = await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.USERS,
        user.$id
      );
      
      return {
        id: user.$id,
        name: user.name,
        email: user.email,
        phone: userProfile.phone,
        batch: userProfile.batch,
        roll: userProfile.roll,
        department: userProfile.department,
        bloodGroup: userProfile.bloodGroup,
        address: userProfile.address,
        guardianPhone: userProfile.guardianPhone,
        bio: userProfile.bio,
        socialLinks: userProfile.socialLinks ? JSON.parse(userProfile.socialLinks) : {},
        photoUrl: userProfile.photoUrl,
        isAdmin: userProfile.isAdmin || false,
        profileComplete: userProfile.profileComplete || false,
        memberId: userProfile.memberId
      };
    } catch (error) {
      console.error("Get current user error:", error);
      return null;
    }
  },

  // Logout
  async logout() {
    try {
      await account.deleteSession("current");
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  // Update user profile
  async updateProfile(userId, data) {
    try {
      // Sanitize socialLinks if present
      if (data.socialLinks && typeof data.socialLinks === 'object') {
        data.socialLinks = JSON.stringify(data.socialLinks);
      }
      
      // Add update timestamp
      data.updatedAt = new Date().toISOString();
      
      const updatedProfile = await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.USERS,
        userId,
        data
      );
      return updatedProfile;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  },

  // Get user profile by userId
  async getUserProfile(userId) {
    try {
      const userProfile = await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.USERS,
        userId
      );
      
      return {
        ...userProfile,
        socialLinks: userProfile.socialLinks ? JSON.parse(userProfile.socialLinks) : {}
      };
    } catch (error) {
      console.error("Get user profile error:", error);
      throw error;
    }
  }
};

// ==================== MEMBERS REGISTRY SERVICE ====================
export const membersRegistryService = {
  // Import members from CSV data
  async importMembers(membersArray) {
    try {
      const results = {
        inserted: 0,
        updated: 0,
        skipped: 0,
        errors: []
      };

      for (const member of membersArray) {
        try {
          // Validate required fields
          if (!member.email || !member.name) {
            results.skipped++;
            results.errors.push(`Skipped: Missing required fields (email or name) for row`);
            continue;
          }

          // Check if member already exists by email
          const existing = await databases.listDocuments(
            DATABASE_ID,
            COLLECTIONS.MEMBERS_REGISTRY,
            [Query.equal('email', member.email)]
          );

          if (existing.documents.length > 0) {
            // Update existing member
            await databases.updateDocument(
              DATABASE_ID,
              COLLECTIONS.MEMBERS_REGISTRY,
              existing.documents[0].$id,
              {
                name: member.name,
                batch: member.batch || '',
                roll: member.roll || '',
                department: member.department || '',
                phone: member.phone || '',
                guardianPhone: member.guardianPhone || '',
                memberId: member.memberId || '',
                interested: member.interested || [],
                expert: member.expert || [],
                joiningYear: member.joiningYear || null,
                participated: member.participated || false,
                paymentStatus: member.paymentStatus || '',
                source: 'import',
                verified: true,
                updatedAt: new Date().toISOString()
              }
            );
            results.updated++;
          } else {
            // Create new member
            await databases.createDocument(
              DATABASE_ID,
              COLLECTIONS.MEMBERS_REGISTRY,
              ID.unique(),
              {
                name: member.name,
                email: member.email,
                batch: member.batch || '',
                roll: member.roll || '',
                department: member.department || '',
                phone: member.phone || '',
                guardianPhone: member.guardianPhone || '',
                memberId: member.memberId || '',
                interested: member.interested || [],
                expert: member.expert || [],
                joiningYear: member.joiningYear || null,
                participated: member.participated || false,
                paymentStatus: member.paymentStatus || '',
                source: 'import',
                verified: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
            );
            results.inserted++;
          }
        } catch (itemError) {
          results.skipped++;
          results.errors.push(`Error processing ${member.email}: ${itemError.message}`);
        }
      }

      return results;
    } catch (error) {
      console.error("Import members error:", error);
      throw error;
    }
  },

  // Get all members from registry
  async getAllMembers(filters = {}) {
    try {
      const queries = [];
      
      if (filters.batch) {
        queries.push(Query.equal('batch', filters.batch));
      }
      
      if (filters.department) {
        queries.push(Query.equal('department', filters.department));
      }
      
      if (filters.verified !== undefined) {
        queries.push(Query.equal('verified', filters.verified));
      }

      queries.push(Query.orderDesc('createdAt'));
      queries.push(Query.limit(100));

      const result = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.MEMBERS_REGISTRY,
        queries
      );

      return result.documents;
    } catch (error) {
      console.error("Get all members error:", error);
      throw error;
    }
  },

  // Get member by ID
  async getMemberById(memberId) {
    try {
      const member = await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.MEMBERS_REGISTRY,
        memberId
      );
      return member;
    } catch (error) {
      console.error("Get member by ID error:", error);
      throw error;
    }
  },

  // Update member verification status
  async verifyMember(memberId, verified = true) {
    try {
      const updated = await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.MEMBERS_REGISTRY,
        memberId,
        {
          verified,
          updatedAt: new Date().toISOString()
        }
      );
      return updated;
    } catch (error) {
      console.error("Verify member error:", error);
      throw error;
    }
  },

  // Delete member from registry
  async deleteMember(memberId) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTIONS.MEMBERS_REGISTRY,
        memberId
      );
      return { success: true };
    } catch (error) {
      console.error("Delete member error:", error);
      throw error;
    }
  }
};

// ==================== BLOOD DONATION SERVICE ====================
export const bloodService = {
  // Register as blood donor
  async registerDonor(donorData) {
    try {
      const donor = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BLOOD_DONATIONS,
        ID.unique(),
        {
          ...donorData,
          status: "available",
          totalDonations: 0,
          createdAt: new Date().toISOString()
        }
      );
      return donor;
    } catch (error) {
      console.error("Register donor error:", error);
      throw error;
    }
  },

  // Get all donors
  async getDonors(bloodGroup = null) {
    try {
      const queries = [Query.equal("status", "available")];
      if (bloodGroup) {
        queries.push(Query.equal("bloodGroup", bloodGroup));
      }
      
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BLOOD_DONATIONS,
        queries
      );
      return response.documents;
    } catch (error) {
      console.error("Get donors error:", error);
      throw error;
    }
  },

  // Create blood request
  async createRequest(requestData) {
    try {
      const request = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BLOOD_REQUESTS,
        ID.unique(),
        {
          ...requestData,
          status: "active",
          fulfilled: false,
          createdAt: new Date().toISOString()
        }
      );
      return request;
    } catch (error) {
      console.error("Create request error:", error);
      throw error;
    }
  },

  // Get blood requests
  async getRequests(status = "active") {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BLOOD_REQUESTS,
        [Query.equal("status", status), Query.orderDesc("createdAt")]
      );
      return response.documents;
    } catch (error) {
      console.error("Get requests error:", error);
      throw error;
    }
  },

  // Update request status
  async updateRequest(requestId, data) {
    try {
      const updated = await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.BLOOD_REQUESTS,
        requestId,
        data
      );
      return updated;
    } catch (error) {
      console.error("Update request error:", error);
      throw error;
    }
  }
};

// ==================== LOST & FOUND SERVICE ====================
export const lostFoundService = {
  // Create lost/found item
  async createItem(itemData, imageFile = null) {
    try {
      let imageId = null;
      
      // Upload image if provided
      if (imageFile) {
        const uploadedFile = await storage.createFile(
          BUCKETS.LOST_FOUND_IMAGES,
          ID.unique(),
          imageFile
        );
        imageId = uploadedFile.$id;
      }
      
      const item = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.LOST_FOUND,
        ID.unique(),
        {
          ...itemData,
          imageId,
          status: "active",
          createdAt: new Date().toISOString()
        }
      );
      return item;
    } catch (error) {
      console.error("Create item error:", error);
      throw error;
    }
  },

  // Get items (lost or found)
  async getItems(type = null, category = null) {
    try {
      const queries = [Query.equal("status", "active"), Query.orderDesc("createdAt")];
      if (type) {
        queries.push(Query.equal("type", type));
      }
      if (category) {
        queries.push(Query.equal("category", category));
      }
      
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.LOST_FOUND,
        queries
      );
      return response.documents;
    } catch (error) {
      console.error("Get items error:", error);
      throw error;
    }
  },

  // Update item status
  async updateItem(itemId, data) {
    try {
      const updated = await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.LOST_FOUND,
        itemId,
        data
      );
      return updated;
    } catch (error) {
      console.error("Update item error:", error);
      throw error;
    }
  },

  // Get image URL
  getImageUrl(imageId) {
    if (!imageId) return null;
    return storage.getFileView(BUCKETS.LOST_FOUND_IMAGES, imageId);
  }
};

// ==================== EVENTS SERVICE ====================
export const eventsService = {
  // Create event
  async createEvent(eventData, imageFile = null) {
    try {
      let imageId = null;
      
      if (imageFile) {
        const uploadedFile = await storage.createFile(
          BUCKETS.EVENT_IMAGES,
          ID.unique(),
          imageFile
        );
        imageId = uploadedFile.$id;
      }
      
      const event = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        ID.unique(),
        {
          ...eventData,
          imageId,
          attendees: 0,
          status: "open",
          createdAt: new Date().toISOString()
        }
      );
      return event;
    } catch (error) {
      console.error("Create event error:", error);
      throw error;
    }
  },

  // Get events
  async getEvents(category = null, status = "open") {
    try {
      const queries = [Query.orderDesc("date")];
      if (category && category !== "all") {
        queries.push(Query.equal("category", category));
      }
      if (status) {
        queries.push(Query.equal("status", status));
      }
      
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        queries
      );
      return response.documents;
    } catch (error) {
      console.error("Get events error:", error);
      throw error;
    }
  },

  // Register for event
  async registerForEvent(eventId, userId, userName) {
    try {
      // Create registration record
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.EVENT_REGISTRATIONS,
        ID.unique(),
        {
          eventId,
          userId,
          userName,
          registeredAt: new Date().toISOString()
        }
      );
      
      // Increment attendee count
      const event = await databases.getDocument(DATABASE_ID, COLLECTIONS.EVENTS, eventId);
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        eventId,
        { attendees: (event.attendees || 0) + 1 }
      );
      
      return { success: true };
    } catch (error) {
      console.error("Register for event error:", error);
      throw error;
    }
  },

  // Get image URL
  getImageUrl(imageId) {
    if (!imageId) return null;
    return storage.getFileView(BUCKETS.EVENT_IMAGES, imageId);
  }
};

// ==================== BULLETIN SERVICE ====================
export const bulletinService = {
  // Create bulletin post
  async createPost(postData, attachmentFile = null) {
    try {
      let attachmentId = null;
      
      if (attachmentFile) {
        const uploadedFile = await storage.createFile(
          BUCKETS.BULLETIN_ATTACHMENTS,
          ID.unique(),
          attachmentFile
        );
        attachmentId = uploadedFile.$id;
      }
      
      const post = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BULLETINS,
        ID.unique(),
        {
          ...postData,
          attachmentId,
          likes: 0,
          commentCount: 0,
          createdAt: new Date().toISOString()
        }
      );
      return post;
    } catch (error) {
      console.error("Create post error:", error);
      throw error;
    }
  },

  // Get posts
  async getPosts(category = null) {
    try {
      const queries = [Query.orderDesc("createdAt")];
      if (category && category !== "all") {
        queries.push(Query.equal("category", category));
      }
      
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BULLETINS,
        queries
      );
      return response.documents;
    } catch (error) {
      console.error("Get posts error:", error);
      throw error;
    }
  },

  // Like post
  async likePost(postId) {
    try {
      const post = await databases.getDocument(DATABASE_ID, COLLECTIONS.BULLETINS, postId);
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.BULLETINS,
        postId,
        { likes: (post.likes || 0) + 1 }
      );
      return { success: true };
    } catch (error) {
      console.error("Like post error:", error);
      throw error;
    }
  },

  // Add comment
  async addComment(postId, userId, userName, content) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BULLETIN_COMMENTS,
        ID.unique(),
        {
          postId,
          userId,
          userName,
          content,
          createdAt: new Date().toISOString()
        }
      );
      
      // Increment comment count
      const post = await databases.getDocument(DATABASE_ID, COLLECTIONS.BULLETINS, postId);
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.BULLETINS,
        postId,
        { commentCount: (post.commentCount || 0) + 1 }
      );
      
      return { success: true };
    } catch (error) {
      console.error("Add comment error:", error);
      throw error;
    }
  },

  // Get comments
  async getComments(postId) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BULLETIN_COMMENTS,
        [Query.equal("postId", postId), Query.orderDesc("createdAt")]
      );
      return response.documents;
    } catch (error) {
      console.error("Get comments error:", error);
      throw error;
    }
  },

  // Get attachment URL
  getAttachmentUrl(attachmentId) {
    if (!attachmentId) return null;
    return storage.getFileView(BUCKETS.BULLETIN_ATTACHMENTS, attachmentId);
  }
};

// ==================== STORAGE SERVICE ====================
export const storageService = {
  // Upload profile image
  async uploadProfileImage(file) {
    try {
      const uploadedFile = await storage.createFile(
        BUCKETS.PROFILE_IMAGES,
        ID.unique(),
        file
      );
      return uploadedFile.$id;
    } catch (error) {
      console.error("Upload profile image error:", error);
      throw error;
    }
  },

  // Get profile image URL
  getProfileImageUrl(imageId) {
    if (!imageId) return null;
    return storage.getFileView(BUCKETS.PROFILE_IMAGES, imageId);
  },

  // Delete file
  async deleteFile(bucketId, fileId) {
    try {
      await storage.deleteFile(bucketId, fileId);
      return { success: true };
    } catch (error) {
      console.error("Delete file error:", error);
      throw error;
    }
  }
};
