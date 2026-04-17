
class Stack {
  constructor() {
    this.data = [];
    this.ukuran = 0;
  }

  push(elemen) {
    this.data.push(elemen);
    this.ukuran++;
  }

  pop() {
    if (this.isEmpty()) return null;
    this.ukuran--;
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.ukuran === 0;
  }
}



function cekKurungSeimbang(ekspresi) {
  let stack = new Stack();

  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false; 
      }
      stack.pop();
    }
  }

  return stack.isEmpty(); 
}



let test = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "(a + b) * (c - d)"
];

console.log("=== HASIL PENGUJIAN ===");

test.forEach(function(exp) {
  let hasil = cekKurungSeimbang(exp);
  console.log(`${exp} → Seimbang: ${hasil}`);
});