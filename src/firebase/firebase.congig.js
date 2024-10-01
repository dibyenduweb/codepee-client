
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDevCdSnsuLw338QAXfWb3ITXwKDaVLTZ0",
  authDomain: "codepee-b08bf.firebaseapp.com",
  projectId: "codepee-b08bf",
  storageBucket: "codepee-b08bf.appspot.com",
  messagingSenderId: "995327490057",
  appId: "1:995327490057:web:9b4c1db4afef2a013f20d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
