//Lesson 1
//cari 20 method dari javascript beserta jelaskan kegunaannya

//1. memanggil semua data yang berada dalam index array kedalam string.
//outputnya adalah : Apel,Mangga,Rambutan, run, dev
const arr = ['Apel', 'Mangga', 'Rambutan, run, dev']
console.log(arr.join())



//2. charArt
// ini berfungsi untuk memanggil sebuah karakter atau huruf dari index yang di panggil
//output nya adalah : n
    var partai='Banteng Merah'
    console.log(partai.charAt(2))

//3. Substring / Substr   (x,y)
// ini berfungsi untuk memanggil sebuah karakter tertentu pada index (x) dan dengan panjang karakter tertentu (y)
// Outputnya adalah : er Caha
    var nama = 'Ler Cahaya'
    console.log(nama.substr(1,7))

//4. Melewati nomor dengan pesan sebagai argumen: 
//Jika nomor diteruskan ke fungsi console.log(), maka fungsi akan menampilkannya bersama dengan pesan yang diberikan.
// outputnya adalah : Congratulation!! you get 50% discount today
    var a = 50;
    console.log("Congratulation!! you get " + a + "% discount today")

//5. toUppercase
//ini berfungsi untuk mengubah semua string yang berada dalam index ke huruf kapital
//outputnya adalah : LER CAHAYA
console.log(nama.toUpperCase())

//6. console.group 
// Metode group() memulai grup pesan. Semua pesan baru akan ditulis di dalam grup ini. dan jika berakhir bisa menggunakana .groupEnd
//outputnya adalah : Hello world! 
                        // Hello again, this time inside a group!
                    //and we are back.
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");

//7. console table 
// ini untuk membuat tabel dari nilai yang berada dalam array dan disusun secara asscending dan dimulai dari angka 0
// outputnya adalah : bisa di lihat sendiri ketika di run 
console.table(["Audi", "Volvo", "Ford", "Honda", "Lamborghini", "BMW"]);

//8. console table
// ini digunakan untuk memberikan nama index yang akan digunakan, jadi ketika di tampilkan tidak secara default
//outputnya adalah : bisa di lihat sendiri ketika di run, karena ini yang di tampilkannya adalah tabel
console.table({firstname:"Cahaya", lastname:"Edriansa"});

//9. memasukan value dari tiap variabel ke dalam tabel, masih menggunakan methode table 
// outputnya adalah : bisa dilihat ketika di run
const car1 = {name:"Honda", model:"Civic Turbo iv-Tech"}
const car2 = {name:"Lamborghini", model:"Aventador"}
const car3 = {name:"Nissan", model:"GTR"}

console.table([car1, car2, car3]);

//10. console time
// Waktu yang diperlukan untuk menjalankan for-loop 100.000 kali:
//outputnya adalah : default: 5.84ms
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();

//11. console count
//Metode count() menghitung berapa kali console.count() dipanggil. Metode count() nomor ini ke konsol.
//outputnya adalah :   default: 1
                    // default: 2
                    // default: 3
                    // default: 4
                    // default: 5
for (let i = 0; i < 5; i++) {
    console.count();
  }

//12. console error
// Metode error() menulis pesan kesalahan ke konsol. Konsol berguna untuk tujuan pengujian. biasanya memiliki warna yang berbeda pada output
//outputnya adalah : 
const array = ["Orange", "Banana", "Mango", "Kiwi"];
console.error(array);

//13. concole clear
//Metode clear() membersihkan konsol. Metode clear() juga menulis "Konsol telah dihapus" di konsol.
//outputnya adalah : ketika di run proses akan terhapus beberapa data yang telah di eksekusi
// console.clear("pesan in di hapus");

//14. Date
//ini untuk menunjukan keterangan waktu yang akan di tampilkan pada JS
new Date();
console.log(Date);

//15.toLowerCase()	
// Menjadikan semua karakter menjadi huruf kecil semua
// outputnya adalah : cahaya edriansa
var str="Cahaya Edriansa"
console.log(str.toLowerCase())

//16. Replace methode
// Mengganti string lama dengan string yang baru. 
// outputnya adalah : JOKOWI
var nama="Ler Cahaya"
console.log(nama.replace(nama, "JOKOWI"))

//17. 
// Menghasilkan duplikasi string sesuai jumlah (n) duplikasi yang diinginkan.
// Output :  Cahaya Edr  Cahaya Edr  Cahaya Edr
var nama=" Cahaya Edr "
console.log(nama.repeat(3))

//18. console timeEnd
//ini berfungsi untuk menghitung waktu yang dilakukan untuk perulangan atau looping 
//outputnya adalah : (bisa dilihat ketika di Run)
console.time("for loop");
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("for loop");

let i = 0;
console.time("while loop");
while (i < 1000000) {
  i++
}
console.timeEnd("while loop");

//19 JS array
//ini sama seperti array, yang artinya data yang bertumpuk dalam 1 array 
//outputnya adalah : [ 'Saab', 'Volvo', 'BMW' ]
const cars = ["Honda", "Volvo", "BMW"];
console.log(cars);

//20 toLocaleString()
// toLocaleString() berfungsi untuk menkonversi array menjadi string. Dalam contoh-contoh yang kita lakukan dalam tutorial ini, hampir semuanya menggunakan method toString untuk menampilkan hasil array.
// Outputnya adalah : 1,2,3,4,a,b,c,d

var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toLocaleString());