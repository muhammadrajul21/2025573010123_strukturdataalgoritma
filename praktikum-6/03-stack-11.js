class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    
    removeHead() {
        if (!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    peekHead() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        return this.length;
    }

    print() {
        let cur = this.head;
        let s = "";

        while (cur) {
            s += cur.next
                ? `[${cur.data}] → `
                : `[${cur.data}]`;

            cur = cur.next;
        }

        console.log(s || "Kosong");
    }
}

class Stack {
    constructor() {

        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.peekHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

console.log("Push data:");
stack.push("Login");
stack.push("Edit Profil");
stack.push("Upload Foto");
stack.print();

console.log("\nPeek:");
console.log(stack.peek());

console.log("\nPop:");
console.log(stack.pop());

console.log("\nSetelah pop:");
stack.print();

console.log("\nSize:");
console.log(stack.size());

console.log("\nIs Empty:");
console.log(stack.isEmpty());


console.log("\n=== Simulasi Undo ===");

const aksi = [
    "Ketik A",
    "Ketik B",
    "Hapus B",
    "Tambah Gambar"
];

const undoStack = new Stack();

for (let a of aksi) {
    console.log("Aksi:", a);
    undoStack.push(a);
}

console.log("\nUndo:");
console.log("Undo ->", undoStack.pop());
console.log("Undo ->", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();