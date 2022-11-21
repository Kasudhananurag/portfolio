
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDheBrhv-sSkC9HfBrQcls3SFSjcFMWg80",
  authDomain: "portfolioanuragkasudhan.firebaseapp.com",
  projectId: "portfolioanuragkasudhan",
  storageBucket: "portfolioanuragkasudhan.appspot.com",
  messagingSenderId: "452911649471",
  appId: "1:452911649471:web:3ab4604d3134a9effbac0a",
  db: "https://portfolioanuragkasudhan-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);