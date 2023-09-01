import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCFtZr9ZLe4DcOzh7UV1ubtOy8t_RLv6Tw",
    authDomain: "notebook-2f744.firebaseapp.com",
    projectId: "notebook-2f744",
    storageBucket: "notebook-2f744.appspot.com",
    messagingSenderId: "760689779531",
    appId: "1:760689779531:web:d0c911c6a359636dc13ece",
    measurementId: "G-X8DJKRD54J"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();