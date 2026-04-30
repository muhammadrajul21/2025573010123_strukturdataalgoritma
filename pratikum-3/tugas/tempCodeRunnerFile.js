const dataMahasiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 55 },
  { nama: "Eka", nilai: 70 },
  { nama: "Fajar", nilai: 85 }
];


function hitungStatistik(arr) {
  let hasil = arr.reduce(function(acc, item) {
    acc.total = arr.length;
    acc.jumlah = acc.jumlah + item.nilai;

    if (item.nilai > acc.tertinggi) {
      acc.tertinggi = item.nilai;
    }

    if (item.nilai < acc.terendah) {
      acc.terendah = item.nilai;
    }

    return acc;
  }, {
    total: 0,
    jumlah: 0,
    tertinggi: 0,
    terendah: 100
  });

  hasil.rataRata = hasil.jumlah / hasil.total;
  return hasil;
}


function filterLulus(arr, batas) {
  return arr.filter(function(item) {
    return item.nilai >= batas;
  });
}


function tambahGrade(arr) {
  return arr.map(function(item) {
    let grade = "";

    if (item.nilai >= 85) {
      grade = "A";
    } else if (item.nilai >= 75) {
      grade = "B";
    } else if (item.nilai >= 65) {
      grade = "C";
    } else if (item.nilai >= 55) {
      grade = "D";
    } else {
      grade = "E";
    }

    return {
      nama: item.nama,
      nilai: item.nilai,
      grade: grade
    };
  });
}


let statistik = hitungStatistik(dataMahasiswa);
let lulus = filterLulus(dataMahasiswa, 70);
let denganGrade = tambahGrade(dataMahasiswa);

console.log("=== STATISTIK ===");
console.log("Total:", statistik.total);
console.log("Rata-rata:", statistik.rataRata.toFixed(2));
console.log("Tertinggi:", statistik.tertinggi);
console.log("Terendah:", statistik.terendah);

console.log("\n=== MAHASISWA LULUS ===");
lulus.forEach(function(item) {
  console.log(item.nama + " - " + item.nilai);
});

console.log("\n=== DATA + GRADE ===");
denganGrade.forEach(function(item) {
  console.log(item.nama + " - " + item.nilai + " (" + item.grade + ")");
});