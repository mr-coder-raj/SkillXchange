// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhFoaIW6es1IiXyhmtSDB-TltIb64wWiI",
    authDomain: "speakspace-83925.firebaseapp.com",
    projectId: "speakspace-83925",
    storageBucket: "speakspace-83925.firebasestorage.app",
    messagingSenderId: "739426144931",
    appId: "1:739426144931:web:6f7af8351ecd0a90282516",
    measurementId: "G-1YWKJFLG56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };