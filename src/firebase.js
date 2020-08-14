import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-NNTMh6oSRXOlzTl7kXY4lK77mTXw0R4",
  authDomain: "tinder-clone-21b42.firebaseapp.com",
  databaseURL: "https://tinder-clone-21b42.firebaseio.com",
  projectId: "tinder-clone-21b42",
  storageBucket: "tinder-clone-21b42.appspot.com",
  messagingSenderId: "15186997684",
  appId: "1:15186997684:web:7f973b8f52d6204e9202e1",
  measurementId: "G-5WFR29CGS5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
