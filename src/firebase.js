// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCPmM2A3XOmqialpi8DZxZbqlTjDybBrnE",
    authDomain: "twitter-clone-fc9b6.firebaseapp.com",
    projectId: "twitter-clone-fc9b6",
    storageBucket: "twitter-clone-fc9b6.appspot.com",
    messagingSenderId: "637893787522",
    appId: "1:637893787522:web:9bb69c0e1fe72a2bf7599b",
    measurementId: "G-0WDPFK7D31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;