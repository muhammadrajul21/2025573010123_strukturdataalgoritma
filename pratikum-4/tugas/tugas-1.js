
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    return `ID: ${this.id}, Nama: ${this.nama}, Harga: ${this.harga}, Stok: ${this.stok}`;
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok - jumlah < 0) {
      console.log(`Stok ${this.nama} tidak cukup!`);
    } else {
      this.stok -= jumlah;
      console.log(`Berhasil jual ${jumlah} ${this.nama}`);
    }
  }
}



class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    return `${super.info()}, Ukuran: ${this.ukuranFile}MB, Format: ${this.formatFile}`;
  }

  download() {
    console.log(`Download ${this.nama} (${this.formatFile})`);
  }
}



class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    return `${super.info()}, Berat: ${this.beratGram}g, Dimensi: ${this.dimensi}`;
  }

  hitungOngkir(tarifPerKg) {
    return (this.beratGram / 1000) * tarifPerKg;
  }
}


let p1 = new ProdukDigital(1, "Ebook JS", 50000, 10, 5, "PDF");
let p2 = new ProdukDigital(2, "Video Tutorial", 100000, 0, 500, "MP4");

let p3 = new ProdukFisik(3, "Buku Tulis", 20000, 5, 300, "20x15cm");
let p4 = new ProdukFisik(4, "Tas Sekolah", 150000, 0, 1000, "40x30cm");


let daftarProduk = [p1, p2, p3, p4];


console.log("=== Semua Produk ===");
daftarProduk.forEach(p => console.log(p.info()));



let tersedia = daftarProduk.filter(p => p.tersedia());

console.log("\n=== Produk Tersedia ===");
tersedia.forEach(p => console.log(p.nama));


let namaProduk = daftarProduk.map(p => p.nama);

console.log("\n=== Nama Produk ===");
console.log(namaProduk);


console.log("\n=== Contoh Aksi ===");
p1.download(); 
console.log("Ongkir Buku Tulis:", p3.hitungOngkir(10000));

p3.jual(2); 
p2.jual(1);