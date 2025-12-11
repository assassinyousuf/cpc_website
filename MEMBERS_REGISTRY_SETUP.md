# Members Registry & Profile Setup Guide

## Overview
This system manages a pre-approved member database and allows matched/new registrations with secure profile management.

## Appwrite Collections Setup

### 1. Create `members_registry` Collection

**Purpose**: Store pre-approved CPC members and self-registered users.

**Collection ID**: `members_registry`  
**Database**: `cpc_database`

#### Attributes

| Attribute | Type | Size | Required | Default | Array |
|-----------|------|------|----------|---------|-------|
| memberId | string | 50 | No | - | No |
| name | string | 100 | Yes | - | No |
| batch | string | 20 | No | - | No |
| roll | string | 20 | No | - | No |
| department | string | 10 | No | - | No |
| email | email | 255 | Yes | - | No |
| phone | string | 20 | No | - | No |
| guardianPhone | string | 20 | No | - | No |
| interested | string | 500 | No | - | Yes |
| expert | string | 500 | No | - | Yes |
| joiningYear | integer | - | No | - | No |
| participated | boolean | - | No | false | No |
| paymentStatus | string | 50 | No | - | No |
| source | enum | - | No | import | No |
| verified | boolean | - | No | false | No |

**Enum Values for `source`**: `import`, `self`

#### Indexes
1. **email_unique**: Key: `email`, Type: unique, Order: ASC
2. **phone_idx**: Key: `phone`, Type: key, Order: ASC
3. **memberId_idx**: Key: `memberId`, Type: key, Order: ASC
4. **batch_idx**: Key: `batch`, Type: key, Order: ASC

#### Permissions
- **Read**: `any` (authenticated users can read)
- **Create**: `role:admin` (only admins can import)
- **Update**: `role:admin`
- **Delete**: `role:admin`

---

### 2. Create `users` Collection

**Purpose**: Authenticated user profiles linked to Appwrite accounts.

**Collection ID**: `users`  
**Database**: `cpc_database`

#### Attributes

| Attribute | Type | Size | Required | Default | Array |
|-----------|------|------|----------|---------|-------|
| userId | string | 255 | Yes | - | No |
| memberId | string | 50 | No | - | No |
| name | string | 100 | Yes | - | No |
| email | email | 255 | Yes | - | No |
| phone | string | 20 | No | - | No |
| batch | string | 20 | No | - | No |
| roll | string | 20 | No | - | No |
| department | string | 10 | No | - | No |
| bloodGroup | enum | - | No | - | No |
| address | string | 500 | No | - | No |
| dateOfBirth | datetime | - | No | - | No |
| guardianPhone | string | 20 | No | - | No |
| photoUrl | url | 2000 | No | - | No |
| bio | string | 1000 | No | - | No |
| socialLinks | string | 1000 | No | {} | No |
| isAdmin | boolean | - | No | false | No |
| profileComplete | boolean | - | No | false | No |

**Enum Values for `bloodGroup`**: `A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`

#### Indexes
1. **userId_unique**: Key: `userId`, Type: unique, Order: ASC
2. **email_unique**: Key: `email`, Type: unique, Order: ASC
3. **memberId_idx**: Key: `memberId`, Type: key, Order: ASC

#### Permissions
- **Read**: `user:{userId}` (each user can read only their own document)
- **Create**: `users` (any authenticated user during registration)
- **Update**: `user:{userId}` (each user can update only their own document)
- **Delete**: `role:admin` (only admins can delete profiles)

**Note**: Set document-level permissions dynamically. When creating a user document, set `read` and `update` to `["user:{accountId}"]` where `{accountId}` is the Appwrite account ID.

---

### 3. Create `profile_photos` Bucket

**Purpose**: Store user profile photos securely.

**Bucket ID**: `profile_photos`

#### Settings
- **File size limit**: 5 MB
- **Allowed extensions**: `jpg`, `jpeg`, `png`, `webp`
- **Encryption**: Enabled
- **Antivirus**: Enabled

#### Permissions
- **Read**: `any` (public read for profile photos)
- **Create**: `users` (authenticated users can upload)
- **Update**: `user:{userId}` (owner only)
- **Delete**: `user:{userId}` (owner only)

