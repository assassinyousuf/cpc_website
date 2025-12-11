/**
 * Appwrite Collection Setup Script
 * 
 * This script logs detailed instructions for creating the required collections
 * in the Appwrite Console. Follow these steps to set up your database.
 * 
 * Run this file with: node src/lib/membersSetup.js
 */

console.log('\n' + '='.repeat(80));
console.log('APPWRITE MEMBERS REGISTRY & USERS SETUP GUIDE');
console.log('='.repeat(80) + '\n');

console.log('📋 STEP 1: CREATE MEMBERS_REGISTRY COLLECTION\n');
console.log('Collection ID: members_registry');
console.log('Database: cpc_database\n');

console.log('Attributes to create:\n');

const membersRegistryAttributes = [
  { name: 'memberId', type: 'string', size: 50, required: false },
  { name: 'name', type: 'string', size: 100, required: true },
  { name: 'batch', type: 'string', size: 20, required: false },
  { name: 'roll', type: 'string', size: 20, required: false },
  { name: 'department', type: 'string', size: 10, required: false },
  { name: 'email', type: 'email', size: 255, required: true },
  { name: 'phone', type: 'string', size: 20, required: false },
  { name: 'guardianPhone', type: 'string', size: 20, required: false },
  { name: 'interested', type: 'string', size: 500, required: false, array: true },
  { name: 'expert', type: 'string', size: 500, required: false, array: true },
  { name: 'joiningYear', type: 'integer', required: false },
  { name: 'participated', type: 'boolean', required: false, default: false },
  { name: 'paymentStatus', type: 'string', size: 50, required: false },
  { name: 'source', type: 'enum', required: false, default: 'import', elements: ['import', 'self'] },
  { name: 'verified', type: 'boolean', required: false, default: false },
  { name: 'createdAt', type: 'datetime', required: false },
  { name: 'updatedAt', type: 'datetime', required: false }
];

membersRegistryAttributes.forEach((attr, idx) => {
  console.log(`${idx + 1}. ${attr.name}`);
  console.log(`   Type: ${attr.type}`);
  if (attr.size) console.log(`   Size: ${attr.size}`);
  console.log(`   Required: ${attr.required}`);
  if (attr.default !== undefined) console.log(`   Default: ${attr.default}`);
  if (attr.array) console.log(`   Array: Yes`);
  if (attr.elements) console.log(`   Enum values: ${attr.elements.join(', ')}`);
  console.log('');
});

console.log('Indexes to create:\n');
console.log('1. email_unique - Key: email, Type: unique, Order: ASC');
console.log('2. phone_idx - Key: phone, Type: key, Order: ASC');
console.log('3. memberId_idx - Key: memberId, Type: key, Order: ASC');
console.log('4. batch_idx - Key: batch, Type: key, Order: ASC\n');

console.log('Permissions:\n');
console.log('- Read: any (all authenticated users)');
console.log('- Create: role:admin');
console.log('- Update: role:admin');
console.log('- Delete: role:admin\n');

console.log('\n' + '='.repeat(80) + '\n');

console.log('📋 STEP 2: CREATE USERS COLLECTION\n');
console.log('Collection ID: users');
console.log('Database: cpc_database\n');

console.log('Attributes to create:\n');

