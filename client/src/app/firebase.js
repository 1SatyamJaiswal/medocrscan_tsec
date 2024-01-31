// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCg6mfXs8UjLSi5VKLeimXmWshX2VvkMWU",
    authDomain: "medscannerocr.firebaseapp.com",
    projectId: "medscannerocr",
    storageBucket: "medscannerocr.appspot.com",
    messagingSenderId: "801970281568",
    appId: "1:801970281568:web:aac1508f9dfa23988cb705",
    measurementId: "G-1PF3JYRDH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
