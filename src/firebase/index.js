
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAAxHBN1l1A_vP1_gDJKGDd2yRUOJmGuA",
  authDomain: "juliauscv.firebaseapp.com",
  projectId: "juliauscv",
  storageBucket: "juliauscv.firebasestorage.app",
  messagingSenderId: "918147115602",
  appId: "1:918147115602:web:18356e2cf84f4a04b24d8b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
  db
}