// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmjc8Vm1dz-HutY110K6if58HimrIB1vQ",
  authDomain: "artistryhub-9bc66.firebaseapp.com",
  projectId: "artistryhub-9bc66",
  storageBucket: "artistryhub-9bc66.appspot.com",
  messagingSenderId: "707571423945",
  appId: "1:707571423945:web:809a513c7ce948b9844b18",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);