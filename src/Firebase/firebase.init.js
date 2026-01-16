import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBYFykYqB8fWlF3T9JYhS7yUOESwW_HmYE",
  authDomain: "ai-project-15af2.firebaseapp.com",
  projectId: "ai-project-15af2",
  storageBucket: "ai-project-15af2.firebasestorage.app",
  messagingSenderId: "605209933721",
  appId: "1:605209933721:web:28dabc63216a14c21d8508"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);