const mahasiswa = ['budi','siti','ahmad','rina'];
const nilai = [85,92,78,95,88];
 console.log ('===array awal ===');
 console.log ('mahasiswa :',mahasiswa);
 console.log ('nilai : ',nilai);
 console.log ('jumlah mahasiswa : ',mahasiswa.length);

 console.log ('\n==== akses elemen ===');
 console.log ('elemen pertama :',mahasiswa [0]);
 console.log ('elemen ketiga :',mahasiswa [2]);
 console.log ('elemen terakhir :',mahasiswa[mahasiswa.lengthc-1] );

 mahasiswa [1]= 'sitirahayu';
 console.log ('\nsetelah di ubah :',mahasiswa );

 console.log ('\n=== manipulasi array ===');
 mahasiswa.push('doni');

 console.log('setelah push  : ',mahasiswa);
 mahasiswa.unshift('zahra');

 console.log ('setelah unshift :',mahasiswa);
 const dihapusdiAkhir = mahasiswa.pop();

 console.log ('dihapus (pop) :', dihapusdiAkhir);
 console.log ('setelah pop :',mahasiswa);

 const dihapusdiAwal = mahasiswa.shift();
 console.log ('dihapus (shift) :', dihapusdiAwal);
 console.log ('setelah shift :',mahasiswa );

 console.log ('\n=== pencarian ===');
 console.log ('indeks ahmad :',mahasiswa.indexOf('ahmad'));
 console.log ('ada rina?  :',mahasiswa.includes('rina'));
 console.log ('ada budi?  : ',mahasiswa.includes('budi'));

 const sebagian = nilai.slice (1,4);
 console.log ('\nnilai asli : ',nilai );
 console.log ('slice[1,4] :',sebagian);


 let belanjaan = ["beras","minyak","teh","ayam","roti"];
console.log("Daftar Belanja Awal:");
for (let i = 0; i < belanjaan.length; i++) {
    console.log((i + 1) + ". " + belanjaan[i]);
}
belanjaan.push("susu", "sabun");
let itemdihapus = belanjaan.shift();
console.log("Item yang dihapus:", itemdihapus);

let ceksusu = belanjaan.includes("susu");
console.log(ceksusu ? "Item 'susu' ada di daftar." : "Item 'susu' tidak ada di daftar.");

console.log("\nDaftar Belanja Akhir:");
for (let i = 0; i < belanjaan.length; i++) {
    console.log((i + 1) + ". " + belanjaan[i]);
}
console.log("\nJumlah item saat ini:", belanjaan.length);