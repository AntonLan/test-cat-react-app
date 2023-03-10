// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.RREACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.RREACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.RREACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.RREACT_APP_MESSAGING_SENDER,
    appId: process.env.RREACT_APP_APP_ID
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);