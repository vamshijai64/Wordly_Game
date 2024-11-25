import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjVP_YVJzN91fFlXe51e6Id8zLdNWWn6k",
    authDomain: "signin-ea74f.firebaseapp.com",
    projectId: "signin-ea74f",
    storageBucket: "signin-ea74f.firebasestorage.app",
    messagingSenderId: "621834854954",
    appId: "1:621834854954:web:2ee447a49086c1c7e69953",
    measurementId: "G-J43NMMH6JQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, GoogleAuthProvider, signInWithPopup, signOut };
