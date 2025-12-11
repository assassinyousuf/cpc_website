import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './contexts/AuthContext.jsx';
import { client } from './lib/appwrite.js';

// Verify Appwrite connection on app startup
client.ping()
  .then(() => console.log('✅ Appwrite connection successful'))
  .catch((error) => console.error('❌ Appwrite connection failed:', error));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
