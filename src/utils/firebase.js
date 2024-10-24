// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZnjiHPswyuWOTU1FBOs2Mr7mKwrpqUA8",
    authDomain: "netflix-gpt-907bf.firebaseapp.com",
    projectId: "netflix-gpt-907bf",
    storageBucket: "netflix-gpt-907bf.appspot.com",
    messagingSenderId: "850529315652",
    appId: "1:850529315652:web:49aeab8c734fa8827d0511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();