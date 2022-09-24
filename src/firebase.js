// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHwPP7oyTDf2qsRLbgx9nYdrjXaxguINU",
  authDomain: "montblanc-menu.firebaseapp.com",
  projectId: "montblanc-menu",
  storageBucket: "montblanc-menu.appspot.com",
  messagingSenderId: "903591134961",
  appId: "1:903591134961:web:44c6721123c0ee0672cb50",
  measurementId: "G-HKV2K8H6S8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);