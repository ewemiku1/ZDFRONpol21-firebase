import './../styles/styles.css';

// console.log("SIEMKA Z WEBPACK");

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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

//1. Dodajemy input do HTMLu - typ file
//2. Dodajemy przycisk do HTML 
//3. Do przycisku obsluga klikniecia 
//4. Jako callback wywolujemy linijki z prezentacji

// DODANIE MOŻLIWOSCI ZMIANY NAZWY PLIKU PRZEZ UŻYTKOWNIKA
// 1. dodać input do HTML
// 2. pobrac wpisana nazwe z imputu
// 3. przekazac jako argument do funkcji
// 4. callback do domyslnej nazwy pliku

// const headerInfo = document.getElementById("myHeader");
// const fileNameInput = document.getElementById("myFileName");

// document.getElementById("myBtn").addEventListener("click", () => {
//   headerInfo.innerText = "przesyłam zdjęcie...";
  
//   const file = document.getElementById("myFile").files[0];
//   let fileName = file.name;

//   if (fileNameInput.value) {
//     fileName = fileNameInput.value;
//   }

//   const imageRef = ref(storage, fileName); //wtedy tu drugą zmienną zamiast file.name, zmieniamy na naszą ustawioną FileName

//   uploadBytes(imageRef, file).then((uploadResult) => {
//     headerInfo.innerText = "Zdjęcie przesłano!";
      
//     getDownloadURL(imageRef).then(url => {
//         const img = document.getElementById("myPhoto"); 
//         img.src = url;
//         img.style.width = "250px"
//     })
//   })
// })

//POBIERAMY WYBRANY PLIK
// const imageRef = ref(storage, "imageNew.jpg");
// getDownloadURL(imageRef).then(url => {
//   const img = document.createElement("img");
//   img.src = url;
//   img.style.width = "250px"
//   document.body.appendChild(img);
// })

// ZADANIE 4: UŻYTKOWNIK MOŻE WYBRAĆ KTÓRY PLIK POBRAĆ/ZOBACZYĆ
//1. Dodac Input do podawania nazwy obrazka
//2. Dodac przycisk do wyswietlania obrazka
//3. Na klikniecie przycisku wyswietlic zdjecie
//4. Przekazac nazwe do refa
//5. Wyswietlic blad w headerInfo

// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showFileBtn = document.getElementById("showPhotoBtn");
// const img = document.createElement("img");

// showFileBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);

//   headerInfo.innerText = ""; // po to aby FOTO NIE ISTNIEJE, znikneło, gdy wybierzemy zdjęcie które istnieje

  // getDownloadURL(imageRef).then(url => {
  //   //const img = document.createElement("img"); --> przeniesienie (KILKA LINIJEK WYŻEJ) do 131, powoduje ze dodaje sie jedno zdjecie a nie kolejne i kolejne
  //   img.src = url;
  //   img.style.width = "250px"
  //   document.body.appendChild(img);
  // })
//     .catch(ex => {   
//       headerInfo.innerText = "FOTO NIE ISTNIEJE!!!";               
//     })
// });



const storageRef = ref(storage);
listAll(storageRef).then(res => console.log(res));
