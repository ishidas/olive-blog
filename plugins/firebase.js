import * as firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';


if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey:        process.env.FIREBASE_WEB_KEY,
    authDomain:    `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL:   `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId:     `${process.env.FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
const firebaseDB = firebase.firestore();
console.log('firebaseDB ', firebaseDB);

export {firebaseDB};
