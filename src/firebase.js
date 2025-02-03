// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjLEmK_PNF7oVzMNo5sTteREX_ch1LdGQ",
  authDomain: "okdm-me.firebaseapp.com",
  projectId: "okdm-me",
  storageBucket: "okdm-me.firebasestorage.app",
  messagingSenderId: "424600364543",
  appId: "1:424600364543:web:9b3ccfa3aaab41c2f873ca",
  measurementId: "G-FE30962TBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);