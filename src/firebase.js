import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1HK0qKnXB1mEZt1G9mqpeFEO8EC9DVFw",
    authDomain: "facebook-57bc3.firebaseapp.com",
    projectId: "facebook-57bc3",
    storageBucket: "facebook-57bc3.appspot.com",
    messagingSenderId: "846649020",
    appId: "1:846649020:web:2c2bac73ccea962cd0a2b9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;