import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtc2sYeptNwkr2T6v2TFmaJ7FiIZcG7d4",
  authDomain: "facebook-messenger-clone-8e651.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-8e651.firebaseio.com",
  projectId: "facebook-messenger-clone-8e651",
  storageBucket: "facebook-messenger-clone-8e651.appspot.com",
  messagingSenderId: "331431643479",
  appId: "1:331431643479:web:fa92125e4c5243265c9612",
  measurementId: "G-REK9Z2RJHB",
});

const db = firebaseApp.firestore();

export default db;
