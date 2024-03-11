// 46User
// shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.js

// function tushirMassiv(massiv, n) {
//   return massiv.slice(n);
// }

// console.log(tushirMassiv([1, 2, 3], 1));

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.

// function ovozlar(ovozObj) {
//   return ovozObj.upvotes - ovozObj.downvotes;
// }
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.

// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));

// 51Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.

// function oshir1ga(arr) {
//   return arr.map((element) => element + 1);
// }
// console.log(oshir1ga([0, 1, 2, 3]));

// 56Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.

// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement([1, 2, 3]));

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// function arrayToString(arr) {
//   return arr.join("");
// }

// // Testlar
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// function birlash(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(birlash([1, 3, 5], [2, 6, 8]));

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.

// function topIndex(arr, str) {
//   return arr.indexOf(str);
// }

// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang.

// function arrElement(arr, index) {
//   index = Math.floor(index);
//   return arr[index];
// }
// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));

// 66.Quyidagi namunani kuzatgan holda funksiya yasang.

// function namuna(arr) {
//   return arr.reduce((total, num) => total + num, 0);
// }
// console.log(namuna([1, 2, 3, 4, 5]));

// let pro = prompt("Ismingizni kririting:");
// let user = {
//   ism: "izzatillo",
//   yosh: 17,
//   Shahari: "Quva",
//   tel: +998903689359,
//   email: "izzatillo@gmail.com",
// };
// console.log(user);


const promptIsm = prompt("Ismingizni kiriting:");
const telefonRaqam = prompt("Telefon raqamingizni kiriting:");
const manzil = {
  shahar: prompt("Shahar nomini kiriting:"),
};

const malumotlar = {
  ism: promptIsm,
  telefon: telefonRaqam,
  manzil: manzil
};

console.log(malumotlar);
