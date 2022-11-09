// Soal 1
console.log('Soal 1');
console.log("\n");
let soal1 = "Buatlah algoritma untuk menampilkan pengkuadratan dan pembagian angka tertentu. Input angka melalui prompt dan tampilkan di console";

// Jawab
let angka1 = 5;
let angka2 = 4;

console.log("Algoritma Pengkuadratan");
console.log("\n");

console.log("1. Buat variabel untuk menyimpan angka pertama dan angka ke dua");
console.log("2. Buat variabel untuk menyimpan hasil pengkuadratan dari angka pertama dan angka ke dua");
console.log("3. Gunakan fungsi console.log lalu letakkan variabel yang berisi hasil pengkuadratan ke dalamnya");
let kuadrat = angka1 ** angka2;
console.log(kuadrat, "<<< Ini hasil pengkuadratan");
console.log("\n");

console.log("Algoritma pembagian");
console.log("\n");

console.log("1. Buat variabel untuk menyimpan angka pertama dan angka ke dua");
console.log("2. Buat variabel untuk menyimpan hasil pembagian dari angka pertama dan angka ke dua");
console.log("3. Gunakan fungsi console.log lalu letakkan variabel yang berisi hasil pembagian ke dalamnya");
let pembagian = angka1 / angka2;
console.log(pembagian, "<<< Ini hasil pembagian");
console.log("\n");

// Soal 2
console.log('Soal 2');
console.log("\n");

let soal2 = "Nyatakan 540 hari dalam tahun, bulan dan minggu, ";

// Jawab

// 540 =  1 Tahun 175 hari
// 540 = 1 tahun
// 540 = 17 bulan
// 540 = 84 minggu

// 1 tahun = 12 bulan
// 1 tahun = 52 minggu
// 1 tahun = 365 hari
// 1 bulan = 4 minggu
// 1 bulan = 30 hari

// 52 Minggu = 365 hari =  12 bulan

let totalDay = "540 Days";
let totalDayToYear = " 1 Year ";
let totalDayToMonth = " 17 Month ";
let totalDayToWeek = " 84 Week ";
let theDate = totalDayToYear + totalDayToMonth + totalDayToWeek;
console.log(totalDay, "=", theDate);
console.log("\n");

// Soal 3
console.log('Soal 3');
console.log("\n");

let soal3 = "Tampilkanlah tanggal bulan tahun hari ini, besok dan kemarin";

// Jawab

let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

// let today = new Date()
let todayYear = new Date();
todayYear = todayYear.getFullYear();

let todayMonth = new Date();
todayMonth = todayMonth.getMonth();

let todayDate = new Date();
todayDate = todayDate.getDate();

let today = new Date();
today = today.getDay();

let nextYear = `Tahun depan -> ${todayYear + 1}`;

let lastYear = `Tahun sebelumnya -> ${todayYear - 1}`;

let nextMonth = todayMonth + 1;

let lastMonth = todayMonth - 1;

let tomorrow = today + 1;

let yesterday = today - 1;

// Ganti bulan menjadi huruf
for (let i = 0; i < months.length; i++) {
  if (todayMonth === i) {
    todayMonth = months[i];
  }
  if (nextMonth === i) {
    nextMonth = months[i];
  }
  if (lastMonth === i) {
    lastMonth = months[i];
  }
}

// Ganti hari jadi huruf
for (let i = 0; i < days.length; i++) {
  if (today === i) {
    today = days[i];
  }
  if (tomorrow === i) {
    tomorrow = days[i];
  }
  if (yesterday === i) {
    yesterday = days[i];
  }
}

console.log(`Sekarang Tahun -> ${todayYear}`);
console.log(`Sekarang Bulan -> ${todayMonth}`);
console.log(`Sekarang Tanggal -> ${todayDate}`);
console.log(`Sekarang Hari -> ${today}`);
console.log(nextYear);
console.log(lastYear);
console.log(`Bulan Depan -> ${nextMonth}`);
console.log(`Bulan Sebelumnya -> ${lastMonth}`);
console.log(`Hari Besok -> ${tomorrow}`);
console.log(`Hari Kemarin -> ${yesterday}`);

// Menampilkan tanggal hari ini
let showDate = `Tanggal hari ini : ${today} ${todayDate} ${todayMonth} ${todayYear}`;
console.log(showDate);
console.log("\n");

// Soal 4
console.log('Soal 4');
console.log("\n");

let soal4 = "Umur seorang ayah adalah empat kali umur anaknya. Jika jumlah umur ayah dan anak saat itu adalah 80 tahun, berapakah umur si anak?";

// Jawab

// Cara ke 1 - Cari umur bapak dengan perkiraan
// 10 x 4 = 40 -> 10 + 40 = 50
// 15 x 4 = 60 -> 15 + 60 = 75
// 16 x 4 = 64 -> 16 + 64 = 80
// 17 x 4 = 68 -> 17 + 68 = 85

// sonsAge = 16
// daddysAge = 64

// Cara ke 2 - Mengunakan variabel
let totalAge = 80;
let pFather = 4;
let pSon = 1;

let total = pFather + pSon;
let sonsAge = totalAge / total;

console.log(`Umur anak adalah : ${sonsAge} Tahun`);
console.log("\n");

// Soal 5
console.log('Soal 5');
console.log("\n");

let soal5 = "Buatlah algoritma untuk menghitung jumlah karakter tertentu dalam string";

let word = 'Chew with your mouth closed'
let wordCharacter = word.length
console.log(`Panjang karakter dari variabel word adalah ${wordCharacter}`);
console.log("\n");

console.log("Algoritma menghitung jumlah karakter dalam sebuah string");
console.log("\n");
console.log("1. Buat sebuah variabel untuk menyimpan nilai sebuah string");
// Gunakan backslash ketika terdapat double quote di dalam double quote string juga ketika terdapat single quote di dalam single quote string 
console.log("2. Buat sebuah string dengan menggunakan tanda kutip satu (') atau kutip dua (\"\")");
console.log("3. Buat variabel baru untuk menyimpan hasil panjang karakter string yang ingin kita ketahui");
console.log("4. Ketik nama variabel pertama yang telah kita buat, yang berisi sebuah string");
console.log("5. Gunakan fungsi .length");
console.log("6. Masukkan variabel tempat menyimpan hasil panjang string ke dalam fungsi console.log(namaVariabelnya)");