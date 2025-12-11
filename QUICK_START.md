# 🚀 Quick Start Guide - Members Registry System

## What You Need to Do Next

### Step 1: Create Appwrite Collections (15-20 minutes)

Run the setup script to see detailed instructions:

```bash
node src/lib/membersSetup.js
```

Or follow the checklist:

#### A. Create `members_registry` Collection

1. Open Appwrite Console → Databases → `cpc_database`
2. Click "Create Collection"
3. Collection ID: `members_registry`
4. Create these attributes (click "Add Attribute"):
   - `memberId` - String (50) - Optional
   - `name` - String (100) - **Required**
   - `batch` - String (20) - Optional
   - `roll` - String (20) - Optional
   - `department` - String (10) - Optional
   - `email` - Email (255) - **Required**
   - `phone` - String (20) - Optional
   - `guardianPhone` - String (20) - Optional
   - `interested` - String (500) - Optional - **Array**
   - `expert` - String (500) - Optional - **Array**
   - `joiningYear` - Integer - Optional
   - `participated` - Boolean - Optional - Default: false
   - `paymentStatus` - String (50) - Optional
   - `source` - Enum [import, self] - Optional - Default: import
   - `verified` - Boolean - Optional - Default: false
   - `createdAt` - DateTime - Optional
   - `updatedAt` - DateTime - Optional

5. Create indexes (click "Indexes" tab):
   - `email_unique`: email, unique, ASC
   - `phone_idx`: phone, key, ASC
   - `memberId_idx`: memberId, key, ASC
   - `batch_idx`: batch, key, ASC

6. Set permissions (click "Settings" → "Permissions"):
   - Read: Add `any`
   - Create: Add role `admin`
   - Update: Add role `admin`
   - Delete: Add role `admin`

#### B. Create `users` Collection

1. Click "Create Collection"
2. Collection ID: `users`
3. Create these attributes:
   - `userId` - String (255) - **Required**
   - `memberId` - String (50) - Optional
   - `name` - String (100) - **Required**
   - `email` - Email (255) - **Required**
   - `phone` - String (20) - Optional
   - `batch` - String (20) - Optional
   - `roll` - String (20) - Optional
   - `department` - String (10) - Optional
   - `bloodGroup` - Enum [A+, A-, B+, B-, AB+, AB-, O+, O-] - Optional
   - `address` - String (500) - Optional
   - `dateOfBirth` - DateTime - Optional
   - `guardianPhone` - String (20) - Optional
   - `photoUrl` - URL (2000) - Optional
   - `bio` - String (1000) - Optional
   - `socialLinks` - String (1000) - Optional - Default: {}
   - `isAdmin` - Boolean - Optional - Default: false
   - `profileComplete` - Boolean - Optional - Default: false
   - `createdAt` - DateTime - Optional
   - `updatedAt` - DateTime - Optional

4. Create indexes:
   - `userId_unique`: userId, unique, ASC
   - `email_unique`: email, unique, ASC
   - `memberId_idx`: memberId, key, ASC

5. Set permissions:
   - Read: Leave empty (document-level)
   - Create: Add role `users`
   - Update: Leave empty (document-level)
   - Delete: Add role `admin`

#### C. Create `profile_photos` Bucket

1. Open Storage → Click "Add Bucket"
2. Bucket ID: `profile_photos`
3. Settings:
   - Maximum File Size: 5242880 (5 MB)
   - Allowed File Extensions: jpg, jpeg, png, webp
   - Encryption: ✅ Enabled
   - Antivirus: ✅ Enabled
4. Permissions:
   - Read: Add `any`
   - Create: Add role `users`
   - Update: Leave empty
   - Delete: Leave empty

---

### Step 2: Set Your Account as Admin (2 minutes)

1. Register a user account at `/auth` (use your email)
2. Open Appwrite Console → Databases → `cpc_database` → `users`
3. Find your user document (by email)
4. Click to edit
5. Set `isAdmin` to `true`
6. Save

---

### Step 3: Import Members CSV (5 minutes)

