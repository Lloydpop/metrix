import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxkNOMzeCRqm5utpgTR0y2hA72tfnuT3Y",
  authDomain: "metrix2.firebaseapp.com",
  projectId: "metrix2",
  storageBucket: "metrix2.appspot.com",
  messagingSenderId: "579765905502",
  appId: "1:579765905502:web:1758fb4cd1688629c16ccf",
  measurementId: "G-LQR3Q2DGXM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
