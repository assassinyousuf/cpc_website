# Members Registry & Profile Management - Implementation Summary

## 🎯 What Has Been Built

A complete member management system with:

1. **Pre-approved Member Registry** - Import existing members from CSV
2. **Smart Registration** - Auto-match and prefill for existing members
3. **Secure Profile Management** - Users can view and update only their own data
4. **Admin Import Tool** - Upload CSV files with validation and error handling

---

## 📁 Files Created/Modified

### New Files Created

1. **`MEMBERS_REGISTRY_SETUP.md`** - Detailed setup guide for Appwrite collections
2. **`src/Pages/ProfileNew.jsx`** - Complete profile page with Appwrite integration
3. **`src/Pages/AdminImportMembers.jsx`** - Admin tool to import CSV members
4. **`src/lib/membersSetup.js`** - Console setup script for collections

### Modified Files

1. **`src/lib/appwriteService.js`**
   - Added `COLLECTIONS.MEMBERS_REGISTRY`
   - Added `BUCKETS.PROFILE_PHOTOS`
   - Enhanced `authService.register()` with registry matching
   - Added `authService.checkMemberRegistry()`
   - Added `authService.getUserProfile()`
   - Added complete `membersRegistryService` with import/CRUD methods

2. **`src/contexts/AuthContext.jsx`**
   - Updated `register()` to pass new fields (phone, batch, department, etc.)
   - Returns `isRegistryMember` and `profileComplete` status

3. **`src/Routes/Routes.jsx`**
   - Added route `/profile` → ProfileNew
   - Added route `/admin/import-members` → AdminImportMembers

4. **`src/Pages/AdminPanel.jsx`**
   - Added "Import Members" button linking to import tool

5. **`package.json`**
   - Installed `papaparse` for CSV parsing

---

## 🗄️ Database Schema

### Collection: `members_registry`

Pre-approved members roster with CSV import support.

**Key Attributes:**
- `memberId`, `name`, `email` (unique), `phone`, `batch`, `roll`, `department`
- `guardianPhone`, `interested[]`, `expert[]`, `joiningYear`, `participated`
- `paymentStatus`, `source` (enum: import/self), `verified`

**Permissions:**
- Read: `any` (all authenticated users)
- Create/Update/Delete: `role:admin` only

### Collection: `users`

Authenticated user profiles with row-level security.

**Key Attributes:**
- `userId` (Appwrite account ID), `memberId` (link to registry), `name`, `email`, `phone`
- `batch`, `roll`, `department`, `bloodGroup`, `address`, `dateOfBirth`, `guardianPhone`
- `photoUrl`, `bio`, `socialLinks` (JSON), `isAdmin`, `profileComplete`

**Permissions:**
- Read/Update: `user:{userId}` (document-level, owner only)
- Create: `users` (any authenticated user)
- Delete: `role:admin`

### Bucket: `profile_photos`

Secure storage for user profile images.

**Settings:**
- Max size: 5 MB
- Allowed: jpg, jpeg, png, webp
- Encryption + Antivirus enabled

**Permissions:**
- Read: `any` (public)
- Create/Update/Delete: `user:{userId}` (owner only)

---

## 🔄 Registration Flow

### Scenario 1: Existing Member (Found in Registry)

1. User enters email during signup
2. System queries `members_registry` by email
3. **Match found** → Auto-fill name, batch, roll, department, guardianPhone
4. User completes remaining fields (password, optional address/blood group)
5. System creates:
   - Appwrite account
   - `users` profile document (linked to registry via `memberId`)
6. User is logged in and redirected

### Scenario 2: New Member (Not in Registry)

1. User enters email during signup
2. System queries `members_registry` → **No match**
3. User fills complete registration form
4. System creates:
   - New `members_registry` entry with `source='self'`, `verified=false`
   - Appwrite account
   - `users` profile document
5. Admin reviews and verifies later

---

## 👤 Profile Management

### View Profile
- Navigate to `/profile`
- Fetches current user's data from `users` collection
- Displays: personal info, contact, batch/department, bio, social links
- Shows profile photo or default avatar
- Badge for incomplete profiles

### Update Profile
- Click "Edit Profile" button
- Modify any field (except email, userId, isAdmin)
- Client-side validation (required fields, formats)
- Saves to `users` collection with timestamp

### Upload Photo
- Click camera icon on avatar
- Select image (max 5MB, jpg/png/webp)
- Uploads to `profile_photos` bucket
- Updates `photoUrl` in profile
- Old photo is automatically deleted

### Security
- Each user can **only** read/update their own profile
- Appwrite enforces document-level permissions: `user:{accountId}`
- Attempting to access another user's profile returns 403/404

---

## 🛠️ Admin Import Tool

### Access
- Admin must have `isAdmin=true` in their `users` profile
- Navigate to `/admin/import-members`
- Non-admins see "Access Denied" message

### CSV Import Process

1. **Upload CSV**
   - Admin selects `cpc all members.csv`
   - PapaParse library parses headers and rows

2. **Validation**
   - Required: `Name`, `Mail/Email Address`
   - Optional: Batch, Roll, Contact, Department, Guardian Number, Member ID, etc.
   - Invalid rows highlighted in red

3. **Preview**
   - Shows first 10 rows with validation status
   - Summary: Total / Valid / Invalid counts
   - Errors listed for each invalid row

4. **Import**
   - Click "Import X Members"
   - For each valid row:
     - Query `members_registry` by email
     - If exists → **Update** (merge new data)
     - If not exists → **Insert** new member
   - Returns summary: Inserted / Updated / Skipped / Errors

5. **CSV Column Mapping**
   - `Name` or `Member_Name` → `name`
   - `Mail` or `Email Adress` → `email`
   - `Contact` or `Mobile No.` → `phone` (normalized: +880...)
   - `Batch` or `Batch No.` → `batch`
   - `Roll` or `Roll No.` → `roll`
   - `Department` → `department`
   - `Guardian Number` → `guardianPhone`
   - `Member ID` / `Registration` → `memberId`
   - `Interested` → `interested[]` (split by comma)
   - `Expert` → `expert[]` (split by comma)
   - `CPC joining year?` → `joiningYear`
   - `Have you participated...` → `participated` (Yes/No → boolean)

---

## 🔐 Security Features

### Row-Level Security (RLS)
- `users` collection uses **document-level permissions**
- When creating a user profile, set:
  ```javascript
  permissions: [
    `read("user:{accountId}")`,
    `update("user:{accountId}")`
  ]
  ```
- This ensures users can **only** access their own data

### Admin Checks
- Frontend: `AdminImportMembers` checks `user?.isAdmin`
- Routes: Protected by `<ProtectedRoute>` wrapper
- Backend: Appwrite enforces `role:admin` for registry collection

### Data Validation
- Email: Regex validation + Appwrite `email` type
- Phone: Normalized to +880XXXXXXXXXX format
- Blood Group: Enum constraint (only valid values)
- URLs: Validated format for social links
- Photo: Size limit (5MB), file type restriction

### Audit Trail
- All documents have `createdAt` and `updatedAt` timestamps
- Registry tracks `source` (import vs self-registered)
- Registry tracks `verified` status for admin review

---

## 📦 Installation & Setup

### 1. Install Dependencies

Already done:
```bash
npm install papaparse
```

### 2. Create Appwrite Collections

Run the setup script to see detailed instructions:
```bash
node src/lib/membersSetup.js
```

Or follow `MEMBERS_REGISTRY_SETUP.md` step-by-step.

**Quick checklist:**
- [ ] Create `members_registry` collection with 17 attributes
- [ ] Add indexes: email_unique, phone_idx, memberId_idx, batch_idx
- [ ] Set permissions: Read=any, Create/Update/Delete=role:admin
- [ ] Create `users` collection with 19 attributes
- [ ] Add indexes: userId_unique, email_unique, memberId_idx
- [ ] Set permissions: Create=users, Delete=role:admin (Read/Update=document-level)
- [ ] Create `profile_photos` bucket (5MB, jpg/jpeg/png/webp)
- [ ] Set bucket permissions: Read=any, Create=users

### 3. Set Admin User

After creating your first user account:
1. Open Appwrite Console → Databases → `cpc_database` → `users`
2. Find your user document
3. Edit document: Set `isAdmin` = `true`
4. Save

### 4. Import Members

1. Log in as admin
2. Navigate to `/admin/import-members`
3. Upload `cpc all members.csv`
4. Review preview and validation
5. Click "Import"
6. Wait for completion (579 members processed)

---

## 🧪 Testing Checklist

### Registration Tests

- [ ] Register with existing email (e.g., `sadeka200120@gmail.com`)
  - ✅ Name, batch, roll auto-filled
  - ✅ Guardian phone prefilled if available
  - ✅ `profileComplete` = true

- [ ] Register with new email (e.g., `newuser@example.com`)
  - ✅ Full registration form required
  - ✅ New registry entry created with `source='self'`, `verified=false`
  - ✅ `profileComplete` = false

