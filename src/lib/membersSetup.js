/**
 * Appwrite Collection Setup Script
 * 
 * This script will automatically create all required collections and buckets
 * in your Appwrite project using the Appwrite Node SDK.
 * 
 * Usage:
 * 1. Make sure you have an Appwrite API key with proper permissions
 * 2. Update the configuration below with your credentials
 * 3. Run: node src/lib/membersSetup.js
 * 
 * Or run the manual instructions mode:
 *    node src/lib/membersSetup.js --manual
 */

import { Client, Databases, Storage, Permission, Role } from 'node-appwrite';

// ============= CONFIGURATION =============
const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://sgp.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID || '69303565001d01148c0f';
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY || ''; // You need to set this!
const DATABASE_ID = 'cpc_database';
// =========================================

// Check if manual mode
const isManualMode = process.argv.includes('--manual');

if (isManualMode) {
  showManualInstructions();
  process.exit(0);
}

// Check API key
if (!APPWRITE_API_KEY) {
  console.error('\n❌ ERROR: APPWRITE_API_KEY not set!\n');
  console.log('To run automated setup:');
  console.log('1. Go to Appwrite Console → Overview → Integrations → API Keys');
  console.log('2. Create a new API key with Database & Storage permissions');
  console.log('3. Set environment variable:');
  console.log('   Windows: $env:APPWRITE_API_KEY="your_key_here"');
  console.log('   Linux/Mac: export APPWRITE_API_KEY="your_key_here"');
  console.log('4. Run: node src/lib/membersSetup.js\n');
  console.log('Or run manual mode: node src/lib/membersSetup.js --manual\n');
  process.exit(1);
}

