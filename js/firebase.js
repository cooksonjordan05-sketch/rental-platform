// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKcF_5c7sFaGU3wK0cSEghCoTx1R5kUPE",
  authDomain: "renthome-88a86.firebaseapp.com",
  projectId: "renthome-88a86",
  storageBucket: "renthome-88a86.firebasestorage.app",
  messagingSenderId: "837119297752",
  appId: "1:837119297752:web:aa280f6d1cdc38bba36fad"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("✅ Firebase Connected Successfully");
