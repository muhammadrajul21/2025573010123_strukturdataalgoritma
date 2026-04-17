const mahasiswa = {
    nama    : 'Budi Santoso',
    umur    : 20,
    jurusan :'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true,
};
console.log ('=== Akses Property ===');
console.log ('Nama : ',mahasiswa.nama);
console.log ('Jurusan ',mahasiswa['jurusan']);

const keyyangdicari = 'ipk';
console.log ('ipk : ',mahasiswa[keyyangdicari]);

mahasiswa.email ='budi@email.com';
mahasiswa.umur  =21;

console.log ('/setelah diubah:',mahasiswa);

delete mahasiswa.aktif;
console.log ('setelah delete : ',mahasiswa);

const dosen = {
 nama : 'Dr.ahmad Fauzi',
 matakuliah :'Struktur data',
 pengalaman : 10,

 pengenalan (){
    return `halo,saya ${this.nama},mengajar ${this.matakuliah}.`;
 },
 statussenior (){
    if (this.pengalaman >=10){
        return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen senior.`;
 }
};

console.log ('\n=== MEthod Object ===');
console.log (dosen.pengenalan());
console.log (dosen.statussenior());

console.log ('\n=== literasi object ===');
for (const key in dosen){
    if (typeof dosen[key] !=='function'){
        console.log(` ${key}:${dosen[key]}`);
    }
}

console.log ('keys : ',Object.keys (mahasiswa));
console.log ('Values : ',Object.values (mahasiswa));

// latihan 1 
let koleksiBuku = [
  {
    judul: "Kimetsu no Yaiba",
    pengarang: "Koyoharu Gotouge",
    tahunTerbit: 2016,
    harga: 50000,
    tersedia: true,

    info: function() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },

    diskon: function(persen) {
      return this.harga - (this.harga * persen / 100);
    }
  },

  {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 60000,
    tersedia: true,

    info: function() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },

    diskon: function(persen) {
      return this.harga - (this.harga * persen / 100);
    }
  },

  {
    judul: "Naruto",
    pengarang: "Masashi Kishimoto",
    tahunTerbit: 1999,
    harga: 45000,
    tersedia: false,

    info: function() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },

    diskon: function(persen) {
      return this.harga - (this.harga * persen / 100);
    }
  }
];



console.log("=== Semua Buku ===");
koleksiBuku.forEach(function(buku) {
  console.log(buku.info());
});



let bukuTersedia = koleksiBuku.filter(function(buku) {
  return buku.tersedia === true;
});

console.log("\n=== Buku Tersedia ===");
bukuTersedia.forEach(function(buku) {
  console.log(buku.judul);
});


console.log("\n=== Contoh Diskon ===");
console.log("Harga setelah diskon Kimetsu 10%:", koleksiBuku[0].diskon(10));