// Initialize Appwrite
const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)
  .setKey(APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

async function createMembersRegistry() {
  console.log('\n📋 Creating members_registry collection...');
  
  try {
    const collection = await databases.createCollection(
      DATABASE_ID,
      'members_registry',
      'Members Registry',
      [
        Permission.read(Role.any()),
        Permission.create(Role.team('admin')),
        Permission.update(Role.team('admin')),
        Permission.delete(Role.team('admin'))
      ]
    );
    console.log('✅ Collection created:', collection.$id);
    
    // Create attributes
    const attributes = [
      { key: 'memberId', type: 'string', size: 50, required: false },
      { key: 'name', type: 'string', size: 100, required: true },
      { key: 'batch', type: 'string', size: 20, required: false },
      { key: 'roll', type: 'string', size: 20, required: false },
      { key: 'department', type: 'string', size: 10, required: false },
      { key: 'email', type: 'email', size: 255, required: true },
      { key: 'phone', type: 'string', size: 20, required: false },
      { key: 'guardianPhone', type: 'string', size: 20, required: false },
      { key: 'interested', type: 'string', size: 500, required: false, array: true },
      { key: 'expert', type: 'string', size: 500, required: false, array: true },
      { key: 'joiningYear', type: 'integer', required: false },
      { key: 'participated', type: 'boolean', required: false, default: false },
      { key: 'paymentStatus', type: 'string', size: 50, required: false },
      { key: 'source', type: 'enum', elements: ['import', 'self'], required: false, default: 'import' },
      { key: 'verified', type: 'boolean', required: false, default: false },
      { key: 'createdAt', type: 'datetime', required: false },
      { key: 'updatedAt', type: 'datetime', required: false }
    ];
    
    for (const attr of attributes) {
      try {
        await databases.createStringAttribute(DATABASE_ID, 'members_registry', attr.key, attr.size, attr.required, attr.default, attr.array);
        console.log(`  ✓ ${attr.key}`);
        await sleep(1000); // Wait for attribute to be available
      } catch (error) {
        console.log(`  ⚠ ${attr.key}: ${error.message}`);
      }
    }
    
    // Create indexes
    console.log('\n📊 Creating indexes...');
    await sleep(2000);
    
    try {
      await databases.createIndex(DATABASE_ID, 'members_registry', 'email_unique', 'unique', ['email']);
      console.log('  ✓ email_unique');
    } catch (e) { console.log('  ⚠ email_unique:', e.message); }
    
    try {
      await databases.createIndex(DATABASE_ID, 'members_registry', 'phone_idx', 'key', ['phone']);
      console.log('  ✓ phone_idx');
    } catch (e) { console.log('  ⚠ phone_idx:', e.message); }
    
    try {
      await databases.createIndex(DATABASE_ID, 'members_registry', 'memberId_idx', 'key', ['memberId']);
      console.log('  ✓ memberId_idx');
    } catch (e) { console.log('  ⚠ memberId_idx:', e.message); }
    
    try {
      await databases.createIndex(DATABASE_ID, 'members_registry', 'batch_idx', 'key', ['batch']);
      console.log('  ✓ batch_idx');
    } catch (e) { console.log('  ⚠ batch_idx:', e.message); }
    
  } catch (error) {
    if (error.code === 409) {
      console.log('⚠️  Collection already exists');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

async function createUsersCollection() {
  console.log('\n👥 Creating users collection...');
  
  try {
    const collection = await databases.createCollection(
      DATABASE_ID,
      'users',
      'Users',
      [
        Permission.create(Role.users()),
        Permission.delete(Role.team('admin'))
      ]
    );
    console.log('✅ Collection created:', collection.$id);
    
    // Note: Document-level permissions will be set when creating documents
    console.log('ℹ️  Note: Read/Update permissions are document-level (set per user)');
    
    await sleep(2000);
    
    // Create attributes (simplified - you'll need to use the appropriate method for each type)
    console.log('\n📝 Creating attributes (this may take a few minutes)...');
    
    const stringAttrs = [
      { key: 'userId', size: 255, required: true },
      { key: 'memberId', size: 50, required: false },
      { key: 'name', size: 100, required: true },
      { key: 'phone', size: 20, required: false },
      { key: 'batch', size: 20, required: false },
      { key: 'roll', size: 20, required: false },
      { key: 'department', size: 10, required: false },
      { key: 'address', size: 500, required: false },
      { key: 'guardianPhone', size: 20, required: false },
      { key: 'bio', size: 1000, required: false },
      { key: 'socialLinks', size: 1000, required: false, default: '{}' }
    ];
    
    for (const attr of stringAttrs) {
      try {
        await databases.createStringAttribute(DATABASE_ID, 'users', attr.key, attr.size, attr.required, attr.default);
        console.log(`  ✓ ${attr.key}`);
        await sleep(1000);
      } catch (e) { console.log(`  ⚠ ${attr.key}: ${e.message}`); }
    }
    
    // Email attribute
    try {
      await databases.createEmailAttribute(DATABASE_ID, 'users', 'email', true);
      console.log('  ✓ email');
      await sleep(1000);
    } catch (e) { console.log('  ⚠ email:', e.message); }
    
    // URL attribute
    try {
      await databases.createUrlAttribute(DATABASE_ID, 'users', 'photoUrl', false);
      console.log('  ✓ photoUrl');
      await sleep(1000);
    } catch (e) { console.log('  ⚠ photoUrl:', e.message); }
    
    // Enum attribute
    try {
      await databases.createEnumAttribute(DATABASE_ID, 'users', 'bloodGroup', ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], false);
      console.log('  ✓ bloodGroup');
      await sleep(1000);
    } catch (e) { console.log('  ⚠ bloodGroup:', e.message); }
    
    // Boolean attributes
    const boolAttrs = [
      { key: 'isAdmin', default: false },
      { key: 'profileComplete', default: false }
    ];
    
    for (const attr of boolAttrs) {
      try {
        await databases.createBooleanAttribute(DATABASE_ID, 'users', attr.key, false, attr.default);
        console.log(`  ✓ ${attr.key}`);
        await sleep(1000);
      } catch (e) { console.log(`  ⚠ ${attr.key}: ${e.message}`); }
    }
    
    // DateTime attributes
    const dateAttrs = ['dateOfBirth', 'createdAt', 'updatedAt'];
    for (const key of dateAttrs) {
      try {
        await databases.createDatetimeAttribute(DATABASE_ID, 'users', key, false);
        console.log(`  ✓ ${key}`);
        await sleep(1000);
      } catch (e) { console.log(`  ⚠ ${key}: ${e.message}`); }
    }
    
    // Create indexes
    console.log('\n📊 Creating indexes...');
    await sleep(2000);
    
    try {
      await databases.createIndex(DATABASE_ID, 'users', 'userId_unique', 'unique', ['userId']);
      console.log('  ✓ userId_unique');
    } catch (e) { console.log('  ⚠ userId_unique:', e.message); }
    
    try {
      await databases.createIndex(DATABASE_ID, 'users', 'email_unique', 'unique', ['email']);
      console.log('  ✓ email_unique');
    } catch (e) { console.log('  ⚠ email_unique:', e.message); }
    
    try {
      await databases.createIndex(DATABASE_ID, 'users', 'memberId_idx', 'key', ['memberId']);
      console.log('  ✓ memberId_idx');
    } catch (e) { console.log('  ⚠ memberId_idx:', e.message); }
    
  } catch (error) {
    if (error.code === 409) {
      console.log('⚠️  Collection already exists');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

async function createProfilePhotosBucket() {
  console.log('\n📷 Creating profile_photos bucket...');
  
  try {
    const bucket = await storage.createBucket(
      'profile_photos',
      'Profile Photos',
      [
        Permission.read(Role.any()),
        Permission.create(Role.users())
      ],
      false, // fileSecurity
      true,  // enabled
      5242880, // 5MB
      ['jpg', 'jpeg', 'png', 'webp'],
      'gzip', // compression
      true,  // encryption
      true   // antivirus
    );
    console.log('✅ Bucket created:', bucket.$id);
  } catch (error) {
    if (error.code === 409) {
      console.log('⚠️  Bucket already exists');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showManualInstructions() {
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
}

// Main execution
async function main() {
  console.log('\n🚀 Starting Appwrite Setup...\n');
  console.log(`Endpoint: ${APPWRITE_ENDPOINT}`);
  console.log(`Project: ${APPWRITE_PROJECT_ID}`);
  console.log(`Database: ${DATABASE_ID}\n`);
  
  try {
    await createMembersRegistry();
    await sleep(3000); // Give Appwrite time to process
    
    await createUsersCollection();
    await sleep(3000);
    
    await createProfilePhotosBucket();
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ SETUP COMPLETE!');
    console.log('='.repeat(80));
    console.log('\nNext steps:');
    console.log('1. Register an account at http://localhost:5174/auth');
    console.log('2. In Appwrite Console, find your user in the "users" collection');
    console.log('3. Edit the document and set "isAdmin" to true');
    console.log('4. Navigate to http://localhost:5174/admin/import-members');
    console.log('5. Upload cpc all members.csv and click Import\n');
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.log('\nTry running in manual mode to see detailed instructions:');
    console.log('node src/lib/membersSetup.js --manual\n');
    process.exit(1);
  }
}

main();
