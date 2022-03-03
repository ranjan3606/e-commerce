import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8Mh-kU8jIM7c6Vot8D9gon8l7vAcuaU4",
    authDomain: "instagram-clone-97bbf.firebaseapp.com",
    projectId: "instagram-clone-97bbf",
    storageBucket: "instagram-clone-97bbf.appspot.com",
    messagingSenderId: "79325740692",
    appId: "1:79325740692:web:08e36e6980d82bf113fe81",
    measurementId: "G-RXJK54PEEC"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref()

export { auth, db, storage};