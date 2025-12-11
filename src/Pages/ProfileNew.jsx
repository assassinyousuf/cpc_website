import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { authService, storageService } from '../lib/appwriteService';
import { ID } from 'appwrite';

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    batch: '',
    roll: '',
    department: '',
    bloodGroup: '',
    address: '',
    guardianPhone: '',
    dateOfBirth: '',
    bio: '',
    facebook: '',
    linkedin: '',
    github: ''
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const userProfile = await authService.getUserProfile(user.id);
      setProfile(userProfile);
      
      // Populate form
      setFormData({
        name: userProfile.name || '',
        phone: userProfile.phone || '',
        batch: userProfile.batch || '',
        roll: userProfile.roll || '',
        department: userProfile.department || '',
        bloodGroup: userProfile.bloodGroup || '',
        address: userProfile.address || '',
        guardianPhone: userProfile.guardianPhone || '',
        dateOfBirth: userProfile.dateOfBirth ? userProfile.dateOfBirth.split('T')[0] : '',
        bio: userProfile.bio || '',
        facebook: userProfile.socialLinks?.facebook || '',
        linkedin: userProfile.socialLinks?.linkedin || '',
        github: userProfile.socialLinks?.github || ''
      });
    } catch (err) {
      console.error('Load profile error:', err);
      setError('Failed to load profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPG, PNG, and WebP images are allowed');
      return;
    }

    try {
      setUploading(true);
      setError('');
      
      // Delete old photo if exists
      if (profile.photoUrl) {
        try {
          const oldFileId = profile.photoUrl.split('/files/')[1]?.split('/')[0];
          if (oldFileId) {
            await storageService.deleteFile('profile_photos', oldFileId);
          }
        } catch (deleteError) {
          console.warn('Could not delete old photo:', deleteError);
        }
      }

      // Upload new photo
      const fileId = ID.unique();
      const uploadedFile = await storageService.uploadFile('profile_photos', fileId, file);
      const photoUrl = storageService.getFileView('profile_photos', uploadedFile.$id);

      // Update profile with new photo URL
      await authService.updateProfile(user.id, { photoUrl });
      
      setProfile(prev => ({ ...prev, photoUrl }));
      setSuccess('Photo updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Photo upload error:', err);
      setError('Failed to upload photo. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      // Prepare update data
      const updateData = {
        name: formData.name,
        phone: formData.phone,
        batch: formData.batch,
        roll: formData.roll,
        department: formData.department,
        bloodGroup: formData.bloodGroup,
        address: formData.address,
        guardianPhone: formData.guardianPhone,
        dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString() : '',
        bio: formData.bio,
        socialLinks: {
          facebook: formData.facebook,
          linkedin: formData.linkedin,
          github: formData.github
        },
        profileComplete: true
      };

      await authService.updateProfile(user.id, updateData);
      
      setSuccess('Profile updated successfully!');
      setEditMode(false);
      await loadProfile();
      
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Update profile error:', err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Please log in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">My Profile</h1>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/20 border border-green-500 text-green-100 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-8 border-b border-white/20">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                {profile?.photoUrl ? (
                  <img src={profile.photoUrl} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-lg">
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handlePhotoUpload}
                  disabled={uploading}
                />
                {uploading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </label>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">{profile?.name}</h2>
              <p className="text-blue-300">{profile?.email}</p>
              {profile?.batch && (
                <p className="text-gray-300 mt-1">Batch: {profile.batch} | Roll: {profile.roll || 'N/A'}</p>
              )}
              {profile?.department && (
                <p className="text-gray-300">Department: {profile.department}</p>
              )}
              {profile?.isAdmin && (
                <span className="inline-block mt-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                  Admin
                </span>
              )}
            </div>

            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Profile Form */}
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+8801XXXXXXXXX"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    placeholder="D-78"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Roll</label>
                  <input
                    type="text"
                    name="roll"
                    value={formData.roll}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                    <option value="English">English</option>
                    <option value="Law">Law</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Blood Group</label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Guardian Phone</label>
                  <input
                    type="tel"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleChange}
                    placeholder="+8801XXXXXXXXX"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about yourself..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Facebook</label>
                    <input
                      type="url"
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                      placeholder="https://facebook.com/username"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">GitHub</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false);
                    loadProfile();
                  }}
                  className="px-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Profile Information Display */}
              <div className="grid md:grid-cols-2 gap-6">
                {profile?.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                    <p className="text-lg">{profile.phone}</p>
                  </div>
                )}

                {profile?.bloodGroup && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Blood Group</label>
                    <p className="text-lg">{profile.bloodGroup}</p>
                  </div>
                )}

                {profile?.dateOfBirth && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Date of Birth</label>
                    <p className="text-lg">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                  </div>
                )}

                {profile?.guardianPhone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Guardian Phone</label>
                    <p className="text-lg">{profile.guardianPhone}</p>
                  </div>
                )}
              </div>

              {profile?.address && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                  <p className="text-lg">{profile.address}</p>
                </div>
              )}

              {profile?.bio && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                  <p className="text-lg">{profile.bio}</p>
                </div>
              )}

              {(profile?.socialLinks?.facebook || profile?.socialLinks?.linkedin || profile?.socialLinks?.github) && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Social Links</label>
                  <div className="flex gap-4">
                    {profile.socialLinks.facebook && (
                      <a href={profile.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        Facebook
                      </a>
                    )}
                    {profile.socialLinks.linkedin && (
                      <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        LinkedIn
                      </a>
                    )}
                    {profile.socialLinks.github && (
                      <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}

              {!profile?.profileComplete && (
                <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-100 px-4 py-3 rounded">
                  <p className="font-semibold">Profile Incomplete</p>
                  <p className="text-sm mt-1">Please complete your profile by adding all required information.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
