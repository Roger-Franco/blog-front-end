import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// export default {
//   googleLogar: async () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     let result = await signInWithPopup(auth, provider);
//     return result;
//   },
// emailPasswordLogar: async ({ email, senha }) => {
//   const provider = firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, senha)
//     .then((response) => response);
// },
// };
