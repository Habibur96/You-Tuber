// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9AQSAm6sz0Fx8NEuXTpWszkZ330kgwlk",
    authDomain: "you-tuber-7f6b5.firebaseapp.com",
    projectId: "you-tuber-7f6b5",
    storageBucket: "you-tuber-7f6b5.appspot.com",
    messagingSenderId: "885346335587",
    appId: "1:885346335587:web:7304be202e4faab50f7156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;