const usersAttributes = [
  { name: 'userId', type: 'string', size: 255, required: true },
  { name: 'memberId', type: 'string', size: 50, required: false },
  { name: 'name', type: 'string', size: 100, required: true },
  { name: 'email', type: 'email', size: 255, required: true },
  { name: 'phone', type: 'string', size: 20, required: false },
  { name: 'batch', type: 'string', size: 20, required: false },
  { name: 'roll', type: 'string', size: 20, required: false },
  { name: 'department', type: 'string', size: 10, required: false },
  { name: 'bloodGroup', type: 'enum', required: false, elements: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  { name: 'address', type: 'string', size: 500, required: false },
  { name: 'dateOfBirth', type: 'datetime', required: false },
  { name: 'guardianPhone', type: 'string', size: 20, required: false },
  { name: 'photoUrl', type: 'url', size: 2000, required: false },
  { name: 'bio', type: 'string', size: 1000, required: false },
  { name: 'socialLinks', type: 'string', size: 1000, required: false, default: '{}' },
  { name: 'isAdmin', type: 'boolean', required: false, default: false },
  { name: 'profileComplete', type: 'boolean', required: false, default: false },
  { name: 'createdAt', type: 'datetime', required: false },
  { name: 'updatedAt', type: 'datetime', required: false }
];

usersAttributes.forEach((attr, idx) => {
  console.log(`${idx + 1}. ${attr.name}`);
  console.log(`   Type: ${attr.type}`);
  if (attr.size) console.log(`   Size: ${attr.size}`);
  console.log(`   Required: ${attr.required}`);
  if (attr.default !== undefined) console.log(`   Default: ${attr.default}`);
  if (attr.elements) console.log(`   Enum values: ${attr.elements.join(', ')}`);
  console.log('');
});

console.log('Indexes to create:\n');
console.log('1. userId_unique - Key: userId, Type: unique, Order: ASC');
console.log('2. email_unique - Key: email, Type: unique, Order: ASC');
console.log('3. memberId_idx - Key: memberId, Type: key, Order: ASC\n');

console.log('Permissions:\n');
console.log('⚠️  IMPORTANT: Use document-level permissions when creating documents');
console.log('When creating a user document, pass permissions:');
console.log('  ["read(\\"user:{accountId}\\")","update(\\"user:{accountId}\\")"]\n');
console.log('Collection-level defaults:');
console.log('- Read: none (use document-level)');
console.log('- Create: users (any authenticated user can create during registration)');
console.log('- Update: none (use document-level)');
console.log('- Delete: role:admin\n');

console.log('\n' + '='.repeat(80) + '\n');

console.log('📋 STEP 3: CREATE PROFILE_PHOTOS BUCKET\n');
console.log('Bucket ID: profile_photos\n');

console.log('Settings:');
console.log('- File size limit: 5 MB (5242880 bytes)');
console.log('- Allowed extensions: jpg, jpeg, png, webp');
console.log('- Encryption: Enabled');
console.log('- Antivirus: Enabled\n');

console.log('Permissions:');
console.log('- Read: any (public read)');
console.log('- Create: users (authenticated users can upload)');
console.log('- Update: none (use document-level when uploading)');
console.log('- Delete: none (use document-level when uploading)\n');

console.log('\n' + '='.repeat(80) + '\n');

console.log('📋 STEP 4: IMPORT MEMBERS CSV\n');
console.log('1. Log in as admin (set isAdmin=true in your user document manually)');
console.log('2. Navigate to: http://localhost:5174/admin/import-members');
console.log('3. Upload the "cpc all members.csv" file');
console.log('4. Review the preview for validation errors');
console.log('5. Click "Import" to process all valid rows\n');

console.log('\n' + '='.repeat(80) + '\n');

console.log('📋 STEP 5: TEST THE SYSTEM\n');
console.log('1. Try registering with an email from the CSV (e.g., sadeka200120@gmail.com)');
console.log('   → Should auto-fill name, batch, roll, department');
console.log('2. Try registering with a new email not in the CSV');
console.log('   → Should allow full registration and create registry entry');
console.log('3. Log in and navigate to Profile (/profile)');
console.log('   → Should see all your information');
console.log('   → Try updating fields and uploading a photo');
console.log('4. Verify security: Try accessing another user\'s profile via API');
console.log('   → Should be denied (403 or 404)\n');

console.log('\n' + '='.repeat(80) + '\n');

console.log('✅ All set! Follow these steps in order to get the system up and running.\n');
console.log('📖 For detailed attribute schemas and permissions, see: MEMBERS_REGISTRY_SETUP.md\n');
