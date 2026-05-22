class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    
    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.next
                ? `[${current.data}] → `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result);
    }
}




function palindromLL(head) {
    let arr = [];
    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let kiri = 0;
    let kanan = arr.length - 1;

    while (kiri < kanan) {
        if (arr[kiri] !== arr[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}



function hapusNariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}




function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}




console.log("===== TEST PALINDROME =====");


const p1 = new LinkedList();
[1,2,3,2,1].forEach(x => p1.append(x));
p1.print();
console.log("Palindrome:", palindromLL(p1.head));


const p2 = new LinkedList();
[1,2,2,1].forEach(x => p2.append(x));
p2.print();
console.log("Palindrome:", palindromLL(p2.head));

const p3 = new LinkedList();
[1,2,3,4].forEach(x => p3.append(x));
p3.print();
console.log("Palindrome:", palindromLL(p3.head));



console.log("\n===== TEST HAPUS N DARI AKHIR =====");


const h1 = new LinkedList();
[1,2,3,4,5].forEach(x => h1.append(x));

console.log("Sebelum:");
h1.print();

h1.head = hapusNariAkhir(h1.head, 2);

console.log("Sesudah hapus n=2:");
h1.print();

const h2 = new LinkedList();
[10,20,30,40].forEach(x => h2.append(x));

console.log("\nSebelum:");
h2.print();

h2.head = hapusNariAkhir(h2.head, 1);

console.log("Sesudah hapus n=1:");
h2.print();

const h3 = new LinkedList();
[7,8,9].forEach(x => h3.append(x));

console.log("\nSebelum:");
h3.print();

h3.head = hapusNariAkhir(h3.head, 3);

console.log("Sesudah hapus n=3:");
h3.print();



console.log("\n===== TEST NODE TENGAH =====");
const t1 = new LinkedList();
[1,2,3,4,5].forEach(x => t1.append(x));

t1.print();
console.log("Tengah:", tengahLinkedList(t1.head).data);

const t2 = new LinkedList();
[10,20,30,40,50,60].forEach(x => t2.append(x));

t2.print();
console.log("Tengah:", tengahLinkedList(t2.head).data);

const t3 = new LinkedList();
[100,200].forEach(x => t3.append(x));

t3.print();
console.log("Tengah:", tengahLinkedList(t3.head).data);