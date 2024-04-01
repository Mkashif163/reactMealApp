import { initializeApp } from "firebase/app";

const {
  VITE_APP_API_KEY,
  VITE_APP_AUTH_DOMAIN,
  VITE_APP_DATABASE_URL,
  VITE_APP_PROJECT_ID,
  VITE_APP_STORAGE_BUCKET,
  VITE_APP_MESSAGING_SENDER_ID,
  VITE_APP_APP_ID,
} = import.meta.env;

// Create Firebase configuration object
const firebaseConfig = {
  apiKey: VITE_APP_API_KEY,
  authDomain: VITE_APP_AUTH_DOMAIN,
  databaseURL: VITE_APP_DATABASE_URL,
  projectId: VITE_APP_PROJECT_ID,
  storageBucket: VITE_APP_STORAGE_BUCKET,
  messagingSenderId: VITE_APP_MESSAGING_SENDER_ID,
  appId: VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
