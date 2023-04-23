// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANzrzMJuvpd8AhpKG2jD1OGlLe_1HHxsc",
  authDomain: "myfirstproject-e85c5.firebaseapp.com",
  databaseURL: "https://myfirstproject-e85c5-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-e85c5",
  storageBucket: "myfirstproject-e85c5.appspot.com",
  messagingSenderId: "288784172549",
  appId: "1:288784172549:web:c28cbc93677b4628d17e6c",
  measurementId: "G-HLS36Q5DYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);