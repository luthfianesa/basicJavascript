/*
// Perbedaan var, let dan const
let greeting = "Hello World"
console.log(greeting);

// var
  //  Declaration
var firstName = "Luthfi"
  // Redeclare
var firstName = "Luthfi"
  // Reassign
firstName = "Irvine"

// let
  // Declaration
let favoriteDrink = "Sprite"
  // Redeclare
let favoriteDrink = "Sprite"
  // Reassign
favoriteDrink = "Pepsi"

// const
  // Declaration
const favoriteFood = "Hokben"
  // Redeclare
const favoriteFood = "Hokben"
  // Reassign
  favoriteFood = "Indomie" 
  */

// String Methods
let greeting = "How are you";
console.log(greeting.length + " <<< Ini hasil dari .length ");
console.log(greeting.indexOf("World") + " <<< Ini hasil dari .indexOf");
console.log(greeting.indexOf("How") + " <<< Ini hasil dari .indexOf");
console.log(greeting.substring(0, 3) + " <<< Ini hasil dari .substring");
console.log(greeting.slice(0, 3) + " <<< Ini hasil dari .slice");
console.log(greeting.split(" "), " <<< Ini hasil dari .split");
console.log("\n");

console.log("Perbedaan .substr() dan .slice()");
console.log("\n");

console.log("Negative Values");
// Dengan slice() ketika memasukkan angka negatif sebagai sebuah argumen, maka akan diinterpretasikan dihitung dari akhir string
// Dengan substring() akan memperlakukan nilai negatif sebagai nol

const sentence = "Mastering JS is very useful";
console.log(sentence.slice(-6), "<<< Ini menggunakan .slice()");
console.log(sentence.substring(-6), "<<< Ini menggunakan .substring()");

console.log(sentence.slice(1, -7), "<<< Ini menggunakan .slice()");
console.log(sentence.substring(1, -7), "<<< Ini menggunakan .substring()");

console.log(sentence.slice(-7, 2), "<<< Ini menggunakan .slice()");
console.log(sentence.substring(-7, 1), "<<< Ini menggunakan .substring()");

console.log(sentence.slice(-7, -7), "<<< Ini menggunakan .slice()");
console.log(sentence.substring(-7, -7), "<<< Ini menggunakan .substring()");
console.log("\n");

console.log("Parameter Consistency");
// Perbedaan besar dengan substring() adalah jika argumen pertama lebih besar dari argumen ke 2,
// .substring() akan swap argumen sedangkan .slice() akan return empty string

console.log("Rekomendasi, gunakan .slice() daripada .substring()");
// Kecuali jika membutuhkan fitur swap argumen
console.log("\n");

// Convert Strings to Number

let a = parseInt("123");
let b = parseFloat("123");
let c = parseInt("1234.5678");
let d = parseFloat("1234.5678");
let e = parseInt("Halo Dunia");
let f = parseFloat("Halo Dunia");
console.log(a, "<<< parseInt() sebuah string angka");
console.log(b, "<<< parseFloat() sebuah string angka");
console.log(c, "<<< parseInt() sebuah string angka desimal");
console.log(d, "<<< parseFloat() sebuah string angka desimal");
console.log(e, "<<< parseInt() sebuah string huruf");
console.log(f, "<<< parseFloat() sebuah string huruf");
console.log(typeof a);
console.log("\n");

// Arithmetic & Assignment Operators
let usiaAyah = 60;
let usiaBunda = 45;

console.log(usiaAyah * usiaBunda, "<<< Multiplication");
console.log(usiaAyah / usiaBunda, "<<< Division");
console.log(usiaAyah + usiaBunda, "<<< Addition");
console.log(usiaAyah - usiaBunda, "<<< Substraction");
console.log(usiaAyah % usiaBunda, "<<< Modulus");
console.log("\n");

// Basic Math Object

console.log(Math.PI);
console.log(Math.abs(-4.7), "<<< Math.abs : Bilangan Positif");
console.log(Math.pow(8, 2), "<<< Math.pow : Bilangan Kuadrat");
console.log(Math.sqrt(64), "<<< Math.sqrt : Bilangan Akar pangkat 2 / kuadrat");
console.log(Math.cbrt(8), "<<< Math.cbrt : Bilangan Akar pangkat 3 / kubik");

console.log("\n");

// Math Round,Math Ceil & Math Floor

console.log(Math.round(4.7), "<<< Math.round : Pembulatan ke integer terdekat");
console.log(Math.ceil(4.7), "<<< Math.ceil : Pembulatan ke atas");
console.log(Math.floor(4.7), "<<< Math.floor : Pembulatan ke bawah");
console.log(Math.round(4.4), "<<< Math.round : Pembulatan ke integer terdekat");
console.log(Math.ceil(4.4), "<<< Math.ceil : Pembulatan ke atas");
console.log(Math.floor(4.4), "<<< Math.floor : Pembulatan ke bawah");

console.log("\n");

// Math Random, Math Max & Math Min

console.log(Math.random(), "<<< Math.random : Angka acak dari 0 sampai i");
console.log(Math.round(Math.random()), "<<< Math.random + Math.round");
console.log(Math.max(1, 3, 5), "<<< Math.max");
console.log(Math.min(1, 3, 5), "<<< Math.min");

console.log("\n");

// Basic Date Object

let z = new Date();
console.log(z.getFullYear(), "<<< Ini hasil fungsi getFullYear()");
console.log(z.getMonth(), "<<< Ini hasil fungsi getMonth()");
console.log(z.getDate(), "<<< Ini hasil fungsi getDate()");
console.log(z.getDay(), "<<< Ini hasil fungsi getDay()");
console.log(z.getHours(), "<<< Ini hasil fungsi getFullYear()");
console.log(z.getMinutes(), "<<< Ini hasil fungsi getMinutes()");
console.log(z.getSeconds(), "<<< Ini hasil fungsi getSeconds()");
console.log(z.getMilliseconds(), "<<< Ini hasil fungsi getMilliseconds()");
console.log("\n");

const time = new Date();
const month = time.getMonth();
const year = time.getFullYear();

console.log("FullDate :", time);
console.log("Month :", month);
console.log("Year :", year);
