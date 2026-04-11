
function pangkat(basis, eksponen) {
    if (eksponen === 0) {
        return 1;
    }
    return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

function cekPalindrom(str) {
    let hasil = balikString(str);

    if (str === hasil) {
        return "Palindrom";
    } else {
        return "Bukan Palindrom";
    }
}


console.log("=== Pangkat ===");
console.log("2^3 =", pangkat(2, 3));
console.log("5^2 =", pangkat(5, 2));

console.log("\n=== Balik String ===");
console.log("halo ->", balikString("halo"));
console.log("rajul ->", balikString("rajul"));

console.log("\n=== Cek Palindrom ===");
console.log("katak ->", cekPalindrom("katak"));
console.log("civic ->", cekPalindrom("civic"));
console.log("halo ->", cekPalindrom("halo"));