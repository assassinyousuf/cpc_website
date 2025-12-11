import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5URKc-oaiKqIL5bHXa6Jj3W37_E9JhU",
  authDomain: "diucpc-80ef1.firebaseapp.com",
  projectId: "diucpc-80ef1",
  storageBucket: "diucpc-80ef1.firebasestorage.app",
  messagingSenderId: "173498411192",
  appId: "1:173498411192:web:8808d18edaf3f6dc3a2c4d",
  measurementId: "G-W2Q6YDM257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics only in browser
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;