---

## CSV Import Schema Mapping

When importing `cpc all members.csv`, map columns as follows:

| CSV Column | Collection Attribute |
|------------|---------------------|
| Name / Member_Name | name |
| Batch / Batch No. | batch |
| Roll / Roll No. | roll |
| Member ID / Member_ID | memberId |
| Registration | memberId (if Member ID is empty) |
| Mail / Email Adress | email |
| Contact / Mobile No. | phone |
| Department | department |
| Interested | interested (split by comma, trim) |
| Expert | expert (split by comma, trim) |
| Gurdian Number | guardianPhone |
| CPC joining year? | joiningYear |
| Have you participated... | participated (Yes=true, No=false) |
| Payment Status (Recieved?) | paymentStatus |

**Additional fields**:
- `source` = `"import"`
- `verified` = `true` (pre-approved members)

---

## Registration Flow

### Matched Registration (User in Registry)
1. User enters email/phone during signup
2. System queries `members_registry` for match
3. If found:
   - Create Appwrite account
   - Create `users` profile prefilled with name, batch, roll, department, guardianPhone
   - Link via `memberId`
   - Mark `profileComplete = false` (user must complete address, photo, etc.)
4. Redirect to profile completion page

### New Registration (User Not in Registry)
1. User enters email/phone during signup
2. No match found in `members_registry`
3. System prompts: "You're not in our pre-approved list. Please complete registration."
4. User fills full form: name, batch, roll, department, phone, guardianPhone, etc.
5. Create Appwrite account
6. Create `users` profile
7. Also create `members_registry` entry with `source="self"`, `verified=false`
8. Admin reviews and approves later

---

## Profile Management

### View Profile
- Fetch from `users` collection where `userId == account.$id`
- Display all fields including linked registry data

### Update Profile
- User can edit: name, phone, address, bio, socialLinks, bloodGroup, dateOfBirth, photo
- Cannot edit: email (Appwrite account email), userId, memberId, isAdmin
- Validate changes client-side and server-side
- Persist to `users` collection with `updatedAt` timestamp

### Upload Photo
1. User selects image file
2. Upload to `profile_photos` bucket with permissions `["user:{accountId}"]`
3. Get file URL: `https://sgp.cloud.appwrite.io/v1/storage/buckets/profile_photos/files/{fileId}/view`
4. Update `photoUrl` in `users` collection

---

## Admin Import Tool

### Steps
1. Admin logs in (check `isAdmin` flag in `users` collection)
2. Navigate to Admin Panel → Import Members
3. Upload `cpc all members.csv`
4. Parse with PapaParse library
5. Validate each row:
   - Email format
   - Phone format (normalize: remove dashes, prefix +880 if needed)
   - Required fields (name, email)
   - Check duplicates in current batch
6. Show preview table with validation errors
7. Admin clicks "Import"
8. For each row:
   - Query `members_registry` by email
   - If exists: update (merge new data)
   - If not exists: create new document
9. Show summary: X inserted, Y updated, Z skipped (errors)

### Error Handling
- Invalid email → skip, log error
- Duplicate email in CSV → keep first occurrence
- Missing name → skip, log error
- Invalid joiningYear → set to null

---

## Security Considerations

1. **Row-Level Security**: 
   - `users` collection uses document-level permissions with `user:{userId}`
   - Each user can ONLY read/update their own profile
   
2. **Admin Checks**:
   - Before import/admin actions, verify `isAdmin == true` in user's profile
   - Frontend guards: `<AdminGuard>` component
   - Backend validation in service layer

3. **Data Validation**:
   - Email: regex + Appwrite email type
   - Phone: normalize format, validate length
   - Blood group: enum constraint
   - URLs: validate format, sanitize

4. **Audit Trail**:
   - Track `createdAt`, `updatedAt` in both collections
   - Optional: add `updatedBy` field to track who made changes

---

## Next Steps

1. Create collections in Appwrite Console following above schemas
2. Set up indexes and permissions
3. Create `profile_photos` bucket
4. Import `cpc all members.csv` using admin tool
5. Test registration flows (matched and new)
6. Test profile view/update with different users
7. Verify security: users can't access other profiles
