// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc, getDoc, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApCIPiHjiZBC4N3omty35DKkjYYLiEUjA",
    authDomain: "valentines-b9ba0.firebaseapp.com",
    projectId: "valentines-b9ba0",
    storageBucket: "valentines-b9ba0.appspot.com",
    messagingSenderId: "668011836994",
    appId: "1:668011836994:web:69b2968c6acbc5df2c9fdb",
    measurementId: "G-MHMLRN0V4G"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth, collection, setDoc, doc, getDoc, addDoc, ref, uploadBytes, getDownloadURL };