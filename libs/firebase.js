// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blognet-410107.firebaseapp.com",
  projectId: "blognet-410107",
  storageBucket: "blognet-410107.appspot.com",
  messagingSenderId: "843563784559",
  appId: "1:843563784559:web:8ae23bc3a9ba643f00b09a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
