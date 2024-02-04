import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4d100.firebaseapp.com",
  projectId: "mern-blog-4d100",
  storageBucket: "mern-blog-4d100.appspot.com",
  messagingSenderId: "765843690409",
  appId: "1:765843690409:web:2a240725d23b2a68286ab8",
};

export const app = initializeApp(firebaseConfig);
