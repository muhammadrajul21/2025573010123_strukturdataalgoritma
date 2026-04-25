function ukurwaktu(label,fn){
    const mulai =Date.now();
    fn ();
    const selesai = Date.now();
    console.log(`${label} : ${selesai - mulai} ms    }`);
}
const n = 100_000;

function jumlahkanlinear(n){
    let total = 0;
    for(let i=1; i<=n; i++)total += i;
    return total;
     }
     function jumlahkanrumus (n){
        return n * (n + 1) /2 ;
     }
     function caripasangan (arr){
        const pasangan =[];
        for (let i=0; i < arr.length; i++){
            for (let j=i+1; j < arr.length; j++){   
                if (arr [i] + arr [j] ===10)pasangan.push ([arr[i], arr[j]]); 
            }
        }
        return pasangan;
     }
     const data = Array.from({length : 5000}, (_,i)=> i +1);
     console.log ('==== mengukur waktu eksekusi ====');
     ukurwaktu('o(1) jumlahkanrumus',()=> jumlahkanrumus (n));
     ukurwaktu('o(n) jumlahkanlinear',()=> jumlahkanlinear (n));
     ukurwaktu('o(n^2) caripasangan',()=> caripasangan (data));

     console.log ('\nhasil sama?',jumlahkanlinear (100)=== jumlahkanrumus (100));