# 🎯 ONE COMMAND SETUP

Your project ID is already configured: `69303565001d01148c0f`

## Run This Now:

```powershell
# 1. Get your API key from Appwrite Console:
#    https://cloud.appwrite.io/console/project-69303565001d01148c0f/overview/integrations
#    Click "Create API Key" → Check "Databases" and "Storage" → Copy the key

# 2. Set it as environment variable
$env:APPWRITE_API_KEY="paste_your_key_here"

# 3. Run the automated setup
node src/lib/membersSetup.js
```

## What This Does

The script will automatically create:
- ✅ `members_registry` collection (17 attributes + 4 indexes)
- ✅ `users` collection (19 attributes + 3 indexes)
- ✅ `profile_photos` bucket (5MB limit, jpg/png/webp)

Takes 2-3 minutes. Then you're ready to:
1. Register an account
2. Make yourself admin (set `isAdmin=true` in Console)
3. Import `cpc all members.csv` at `/admin/import-members`

---

## Alternative: Manual Mode

To see step-by-step Console instructions instead:

```powershell
node src/lib/membersSetup.js --manual
```

---

## Quick Links

- **Appwrite Console**: https://cloud.appwrite.io/console/project-69303565001d01148c0f
- **API Keys Page**: https://cloud.appwrite.io/console/project-69303565001d01148c0f/overview/integrations
- **Full Documentation**: See `QUICK_START.md`, `SETUP_INSTRUCTIONS.md`

---

## After Setup

1. **Start dev server**: `npm run dev`
2. **Register**: Go to http://localhost:5174/auth
3. **Make yourself admin**: Appwrite Console → Databases → `cpc_database` → `users` → Find your user → Edit → Set `isAdmin` to `true`
4. **Import CSV**: http://localhost:5174/admin/import-members → Upload `cpc all members.csv` → Click Import
5. **Test**: Try registering with `sadeka200120@gmail.com` and watch fields auto-fill!

🎉 **You're done!**
