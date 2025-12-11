# Appwrite Database Setup Guide

## Quick Setup Steps

1. **Open Appwrite Console**
   - Go to: https://cloud.appwrite.io/console/project-69303565001d01148c0f

2. **Create Database**
   - Click on "Databases" in the left sidebar
   - Click "Create Database"
   - Database ID: `cpc_database`
   - Name: `CPC Database`
   - Click "Create"

3. **Create Collections** (Inside the database you just created)

### Collection 1: users
- Collection ID: `users`
- Click "Create Collection"
- Add these attributes:

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| name | String | 255 | Yes | - |
| email | String | 255 | Yes | - |
| studentId | String | 50 | Yes | - |
| role | String | 50 | Yes | "student" |
| permissions | String[] | - | Yes | [] |
| avatar | String | 500 | No | - |
| createdAt | String | 100 | Yes | - |

**Permissions** (Click "Settings" tab in collection):
- Read: Any
- Create: Users
- Update: Users
- Delete: Users

### Collection 2: blood_donations
- Collection ID: `blood_donations`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| name | String | 255 | Yes | - |
| email | String | 255 | Yes | - |
| phone | String | 50 | Yes | - |
| bloodGroup | String | 10 | Yes | - |
| lastDonation | String | 100 | No | - |
| medicalConditions | String | 1000 | No | - |
| location | String | 255 | Yes | - |
| status | String | 50 | Yes | "available" |
| totalDonations | Integer | - | Yes | 0 |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 3: blood_requests
- Collection ID: `blood_requests`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| name | String | 255 | Yes | - |
| phone | String | 50 | Yes | - |
| bloodGroup | String | 10 | Yes | - |
| units | Integer | - | Yes | - |
| hospital | String | 255 | Yes | - |
| urgency | String | 50 | Yes | - |
| reason | String | 1000 | Yes | - |
| status | String | 50 | Yes | "active" |
| fulfilled | Boolean | - | Yes | false |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 4: lost_found
- Collection ID: `lost_found`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| type | String | 50 | Yes | - |
| itemName | String | 255 | Yes | - |
| category | String | 100 | Yes | - |
| description | String | 2000 | Yes | - |
| location | String | 255 | Yes | - |
| date | String | 100 | Yes | - |
| contactEmail | String | 255 | Yes | - |
| contactPhone | String | 50 | No | - |
| reward | String | 255 | No | - |
| imageId | String | 100 | No | - |
| status | String | 50 | Yes | "active" |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 5: events
- Collection ID: `events`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| title | String | 255 | Yes | - |
| description | String | 5000 | Yes | - |
| date | String | 100 | Yes | - |
| time | String | 50 | Yes | - |
| endDate | String | 100 | No | - |
| endTime | String | 50 | No | - |
| location | String | 255 | Yes | - |
| category | String | 100 | Yes | - |
| organizer | String | 255 | Yes | - |
| organizerId | String | 100 | Yes | - |
| attendees | Integer | - | Yes | 0 |
| maxAttendees | Integer | - | Yes | - |
| price | String | 100 | Yes | - |
| imageId | String | 100 | No | - |
| tags | String[] | - | Yes | - |
| status | String | 50 | Yes | "open" |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 6: event_registrations
- Collection ID: `event_registrations`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| eventId | String | 100 | Yes | - |
| userId | String | 100 | Yes | - |
| userName | String | 255 | Yes | - |
| registeredAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 7: bulletins
- Collection ID: `bulletins`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| userName | String | 255 | Yes | - |
| title | String | 255 | Yes | - |
| content | String | 10000 | Yes | - |
| category | String | 100 | Yes | - |
| attachmentId | String | 100 | No | - |
| likes | Integer | - | Yes | 0 |
| commentCount | Integer | - | Yes | 0 |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 8: bulletin_comments
- Collection ID: `bulletin_comments`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| postId | String | 100 | Yes | - |
| userId | String | 100 | Yes | - |
| userName | String | 255 | Yes | - |
| content | String | 2000 | Yes | - |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 9: auctions
- Collection ID: `auctions`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| title | String | 255 | Yes | - |
| description | String | 5000 | Yes | - |
| startingBid | Integer | - | Yes | - |
| currentBid | Integer | - | Yes | - |
| buyNowPrice | Integer | - | No | - |
| endDate | String | 100 | Yes | - |
| category | String | 100 | Yes | - |
| imageId | String | 100 | No | - |
| status | String | 50 | Yes | "active" |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

### Collection 10: job_vacancies
- Collection ID: `job_vacancies`

| Attribute Key | Type | Size | Required | Default |
|--------------|------|------|----------|---------|
| userId | String | 100 | Yes | - |
| title | String | 255 | Yes | - |
| company | String | 255 | Yes | - |
| description | String | 5000 | Yes | - |
| location | String | 255 | Yes | - |
| type | String | 100 | Yes | - |
| salary | String | 255 | No | - |
| requirements | String[] | - | Yes | - |
| deadline | String | 100 | Yes | - |
| contactEmail | String | 255 | Yes | - |
| status | String | 50 | Yes | "active" |
| createdAt | String | 100 | Yes | - |

**Permissions**: Same as users collection

## 4. Create Storage Buckets (Optional for images)

Go to "Storage" in left sidebar:

1. **profile_images**
   - Bucket ID: `profile_images`
   - Max File Size: 5MB
   - Allowed Extensions: jpg, jpeg, png, gif, webp
   - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users

2. **event_images**
   - Bucket ID: `event_images`
   - Max File Size: 10MB
   - Allowed Extensions: jpg, jpeg, png, gif, webp
   - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users

3. **lost_found_images**
   - Bucket ID: `lost_found_images`
   - Max File Size: 5MB
   - Allowed Extensions: jpg, jpeg, png, gif, webp
   - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users

4. **bulletin_attachments**
   - Bucket ID: `bulletin_attachments`
   - Max File Size: 20MB
   - Allowed Extensions: jpg, jpeg, png, gif, webp, pdf, doc, docx
   - Permissions: Read: Any, Create: Users, Update: Users, Delete: Users

## 5. Test Signup

Once you've created the database and at minimum the `users` collection, try signing up again. The error should be resolved!

## Priority Setup

If you want to test quickly, create these in order:
1. ✅ Database: `cpc_database`
2. ✅ Collection: `users` (Required for signup/login)
3. ⚠️ Collection: `blood_donations` (If testing blood donation feature)
4. ⚠️ Collection: `blood_requests` (If testing blood requests)
5. Other collections as needed

---

**Need Help?** Check the detailed guide in `src/lib/appwriteSetup.js` for more information.
