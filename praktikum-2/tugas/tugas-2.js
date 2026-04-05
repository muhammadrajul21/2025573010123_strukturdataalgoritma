// 1. Deklarasi variabel
const beratBadan = 68;     // dalam kg
const tinggiBadan = 1.72;  // dalam meter

// 2. Menghitung BMI
const bmi = beratBadan / (tinggiBadan * tinggiBadan);

// 3. Menampilkan BMI 2 angka di belakang koma
const bmiFix = bmi.toFixed(2);

// 4. Menentukan kategori BMI
let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else if (bmi >= 30.0) {
    kategori = "Obesitas (Obese)";
}

// 5. Menampilkan hasil
console.log(
    "Berat: " + beratBadan + " kg |" +
    " Tinggi: " + tinggiBadan + " m |" +
    " BMI: " + bmiFix + " |" +
    " Kategori: " + kategori
);