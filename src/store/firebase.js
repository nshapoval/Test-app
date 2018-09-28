import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDES2AwF1OPmGOaUdt2AcU9Q4peZwbcIbw",
    authDomain: "user-profile-firestore.firebaseapp.com",
    databaseURL: "https://user-profile-firestore.firebaseio.com",
    projectId: "user-profile-firestore",
    storageBucket: "user-profile-firestore.appspot.com",
    messagingSenderId: "130623263822"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;