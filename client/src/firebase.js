
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-2-cc2cd.firebaseapp.com",
  projectId: "mern-2-cc2cd",
  storageBucket: "mern-2-cc2cd.appspot.com",
  messagingSenderId: "245449330737",
  appId: "1:245449330737:web:97ca8876317f91e2a78510"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

 