// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD63QHFXKYpa4hW7q_ZcBEs5FJ0fMUVX08",
    authDomain: "application-9b0e6.firebaseapp.com",
    projectId: "application-9b0e6",
    storageBucket: "application-9b0e6.appspot.com",
    messagingSenderId: "21062583576",
    appId: "1:21062583576:web:a5790770f8a55044a30a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;