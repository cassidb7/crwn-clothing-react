import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDh_8gQTumfqFbN1wuRB2dz1b1L4gWw8uY",
  authDomain: "crwn-clothing-db-ea451.firebaseapp.com",
  projectId: "crwn-clothing-db-ea451",
  storageBucket: "crwn-clothing-db-ea451.appspot.com",
  messagingSenderId: "40188781289",
  appId: "1:40188781289:web:1962191a5615d42ff90678"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
}