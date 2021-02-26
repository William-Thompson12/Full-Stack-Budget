// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "budget-tool-dc.firebaseapp.com",
    projectId: "budget-tool-dc",
    storageBucket: "budget-tool-dc.appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;