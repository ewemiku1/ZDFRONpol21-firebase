import './../styles/styles.css';

// console.log("SIEMKA Z WEBPACK");

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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

// PĘTLA FOREACH, ZAMIAST FOR ABY WYLISTOWAĆ ELEMENTY W KONSOLI
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const Ola = document.getElementById("photoList");
  
//   res.items.forEach(item => {
//     let newOla = document.createElement("li");
//     newOla.innerText = item.name;
//     Ola.appendChild(newOla);
//   });
// });

// ZWYCZAJNA LISTA BEZ PRZYCISKÓW KOŁO OBRAZKÓW
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const olElement = document.getElementById("photoList");
//   // Pobieramy getElementById - element OL
//   for(let i = 0; i < res.items.length; i++){
//     const liElement = document.createElement("li");
//     // tworzymy nowy element li - createElement
//     liElement.innerText = res.items[i].name;
//     // w elemencie li ustawiamy tekst na nazwe pliku innerText / res.items[i].name
//     olElement.appendChild(liElement);
//     // li dodajemy do ol - appendChild
//     console.log(res.items[i].name);
//   }
// });


// LISTA Z PRZYCISKAMI
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const olElement = document.getElementById("photoList");

//   for(let i = 0; i < res.items.length; i++){
//     const liElement = document.createElement("li");
//     // utwórz przycisk - createElement
//     const myButton = document.createElement("button");
    
//     // dodaj tekst do przycisku - innerText
//     myButton.innerText = "POKAŻ FOTE!";
//     liElement.innerText = res.items[i].name;
   
//     // dodaj przycisk - appendChild
//     liElement.appendChild(myButton);
//     olElement.appendChild(liElement);
//   }
// });

// // DODAJEMY EVENT DO PRZYCISKÓW, WYŚWIETLI SIĘ SIEMANKO JAK KLIKNIEMY PRZYCISK
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const olElement = document.getElementById("photoList");

//   for(let i = 0; i < res.items.length; i++){
//     const liElement = document.createElement("li");
//     const myButton = document.createElement("button");

//     // dodajemy event do przycisku - wyświetlamy siemanko w konsoli - addEventListener
//     myButton.addEventListener("click", () => {
//       console.log("SIEMANKO!");
//     })

//     myButton.innerText = "POKAŻ FOTE!";
//     liElement.innerText = res.items[i].name;
   
//     liElement.appendChild(myButton);
//     olElement.appendChild(liElement);
//   }
// });


// // POKAŻE NAZWE ZDJĘCIA PO KLIKNIĘCIU
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const olElement = document.getElementById("photoList");

//   for(let i = 0; i < res.items.length; i++){
//     const liElement = document.createElement("li");
//     const myButton = document.createElement("button");

    
//     myButton.addEventListener("click", () => {
//       // zmiana w console.log siemanko na res.items[i].name
//       console.log(res.items[i].name);
//     })

//     myButton.innerText = "POKAŻ FOTE!";
//     liElement.innerText = res.items[i].name;
   
//     liElement.appendChild(myButton);
//     olElement.appendChild(liElement);
//   }
// });

// // WYŚWIETLI referencja w konsoli PO KLIKNIĘCIU
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   const olElement = document.getElementById("photoList");

//   for(let i = 0; i < res.items.length; i++){
//     const liElement = document.createElement("li");
//     const myButton = document.createElement("button");
//     const myRemoveBtn = document.createElement("button");

    
//     myButton.addEventListener("click", () => {
//       // tworzymy refa do obrazka - ref + storage + nazwa_pliku
//       // wyświetlamy tego refa
//       const imageRef = ref(storage, res.items[i].name);
//       // wyświetlamy URL tego imageRef - getDownloadURL(...).then(url =>)
//       getDownloadURL(imageRef).then(url => {
//         //Dodajemy elemnt img do HTMLa - znacznik do index.html
//         //Pobieramy img - getElementById
//         const myPhoto = document.getElementById("fotka");
//         //Ustawiamy src - wlasciwosc src
//         myPhoto.src = url;
//         //Ustawiamy jego szerokosc
//         myPhoto.style.width = "250px"
//       })
//     })
//     // dodajemy event do przycisku usuwania
//     myRemoveBtn.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);
//       deleteObject(imageRef).then( () => {
//         console.log("USUNIĘTO!");
//       });
//     })

//     // dodajemy kolejny przycisk, z funkcją usuwania
//     myRemoveBtn.innerText = "USUŃ";
//     myButton.innerText = "POKAŻ FOTE!";
//     liElement.innerText = res.items[i].name;
   
    
//     liElement.appendChild(myButton);
//     liElement.appendChild(myRemoveBtn);
//     olElement.appendChild(liElement);
//   }
// });

// ZADANIE 8 - ZADANIA FIREBASE
// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     console.log(pref.name);
//   })
// })

// ZAD 9
const albumList = document.getElementById("albumsList");
const uploadPhotoBtn = document.getElementById("uploadPhoto");
const fileInput = document.getElementById("fileInput");

uploadPhotoBtn.addEventListener("click", () => {
  if (albumsList.value) {
    const file = fileInput.files[0];
    const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
    uploadBytes(imageRef, file).then(() => console.log("SUKCES"));
  }
});
 
const storageRef = ref(storage);
listAll(storageRef).then(res => {
  res.prefixes.forEach(pref => {
    const albumOption = document.createElement("option");
    albumOption.innerText = pref.name;
    albumsList.appendChild(albumOption);
  })
});