1. Log in to your account
2. Navigate to `/admin/import-members`
3. Upload `cpc all members.csv`
4. Review the preview (first 10 rows shown)
5. Check validation: 579 total rows, should see valid/invalid counts
6. Click "Import X Members"
7. Wait for completion (should take 10-30 seconds)
8. Review summary:
   - Inserted: New members added
   - Updated: Existing members updated
   - Skipped: Invalid rows
   - Errors: List of any issues

---

### Step 4: Test Registration & Profile (10 minutes)

#### Test 1: Register with Existing Member Email

1. Log out
2. Go to `/auth` → Switch to Register
3. Enter email from CSV: `sadeka200120@gmail.com`
4. Notice auto-filled fields: Name, Batch, Roll
5. Complete password
6. Register → Should succeed
7. Go to `/profile` → Verify pre-filled data

#### Test 2: Register with New Email

1. Log out
2. Go to `/auth` → Register
3. Enter new email: `test@example.com`
4. Fill all fields manually (Name, Phone, Department, etc.)
5. Register → Should succeed
6. Go to `/profile` → Verify data

#### Test 3: Update Profile

1. At `/profile`, click "Edit Profile"
2. Update some fields (address, bio, blood group)
3. Add social links (Facebook, LinkedIn, GitHub)
4. Click "Save Changes"
5. Refresh page → Changes should persist

#### Test 4: Upload Profile Photo

1. At `/profile`, click camera icon on avatar
2. Select an image (< 5 MB, jpg/png/webp)
3. Wait for upload
4. Photo should appear immediately
5. Try uploading again → Old photo replaced

---

### Step 5: Verify Security (5 minutes)

#### Test Row-Level Security

1. Open browser DevTools → Console
2. Try to query another user's profile:

```javascript
// This should fail with 401/403
const databases = new Databases(client);
databases.getDocument('cpc_database', 'users', 'ANOTHER_USER_ID')
  .then(console.log)
  .catch(console.error); // Should error: Unauthorized
```

3. Try to access import page as non-admin:
   - Create a second account (don't set isAdmin)
   - Navigate to `/admin/import-members`
   - Should see "Access Denied"

---

## 📋 Checklist

Before going live:

- [ ] All 3 Appwrite collections created with correct attributes
- [ ] Indexes created on all collections
- [ ] Permissions set correctly (especially document-level for `users`)
- [ ] Profile photos bucket created with size/type limits
- [ ] At least one admin account set (`isAdmin=true`)
- [ ] Members CSV imported successfully
- [ ] Tested registration with existing and new emails
- [ ] Tested profile view/edit/photo upload
- [ ] Verified security (users can't access other profiles)
- [ ] Verified admin access control (only admins see import tool)

---

## 🐛 Troubleshooting

### "Database not found" error
→ Check `cpc_database` exists in Appwrite Console

### "Collection not found" error
→ Verify collection IDs are exact: `members_registry`, `users` (case-sensitive)

### Can't upload profile photo
→ Check `profile_photos` bucket exists and has correct permissions

### Can't update profile
→ Check `users` document has correct permissions:
  - `read("user:{YOUR_ACCOUNT_ID}")`
  - `update("user:{YOUR_ACCOUNT_ID}")`

### Import page shows "Access Denied"
→ Set `isAdmin=true` in your `users` document

### Registration doesn't auto-fill
→ Verify members imported to `members_registry` collection
→ Check email in CSV matches exactly (case-insensitive, trimmed)

---

## 📚 Documentation

- **Full Setup Guide:** `MEMBERS_REGISTRY_SETUP.md`
- **Implementation Details:** `IMPLEMENTATION_SUMMARY.md`
- **Console Setup Script:** Run `node src/lib/membersSetup.js`

---

## ✅ You're Ready!

After completing Steps 1-5, your system is fully operational:

✨ Users can register and be auto-matched with the member database
✨ Each user has a secure, personalized profile they can update
✨ Admins can import and manage the member registry
✨ Row-level security ensures data privacy

**Happy coding! 🚀**
