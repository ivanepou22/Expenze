import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAfHgzPCkAmx371f8Ebo7h1cc2amDv5Jw8",
    authDomain: "expenze-658ed.firebaseapp.com",
    projectId: "expenze-658ed",
    storageBucket: "expenze-658ed.appspot.com",
    messagingSenderId: "120391789385",
    appId: "1:120391789385:web:8c9776b017f7b5d66cc898",
    measurementId: "G-9XBXE7E2BB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };
