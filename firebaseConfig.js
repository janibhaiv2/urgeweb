// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqNwrbqAFdbUdL2Yqp0ffiHnQaQK6OUnY",
  authDomain: "contactformproject-12345.firebaseapp.com",
  projectId: "contactformproject-12345",
  storageBucket: "contactformproject-12345.firebasestorage.app",
  messagingSenderId: "847356731354",
  appId: "1:847356731354:web:f7c291088f3a64affa6ae3",
  measurementId: "G-1SRQJXNM0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);