// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-416015.firebaseapp.com",
  projectId: "blogapp-416015",
  storageBucket: "blogapp-416015.appspot.com",
  messagingSenderId: "384330586556",
  appId: "1:384330586556:web:f26d8abd7f2ac2b83773b9",
  measurementId: "G-SKE6YPM9P8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);