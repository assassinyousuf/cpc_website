/**
 * Appwrite Database Setup Guide
 * 
 * You need to create the following in your Appwrite Console:
 * (https://cloud.appwrite.io/console/project-69303565001d01148c0f)
 * 
 * 1. DATABASE
 *    - Database ID: cpc_database
 *    - Name: CPC Database
 * 
 * 2. COLLECTIONS
 * 
 * Collection: users (ID: users)
 * Attributes:
 * - name (string, 255, required)
 * - email (string, 255, required)
 * - studentId (string, 50, required)
 * - role (string, 50, required, default: "student")
 * - permissions (string[], required)
 * - avatar (string, 500)
 * - createdAt (string, 100, required)
 * 
 * Collection: blood_donations (ID: blood_donations)
 * Attributes:
 * - userId (string, 100, required)
 * - name (string, 255, required)
 * - email (string, 255, required)
 * - phone (string, 50, required)
 * - bloodGroup (string, 10, required)
 * - lastDonation (string, 100)
 * - medicalConditions (string, 1000)
 * - location (string, 255, required)
 * - status (string, 50, required, default: "available")
 * - totalDonations (integer, required, default: 0)
 * - createdAt (string, 100, required)
 * 
 * Collection: blood_requests (ID: blood_requests)
 * Attributes:
 * - userId (string, 100, required)
 * - name (string, 255, required)
 * - phone (string, 50, required)
 * - bloodGroup (string, 10, required)
 * - units (integer, required)
 * - hospital (string, 255, required)
 * - urgency (string, 50, required)
 * - reason (string, 1000, required)
 * - status (string, 50, required, default: "active")
 * - fulfilled (boolean, required, default: false)
 * - createdAt (string, 100, required)
 * 
 * Collection: lost_found (ID: lost_found)
 * Attributes:
 * - userId (string, 100, required)
 * - type (string, 50, required) // "lost" or "found"
 * - itemName (string, 255, required)
 * - category (string, 100, required)
 * - description (string, 2000, required)
 * - location (string, 255, required)
 * - date (string, 100, required)
 * - contactEmail (string, 255, required)
 * - contactPhone (string, 50)
 * - reward (string, 255)
 * - imageId (string, 100)
 * - status (string, 50, required, default: "active")
 * - createdAt (string, 100, required)
 * 
 * Collection: events (ID: events)
 * Attributes:
 * - title (string, 255, required)
 * - description (string, 5000, required)
 * - date (string, 100, required)
 * - time (string, 50, required)
 * - endDate (string, 100)
 * - endTime (string, 50)
 * - location (string, 255, required)
 * - category (string, 100, required)
 * - organizer (string, 255, required)
 * - organizerId (string, 100, required)
 * - attendees (integer, required, default: 0)
 * - maxAttendees (integer, required)
 * - price (string, 100, required)
 * - imageId (string, 100)
 * - tags (string[], required)
 * - status (string, 50, required, default: "open")
 * - createdAt (string, 100, required)
 * 
 * Collection: event_registrations (ID: event_registrations)
 * Attributes:
 * - eventId (string, 100, required)
 * - userId (string, 100, required)
 * - userName (string, 255, required)
 * - registeredAt (string, 100, required)
 * 
 * Collection: bulletins (ID: bulletins)
 * Attributes:
 * - userId (string, 100, required)
 * - userName (string, 255, required)
 * - title (string, 255, required)
 * - content (string, 10000, required)
 * - category (string, 100, required)
 * - attachmentId (string, 100)
 * - likes (integer, required, default: 0)
 * - commentCount (integer, required, default: 0)
 * - createdAt (string, 100, required)
 * 
 * Collection: bulletin_comments (ID: bulletin_comments)
 * Attributes:
 * - postId (string, 100, required)
 * - userId (string, 100, required)
 * - userName (string, 255, required)
 * - content (string, 2000, required)
 * - createdAt (string, 100, required)
 * 
 * Collection: auctions (ID: auctions)
 * Attributes:
 * - userId (string, 100, required)
 * - title (string, 255, required)
 * - description (string, 5000, required)
 * - startingBid (integer, required)
 * - currentBid (integer, required)
 * - buyNowPrice (integer)
 * - endDate (string, 100, required)
 * - category (string, 100, required)
 * - imageId (string, 100)
 * - status (string, 50, required, default: "active")
 * - createdAt (string, 100, required)
 * 
 * Collection: job_vacancies (ID: job_vacancies)
 * Attributes:
 * - userId (string, 100, required)
 * - title (string, 255, required)
 * - company (string, 255, required)
 * - description (string, 5000, required)
 * - location (string, 255, required)
 * - type (string, 100, required) // "full-time", "part-time", "internship"
 * - salary (string, 255)
 * - requirements (string[], required)
 * - deadline (string, 100, required)
 * - contactEmail (string, 255, required)
 * - status (string, 50, required, default: "active")
 * - createdAt (string, 100, required)
 * 
 * 3. STORAGE BUCKETS
 * 
 * Bucket: profile_images (ID: profile_images)
 * - Max File Size: 5MB
 * - Allowed File Extensions: jpg, jpeg, png, gif, webp
 * - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users
 * 
 * Bucket: event_images (ID: event_images)
 * - Max File Size: 10MB
 * - Allowed File Extensions: jpg, jpeg, png, gif, webp
 * - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users
 * 
 * Bucket: lost_found_images (ID: lost_found_images)
 * - Max File Size: 5MB
 * - Allowed File Extensions: jpg, jpeg, png, gif, webp
 * - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users
 * 
 * Bucket: bulletin_attachments (ID: bulletin_attachments)
 * - Max File Size: 20MB
 * - Allowed File Extensions: jpg, jpeg, png, gif, webp, pdf, doc, docx
 * - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users
 * 
 * 4. PERMISSIONS SETUP
 * For all collections, set these permissions:
 * - Read: Any (allow public reading)
 * - Create: Users (only authenticated users can create)
 * - Update: Users (only authenticated users can update)
 * - Delete: Users (only authenticated users can delete)
 * 
 * For sensitive collections (users), you may want to restrict further.
 * 
 * 5. INDEXES (Optional but recommended for performance)
 * 
 * blood_donations:
 * - Index on: bloodGroup, status
 * 
 * blood_requests:
 * - Index on: status, bloodGroup, createdAt
 * 
 * lost_found:
 * - Index on: type, category, status, createdAt
 * 
 * events:
 * - Index on: category, status, date
 * 
 * bulletins:
 * - Index on: category, createdAt
 * 
 * After creating all collections and buckets, your backend will be fully functional!
 */

export const SETUP_INSTRUCTIONS = `
🚀 Appwrite Setup Instructions

Visit: https://cloud.appwrite.io/console/project-69303565001d01148c0f

Follow the guide in this file to create:
- 1 Database (cpc_database)
- 10 Collections with all attributes
- 4 Storage Buckets
- Proper permissions and indexes

Once setup is complete, all features will work automatically!
`;

console.log(SETUP_INSTRUCTIONS);
