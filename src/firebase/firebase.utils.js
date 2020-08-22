import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyB8hJJ-SFCAS9vTUIE9P0mfbkxizdMlFII",
  authDomain: "online-store-fea19.firebaseapp.com",
  databaseURL: "https://online-store-fea19.firebaseio.com",
  projectId: "online-store-fea19",
  storageBucket: "online-store-fea19.appspot.com",
  messagingSenderId: "1083704156186",
  appId: "1:1083704156186:web:ff2fe5ab991122dd0eb1a3",
  measurementId: "G-N9XCWBSR7N"
};
  
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth
.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;