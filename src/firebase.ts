import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP9RIXS2ha3m7SIqyqxSxvVCy2IChMRTE",
  authDomain: "social-6f2dd.firebaseapp.com",
  projectId: "social-6f2dd",
  storageBucket: "social-6f2dd.appspot.com",
  messagingSenderId: "265366822391",
  appId: "1:265366822391:web:9b1461f91a0a3ba24562f2",
  measurementId: "G-6MQRFW3FX2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();
