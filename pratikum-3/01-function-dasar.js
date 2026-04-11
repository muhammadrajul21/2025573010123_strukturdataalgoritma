function sapa (){
    console.log ('halo ! selamat datang di praktikum javascript.');
}
sapa ();
sapa ();
function sapanama(nama){
    console.log (`halo, ${nama}! selamat belajar.`);
}
sapanama('budi');
sapanama('siti');

function tambah (angka1,angka2){
    const hasil = angka1 + angka2;
    return hasil;
}
const hasilpenjumlahan = tambah (10,25);
console.log ('10 + 25 =' , hasilpenjumlahan);
console.log ('7 + 13 =', tambah (7,13));

function hitung (nilai,pengali =2){
    return nilai * pengali;
}
console.log (hitung(5));
console.log (hitung (5,3));

const pesanGlobal ='saya ada dimana saja' ;
function cekScope(){
const pesanLokal = 'saya hanya ada di dalam function ini';
console.log (pesanGlobal);
console.log (pesanLokal);
}
cekScope();
console.log(pesanGlobal);


function kurang (a,b){
    const hasil = a-b;
    return hasil;
}
const hasilpengurangan = kurang (12,10);
console.log ('12 - 10 =',hasilpengurangan);

function kali (a , b){
    const hasil = a * b;
    return hasil;
}
const hasilperkalian = kali (2,10);
console.log ('2 * 10 =',hasilperkalian);

function bagi (a,b){
    if (b === 0){
        console.log ('error : tidak bisa membagi dengan nol');
        return null;
    }

    const hasil = a/b;
    return hasil;
}
 console.log(bagi(10, 2)); 
console.log(bagi(10, 0)); 


function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a,b); }

    else if (operator === '-'){
        return kurang(a,b); }

    else if (operator === '*') {
        return kali(a,b); }

    else if (operator === '/') {
        return bagi(a,b); }

    else {
        console.log('Operator tidak dikenali');
        return null; }
    }

console.log('=== Hasil Kalkulator ===');

console.log(kalkulator(10, '+',5));
console.log(kalkulator(10, '-',5));
console.log(kalkulator(10, '*',5));
console.log(kalkulator(10, '/',5));
console.log(kalkulator(10, '/',0));
console.log (kalkulator(10,'=',5));