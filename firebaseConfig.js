// Import the functions needed from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNwrbqAFdbUdL2Yqp0ffiHnQaQK6OUnY",
  authDomain: "contactformproject-12345.firebaseapp.com",
  projectId: "contactformproject-12345",
  storageBucket: "contactformproject-12345.appspot.com",  // Corrected the storage bucket URL
  messagingSenderId: "847356731354",
  appId: "1:847356731354:web:f7c291088f3a64affa6ae3",
  measurementId: "G-1SRQJXNM0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Conditionally initialize Analytics on the client-side
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
