// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";  COMENTE ISSO 
import {getFirestore} from "firebase/firestore"  //adicione isso ----


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl4fyMvwibFWKR8cC_fnH1hAEs8D-GgMo",
  authDomain: "lista-de-compras-7405a.firebaseapp.com",
  projectId: "lista-de-compras-7405a",
  storageBucket: "lista-de-compras-7405a.firebasestorage.app",
  messagingSenderId: "513965246572",
  appId: "1:513965246572:web:4da562819d4e7f71867049",
  measurementId: "G-BD2H1C0G7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)  //adicione isso -----