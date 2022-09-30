// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import Firebase, {
  getAuth,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getIdToken,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  collectionGroup,
  collection,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDapTQndhkTmpTBur0lRGO1H6SEaZmJ5MU',
  authDomain: 'learning-firebase-a4e0f.firebaseapp.com',
  projectId: 'learning-firebase-a4e0f',
  storageBucket: 'learning-firebase-a4e0f.appspot.com',
  messagingSenderId: '360462274862',
  appId: '1:360462274862:web:86ada701189d9482b96abf',
  measurementId: 'G-07HR65WMS1',
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const Auth = getAuth(FirebaseApp);
const DB = getFirestore(FirebaseApp);
const Analytics = getAnalytics(FirebaseApp);

module.exports = {
  Auth,
  Analytics,
  createUserWithEmailAndPassword,
  DB,
  getAdditionalUserInfo,
  getIdToken,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
  Firebase,
  FirebaseApp,
  addDoc,
  collectionGroup,
  collection,
  updateDoc,
  getDoc,
};
