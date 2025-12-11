import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../lib/appwriteService';

const AuthContext = createContext();

export { AuthContext };

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        setUser({
          ...currentUser,
          avatar: currentUser.avatar || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
        });
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      await authService.login(credentials.email, credentials.password);
      await checkAuth(); // Refresh user data
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Failed to login');
    }
  };

  const register = async (userData) => {
    try {
      const result = await authService.register({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        phone: userData.phoneNumber || userData.phone,
        batch: userData.academicYear || userData.batch,
        roll: userData.roll,
        department: userData.department,
        guardianPhone: userData.guardianPhone,
        address: userData.address,
        bloodGroup: userData.bloodGroup
      });
      await checkAuth(); // Refresh user data
      return { 
        success: true,
        isRegistryMember: result.isRegistryMember,
        profileComplete: result.profileComplete
      };
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error(error.message || 'Failed to register');
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      setIsAuthenticated(false);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Failed to logout');
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    register,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
