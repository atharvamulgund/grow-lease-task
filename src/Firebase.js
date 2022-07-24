// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaMCLmkJcfvtic7Qvc2f2Udll0cnvA0BA",
  authDomain: "task-7b0dd.firebaseapp.com",
  projectId: "task-7b0dd",
  storageBucket: "task-7b0dd.appspot.com",
  messagingSenderId: "1011633549215",
  appId: "1:1011633549215:web:a4a1975443cc8f45ab57aa"
};
console.log("Iam Firebase")
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();


