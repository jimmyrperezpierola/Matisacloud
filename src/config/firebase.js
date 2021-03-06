import firebase from 'firebase';
//import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { functions } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXcjbC5P4FFcxThrP52CsltFT777FOeoI",
    authDomain: "reddiamont-c61ca.firebaseapp.com",
    projectId: "reddiamont-c61ca",
    storageBucket: "reddiamont-c61ca.appspot.com",
    messagingSenderId: "735988155556",
    appId: "1:735988155556:web:ce4db09fce9510340ad231",
    measurementId: "G-RD3H1QSXMP"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const firebaseAuth = {};
//export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();

export const firebaseConection=()=> {
  console.log('..::firebase Connection::..');

  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebaseAuth = null; 
      // firebaseAuth = firebase.auth();
      console.log('Firebase has been initialized!!');
  }
  else {
      console.log('Firebase is already initialized');
  }
};

// export const auth = firebaseAuth;

// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

//const getUserDocument = async uid => {
export const auth = firebaseAuth => {
    return firebaseAuth;
}

export const generateUserDocument = async (user, firstName, lastName) => {
  if (!user) return;
  console.log('generateUserDocument>>>>>>>>>>>>>');

  const firestore = firebase.firestore();
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;

    //const newID = firebase.database.ref().push().key;
    //const newID = firestore.database.ref.uid;
    //const newID = firebase.firestore().collection('users').doc().id
    //const id = firestore.database.ref.userId;

    try {
      await userRef.set({
        email,
        firstName,
        lastName
      });      
      console.log('generateUserDocument useRef successfully!');

      // await userRef.set({
      //   email,
      //   first_name,
      //   last_name,
      //   ...additionalData
      // });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;

  const firestore = firebase.firestore();
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
}; 

export default firebaseConection