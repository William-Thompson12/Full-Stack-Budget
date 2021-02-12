// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFyYkZGh_zxNTm1-IL8G6ERtwB_POprUg",
    authDomain: "budget-tool-dc.firebaseapp.com",
    projectId: "budget-tool-dc",
    storageBucket: "budget-tool-dc.appspot.com",
    messagingSenderId: "550952491264",
    appId: "1:550952491264:web:31431ec0377a81010a3be5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;