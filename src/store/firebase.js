import firebase from 'firebase';
import ("firebase/firestore");
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_FIRE_BASE_KEY,
    authDomain: "user-profile-firestore.firebaseapp.com",
    databaseURL: "https://user-profile-firestore.firebaseio.com",
    projectId: "user-profile-firestore",
    storageBucket: "user-profile-firestore.appspot.com",
    messagingSenderId: process.env.REACT_APP_API_FIRE_BASE_MESSAGING_ID
  });

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
export default db;
