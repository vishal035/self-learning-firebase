// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getDatabase,
  serverTimestamp,
  child,
  get,
  ref,
  set,
} from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDapTQndhkTmpTBur0lRGO1H6SEaZmJ5MU',
  authDomain: 'learning-firebase-a4e0f.firebaseapp.com',
  projectId: 'learning-firebase-a4e0f',
  storageBucket: 'learning-firebase-a4e0f.appspot.com',
  messagingSenderId: '360462274862',
  appId: '1:360462274862:web:86ada701189d9482b96abf',
  measurementId: 'G-07HR65WMS1',
  dataBaseURL: 'https://learning-firebase-a4e0f-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const Auth = getAuth(FirebaseApp);
const DB = getDatabase(FirebaseApp);
const Analytics = getAnalytics(FirebaseApp);

/** Main Login and Signup Function */

export async function SignupWithEmailAndPassword(name, email, password) {
  const signupData = await createUserWithEmailAndPassword(Auth, email, password)
    .then(async (userCredential) => {
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      console.log(userCredential.user);

      const user = await set(ref(DB, 'users/' + userCredential.user.uid), {
        Full_Name: name,
        email,
        createdAt: serverTimestamp(),
      })
        .then(async () => {
          const newuser = await get(
            child(ref(getDatabase()), `users/${userCredential.user.uid}`)
          );
          if (newuser.exists()) {
            // console.log(user.val());
            return newuser.val();
          }
        })
        .catch((error) => {
          return error;
          // new Error(error)
        });
      // console.log(user);
      return { signupData: userCredential.user, user };
    })
    .catch((error) => error);
  return signupData;
}

export async function signinWithEmailAndPassword(email, password) {
  const LoginData = await signInWithEmailAndPassword(Auth, email, password)
    .then(async (userCredential) => {
      // console.log(userCredential.user);

      // Getting saved data from db
      const user = await get(
        child(ref(getDatabase()), `users/${userCredential.user.uid}`)
      );
      if (user.exists()) {
        // console.log(user.val());
        return { loginData: userCredential.user, user: user.val() };
      }
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return LoginData;
}
