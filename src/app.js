import './../styles/styles.css';

// console.log("SIEMKA Z WEBPACK");

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

// const url = "https://firebasestorage.googleapis.com/v0/b/zdfronpol21-firebase.appspot.com/o/IMG_20190519_172235.jpg?alt=media&token=1c0b8ff4-b1e6-48ca-b4f7-716a2c856677"

// const img = document.createElement("img");
// // img.setAttribute("src", "url"); to to samo co: img.src = url;
// img.src = url;
// document.body.appendChild(img);

// function mojaFunkcja(callback) {
//   callback();
// }

// funkcje strzałkowe, funkcje anonimowe, funkcje ... 
// mojaFunkcja(() => console.log("MÓJ CALLBACK"));

// PRZYKŁAD CALLBACKA
/* 
setTimeout(() => {
  console.log("SIEMKA");
}, 1000);
*/

// document.body.addEventListener("click", () => {
//   console.log("CALLBACK");
// });

// const mojaPupaJson = fetch().then((pupa123) => {
//   return pupa123.json()
// });
// const mojaPupaJson = fetch().then((pupa123) => pupa123.json());

// ~~linia 46-48 to to samo co 49, tylko inny zapis i obie działają z linią 52~~
// mojaPupaJson.then((data) => console.log(data))

// RÓŻNE MOŻLIWOŚCI ZAPISU TEGO SAMEGO:

// const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
// mojaPupaJson.then((data) => console.log(data))

// fetch()
// .then((pupa123) => pupa123.json())
// .then((data) => console.log(data));

// async function mojAsynchronicznaFunkcja() {
//   const pupa123 = await fetch();
//   const data = await pupa123.json();
//   console.log(data);
// };

// POBRANIE DANYCH UŻYTKOWNIKÓW Z LINKU PONIŻEJ, 
// link do strony z notatkami na ten temat http://kursjs.pl/kurs/ajax/fetch
// fetch("https://reqres.in/api/users")
// .then((daneZPromisa) => daneZPromisa.json())
// .then((daneZJson) => console.log(daneZJson.data));

// TO SAMO CO WYŻEJ,  INNY SPSB ZAPISU
// async function myFunc () {
//   const data = await fetch("https://reqres.in/api/users")
//   const users = await data.json();
//   console.log(users.data);
// }


document.getElementById("myBtn").addEventListener("click", () => {
  const file = document.getElementById("myFile").files[0];
  const imageRef = ref(storage, "imageNew.jpg");

  uploadBytes(imageRef, file).then((uploadResult) => {
    console.log("Sukces!");
  })
})

