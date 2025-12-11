# Automated Appwrite Setup

## Quick Start (One Command)

### Step 1: Get Your API Key

1. Go to https://cloud.appwrite.io/console
2. Open your project (ID: `69303565001d01148c0f`)
3. Navigate to **Overview** → **Integrations** → **API Keys**
4. Click **"Create API Key"**
5. Name it: `Setup Script`
6. Select these scopes:
   - **Databases**: `databases.read`, `databases.write`
   - **Collections**: All permissions
   - **Attributes**: All permissions
   - **Indexes**: All permissions
   - **Storage**: `buckets.read`, `buckets.write`
7. Click **"Create"** and copy the API key

### Step 2: Run the Automated Setup

Open PowerShell in your project directory and run:

```powershell
# Set your API key (replace YOUR_API_KEY_HERE with the key you copied)
$env:APPWRITE_API_KEY="YOUR_API_KEY_HERE"

# Run the setup script
node src/lib/membersSetup.js
```

**That's it!** The script will:
- ✅ Create `members_registry` collection with all 17 attributes
- ✅ Create `users` collection with all 19 attributes
- ✅ Create all required indexes
- ✅ Create `profile_photos` storage bucket
- ✅ Set proper permissions

The entire process takes about 2-3 minutes.

---

## Alternative: Manual Mode

If you prefer to see step-by-step instructions and set it up manually in the Console:

```powershell
node src/lib/membersSetup.js --manual
```

This will print detailed instructions for creating everything manually.

---

## After Setup is Complete

### 1. Make Yourself Admin

1. Register an account at http://localhost:5174/auth
2. Open Appwrite Console → Databases → `cpc_database` → `users` collection
3. Find your user document (search by your email)
4. Click the document to edit
5. Find the `isAdmin` field and change it from `false` to `true`
6. Click **"Update"**

### 2. Import Members CSV

1. Log in to your app
2. Navigate to http://localhost:5174/admin/import-members
3. Click **"Select CSV File"** and choose `cpc all members.csv`
4. Review the preview showing first 10 rows with validation
5. Click **"Import X Members"**
6. Wait 10-30 seconds for processing
7. Review the summary:
   - Inserted: New members added
   - Updated: Existing members updated
   - Skipped: Invalid rows with errors listed

### 3. Test the System

**Test Registration with Existing Member:**
1. Log out
2. Go to `/auth` and switch to Register
3. Enter email: `sadeka200120@gmail.com`
4. Watch as name, batch, roll auto-fill!
5. Complete password and register

**Test Profile Management:**
1. Log in and go to `/profile`
2. Click "Edit Profile"
3. Update fields, add bio, social links
4. Click camera icon to upload profile photo
5. Save and verify changes persist

---

## Troubleshooting

### "API Key not set" error
→ Make sure you set the environment variable:
```powershell
$env:APPWRITE_API_KEY="your_actual_key_here"
```

### "Permission denied" error
→ Check that your API key has Database and Storage permissions

### "Collection already exists" warning
→ That's OK! The script will skip existing collections

### Attributes fail to create
→ Appwrite takes time to process. The script waits 1-2 seconds between each attribute. If many fail, try running the script again.

### Import shows "Access Denied"
→ You forgot to set `isAdmin=true` in your user document

---

## What Gets Created

### Collections

1. **`members_registry`**
   - 17 attributes (memberId, name, batch, roll, email, phone, etc.)
   - 4 indexes (email_unique, phone_idx, memberId_idx, batch_idx)
   - Admin-only write, public read

2. **`users`**
   - 19 attributes (userId, name, email, phone, bloodGroup, bio, etc.)
   - 3 indexes (userId_unique, email_unique, memberId_idx)
   - Document-level read/write (users see only their own data)

### Storage

3. **`profile_photos` Bucket**
   - 5MB max file size
   - JPG, JPEG, PNG, WEBP allowed
   - Encryption + antivirus enabled
   - Public read, authenticated write

---

## Time Estimate

- **Automated setup**: 3-5 minutes (mostly waiting for Appwrite)
- **Manual setup**: 20-30 minutes (clicking through Console)
- **CSV import**: 30 seconds (for 579 members)
- **Testing**: 10 minutes

**Total: 15-45 minutes depending on method**

---

## Need Help?

If you encounter any errors:
1. Copy the exact error message
2. Check the Appwrite Console to see what was created
3. Try running the script again (it will skip existing items)
4. Use manual mode to see what's missing

The automated script is **idempotent** — you can run it multiple times safely. It will skip anything that already exists.
