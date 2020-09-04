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


export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
      
    }
  }
 return userRef;
  
}
  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth
.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;