// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2JWvlkzwOwVx8ruNXZbjVolvYuC80Yf4",
  authDomain: "react-app-72948.firebaseapp.com",
  projectId: "react-app-72948",
  storageBucket: "react-app-72948.appspot.com",
  messagingSenderId: "355163298930",
  appId: "1:355163298930:web:344f2ac25ca51176bbf6eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;