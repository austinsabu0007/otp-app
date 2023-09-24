// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIepkX1Z5lEGukIwCEDl_Pm-e33-IEY5o",
  authDomain: "otp-verify-d544f.firebaseapp.com",
  projectId: "otp-verify-d544f",
  storageBucket: "otp-verify-d544f.appspot.com",
  messagingSenderId: "479905066251",
  appId: "1:479905066251:web:ef52cd23d99e4766e4460e",
  measurementId: "G-3S7K02VF5X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
