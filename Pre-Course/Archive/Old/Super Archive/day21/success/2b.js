class HashTable {
    constructor(size) {
        this.arr = new Array(size);
        this.size = size;
    }

    getHash(value) {
        return value % this.size;
    }

    insertNewData(value) {
        let idx = this.getHash(value[0]);
        this.arr[idx] = value;
    }
}

let size = 11;
let hashTable1 = new HashTable(11);
let usersArr = [[10, 'Raj'], [20, 'John'], [8, 'Russel'], [12, 'Peter'], [35, 'Cook'], [9, 'James']];

for (const subArr of usersArr) {
    hashTable1.insertNewData(subArr);
}

console.log(hashTable1)