import firebase from 'firebase';
/*
import firestore from 'firebase/firestore';
*/

// const settings = {timestampsInSnapshots: true};
const settings = {};

const config = {
  apiKey: "AIzaSyBavh40S2d8b8dW-UvRazybsBfUfb3YNSY",
  authDomain: "db-for-newsurvey.firebaseapp.com",
  databaseURL: "https://db-for-newsurvey-default-rtdb.firebaseio.com",
  projectId: "db-for-newsurvey",
  storageBucket: "db-for-newsurvey.appspot.com",
  messagingSenderId: "474932150790",
  appId: "1:474932150790:web:d252649b0dd419e6fdf987",
  measurementId: "G-V570RNGE9K"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
