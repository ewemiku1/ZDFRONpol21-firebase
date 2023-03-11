import './../styles/styles.css';

// console.log("SIEMKA Z WEBPACK");

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6V6rhwqpyTBaLyGi1zwwpD0QifWShCB4",
  authDomain: "zdfronpol21-firebase.firebaseapp.com",
  projectId: "zdfronpol21-firebase",
  storageBucket: "zdfronpol21-firebase.appspot.com",
  messagingSenderId: "171314720947",
  appId: "1:171314720947:web:738a1ed6417e3e10de40c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const url = "https://firebasestorage.googleapis.com/v0/b/zdfronpol21-firebase.appspot.com/o/IMG_20190519_172235.jpg?alt=media&token=1c0b8ff4-b1e6-48ca-b4f7-716a2c856677"

const img = document.createElement("img");
// img.setAttribute("src", "url"); to to samo co: img.src = url;
img.src = url;
document.body.appendChild(img);