- [ ] Try registering duplicate email
  - ✅ Error: "An account with this email already exists."

### Profile Tests

- [ ] View profile at `/profile`
  - ✅ Displays all personal information
  - ✅ Shows profile photo or default avatar
  - ✅ Social links clickable

- [ ] Edit profile
  - ✅ All fields editable except email, userId
  - ✅ Validation works (required fields, formats)
  - ✅ Changes saved and reflected immediately

- [ ] Upload profile photo
  - ✅ Image uploads successfully
  - ✅ Photo appears in profile
  - ✅ Old photo deleted when uploading new one
  - ✅ Size limit enforced (>5MB rejected)
  - ✅ File type enforced (only jpg/png/webp)

### Security Tests

- [ ] Attempt to access another user's profile via Appwrite API
  - ✅ 403 Forbidden or 404 Not Found

- [ ] Non-admin tries to access `/admin/import-members`
  - ✅ "Access Denied" message shown

- [ ] Non-admin tries to create document in `members_registry`
  - ✅ 401 Unauthorized (Appwrite enforces permissions)

### Admin Import Tests

- [ ] Upload valid CSV
  - ✅ Preview shows first 10 rows
  - ✅ Validation status correct
  - ✅ Import completes with summary

- [ ] Upload CSV with errors
  - ✅ Invalid rows highlighted
  - ✅ Skipped count matches invalid rows
  - ✅ Errors listed with details

- [ ] Upload CSV with duplicates
  - ✅ Existing members updated (not duplicated)
  - ✅ Updated count matches existing members

---

## 🚀 Next Steps

### Optional Enhancements

1. **Email Verification**
   - Add email verification step after registration
   - Send confirmation link via Appwrite's email service

2. **Admin Dashboard for Members**
   - View all members in a table
   - Filter by batch, department, verified status
   - Manually verify/approve self-registered members

3. **Bulk Operations**
   - Export members to CSV
   - Bulk update member status
   - Bulk email to specific batches/departments

4. **Profile Completion Wizard**
   - Show progress bar for profile completion
   - Prompt users to complete missing fields
   - Reward completion (badge, access to features)

5. **Activity Log**
   - Track user login history
   - Log profile changes with timestamps
   - Admin can view audit trail

6. **Advanced Search**
   - Search members by name, email, batch, department
   - Filters and sorting
   - Export search results

---

## 📞 Support & Troubleshooting

### Common Issues

**Issue:** "Database not configured" error during registration
- **Solution:** Ensure `cpc_database` exists in Appwrite Console
- Verify `members_registry` and `users` collections are created

**Issue:** "Collection not found" error
- **Solution:** Check collection IDs match exactly:
  - `members_registry` (not `membersRegistry` or `members-registry`)
  - `users` (not `user` or `Users`)

**Issue:** Profile photo upload fails
- **Solution:** Verify `profile_photos` bucket exists
- Check bucket permissions: Create=users
- Ensure image is <5MB and jpg/png/webp format

**Issue:** User can't update their profile
- **Solution:** Check document-level permissions on user document
- Should have: `read("user:{accountId}")`, `update("user:{accountId}")`

**Issue:** Admin import fails
- **Solution:** Verify `isAdmin=true` in admin's `users` document
- Check CSV has required columns: Name, Mail/Email Address
- Ensure collection permissions: Create/Update=role:admin

---

## 📝 Code Snippets

### Manually Set Admin User

```javascript
// In Appwrite Console → Databases → users → [Your Document]
// Edit the document and set:
{
  "isAdmin": true
}
```

### Check If User Is Admin (Frontend)

```javascript
const { user } = useAuth();
const isAdmin = user?.isAdmin || false;
```

### Create User Profile with Permissions

```javascript
await databases.createDocument(
  DATABASE_ID,
  COLLECTIONS.USERS,
  userId,
  {
    userId: userAccount.$id,
    name: 'John Doe',
    email: 'john@example.com',
    // ... other fields
  },
  [
    `read("user:${userAccount.$id}")`,
    `update("user:${userAccount.$id}")`
  ]
);
```

---

## ✅ Completion Status

All tasks completed:
- ✅ CSV analyzed and schema designed
- ✅ Appwrite collections defined with security
- ✅ Registry matching logic implemented
- ✅ Admin import tool with validation
- ✅ Secure profile CRUD operations
- ✅ Routes and navigation updated
- ✅ Comprehensive setup documentation

**Ready to deploy and test!**
