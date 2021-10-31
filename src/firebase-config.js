// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDs_eb_JImv9EOUmewU2qS_WzRJuHy69QQ",
    authDomain: "fir-call-a2e76.firebaseapp.com",
    projectId: "fir-call-a2e76",
    storageBucket: "fir-call-a2e76.appspot.com",
    messagingSenderId: "843930738833",
    appId: "1:843930738833:web:5a31eac30aedf4d92c5f30",
    measurementId: "G-XXQTMWFB17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
