import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAU1Ft-LpjPIxqO7AsHVjfZ5Vi4ngU9EoY",
    authDomain: "june-rhomel-portfolio-a0305.firebaseapp.com",
    databaseURL: "https://june-rhomel-portfolio-a0305-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "june-rhomel-portfolio-a0305",
    storageBucket: "june-rhomel-portfolio-a0305.appspot.com",
    messagingSenderId: "401556098951",
    appId: "1:401556098951:web:49b62ce7ba78905a774d22",
    measurementId: "G-6EBW53K6Z9"
  };

  const app =initializeApp(firebaseConfig);

export const auth = getAuth(app)
