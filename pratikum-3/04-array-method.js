const nilaimahasiswa = [75,90,55,82,68,95,48,77];
console.log ('===foreach : tampilkan semua nilai ===');
nilaimahasiswa.forEach((nilai,indeks)=> {
console.log (`mahasiswa -${indeks + 1} : ${nilai}`);
});
const gradehuruf = nilaimahasiswa.map(nilai =>{
    if (nilai >=90)return 'A';
    if (nilai >=80)return 'B';
    if (nilai >=70)return 'C';
    if (nilai >=60)return 'D';
    return 'E';
});
console.log ('\n=== map : nilai ke grade ===');
console.log ('nilai :',nilaimahasiswa);
console.log ('grade :',gradehuruf);

const nilailulus = nilaimahasiswa.filter(nilai => nilai >= 60);
const nilaigagal = nilaimahasiswa.filter (nilai=> nilai < 60);

console.log ('\n=== filter : lulus dan tidak lulus ===');
console.log ('semua nilai :',nilaimahasiswa);
console.log ('nilai lulus :',nilailulus);
console.log ('nilai gagal : ',nilaigagal);

const totalnilai = nilaimahasiswa.reduce ((akumulator,nilai) => {
    return akumulator + nilai;
},0);
const ratarata = totalnilai/ nilaimahasiswa.length;
console.log('\n=== reduce : statistik nilai ===');
console.log('total nilai :',totalnilai);
console.log ('rata rata  : ',ratarata.toFixed(2));
 const rataratanilailulus = nilaimahasiswa.filter (nilai => nilai >=60) .reduce((acc,val,idx,arr)=>{
    return acc + val / arr.length;
 }, 0);
 console.log ('\n=== method chaining ===');
 console.log ('rata-rata nilai lulus : ',rataratanilailulus.toFixed(2));
 console.log ('array asli tidak berubah :',nilaimahasiswa);

 const produk =[
   {nama  : 'laptop', harga  : 8500000,stok  : 5},
   {nama  :'mouse',   harga  : 150000,stok   : 0},
   {nama  :'keyboard',harga  : 450000, stok  : 12},
   {nama  :'monitor', harga  : 3200000, stok : 0},
   {nama  :'headset', harga  : 350000, stok  : 8}
 ];
const produktersedia = produk.filter (item => item.stok >0);
console.log ("produk tersedia:",produktersedia);

const namaproduk = produktersedia.map (item=> item.nama);
console.log ('nama produk tersedia :',namaproduk);

const totalinvetaris = produktersedia.reduce ((total,item)=> {
    return total + (item.harga*item.stok);
},0);
console.log ("total nilai invetaris : Rp" + totalinvetaris.toLocaleString());

produk.forEach (item => {
    const status =item.stok > 0 ? "[TERSEDIA]": "[HABIS]";
    const hargaformat = "Rp"+item.harga.toLocaleString();

    if (item.stok > 0){
        console.log (`${status} ${item.nama} - ${hargaformat} (${item.stok}unit)`);
    }else {
        console.log (`${status} ${item.nama} - ${hargaformat}`);
    }
});