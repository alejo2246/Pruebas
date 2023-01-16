// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfJt2K4G63WAKzNazxT3eeYRrL5mDIdx4",
  authDomain: "progressive-savings.firebaseapp.com",
  projectId: "progressive-savings",
  storageBucket: "progressive-savings.appspot.com",
  messagingSenderId: "411087040951",
  appId: "1:411087040951:web:e0c740f10f8f2b6fe7b832",
  measurementId: "G-6TH8BD63ZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
// Add a new document in collection "cities"

export async function insert(money, numbers) {
  try {
    await setDoc(doc(db, "selectedNumbers", "Page1"), {
      money: money,
      numbers,
    });
  } catch (error) {
    throw new Error(error);
  }
}
export const getData =() => getDoc(doc(db, "selectedNumbers", "Page1"));



