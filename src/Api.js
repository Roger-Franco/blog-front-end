// import firebase from "firebase/app";
// import "firebase/firebase-auth";
// import "firebase/firebase-firestore";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { initializeApp, auth } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);
const db = getFirestore();

export default {
  googleLogar: async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    let result = await signInWithPopup(auth, provider);
    return result;
  },
  // emailPasswordLogar: async ({ email, senha }) => {
  //   const provider = firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, senha)
  //     .then((response) => response);
  // },
};
