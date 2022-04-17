class DoublyLinkedList {
    constructor(value = undefined, prev = undefined, next = undefined) {
        this.head = {
            'data': value,
            'prev': prev,
            'next': next,
        }
        this.size = value === undefined ? 0 : 1;
    }
    // create new node
    createNode(value, prev = undefined, next = undefined) {
        return {
            'data': value,
            'prev': prev,
            'next': next,
        }
    }

    printAllNodes() {
        let tmphead = this.head;
        while (tmphead != undefined) {
            console.log(tmphead.data)
            tmphead = tmphead.next;
        }
        return true;
    }

    push(value) {
        if (this.head.data === undefined && this.head.prev === undefined) {
            this.head.data = value;
            ++this.size;
            return true;
        }

        let tmphead = this.head;
        while (tmphead.next != undefined) {
            tmphead = tmphead.next;
        }

        tmphead.next = this.createNode(value, tmphead);
        ++this.size;
        return true;
    }

    unshift(value) { //To add a new node at beginning of doubly linked list.
        if (this.head.data === undefined && this.head.prev === undefined) {
            this.head.data = value;
            ++this.size;
            return true;
        }

        let tmphead = this.head;
        this.head = this.createNode(value, undefined, tmphead);
        ++this.size;
        return true;
    }

    pop() { // To delete the last node.
        let tmpHead = this.head;
        for (let i = 2; i < this.size; i++) {
            tmpHead = tmpHead.next;
        }
        tmpHead.next = undefined;

        --this.size;
        return true;
    }
    shift() {// - To delete the first node of doubly linked list.
        let next = this.head.next;
        this.head = next;

        --this.size;
        return true;
    }
}

class HashMap {
    constructor(size) {
        this.arr = new Array(size);
        this.size = size;
    }

    getHash(value) {
        return value % this.size;
    }

    insertNewData(value) {
        let idx = this.getHash(value[0]);

        if (this.arr[idx] === undefined) {
            let newLinkedList = new DoublyLinkedList();
            this.arr[idx] = newLinkedList;

            newLinkedList.head.data = value;
        } else {
            let linkedList = this.arr[idx];
            linkedList.push(value);
        }
        return true;
    }

    get(rollNum) { //get a particular data based on key passed.
        let idx = this.getHash(rollNum);
        if (this.arr[idx] != undefined) {
            let linkedList = this.arr[idx];

            for (let tmpHead = linkedList.head; tmpHead != undefined; tmpHead = tmpHead.next) {
                let studentsArr = tmpHead.data;
                let curRollNum = studentsArr[0];
                if (curRollNum === rollNum) return tmpHead.data;
            }
        }
        return 'not found';
    }

    delete(rollNum) { //delete a data from hash table
        let idx = this.getHash(rollNum);
        if (this.arr[idx] != undefined) {
            let linkedList = this.arr[idx];

            for (let tmpHead = linkedList.head; tmpHead != undefined; tmpHead = tmpHead.next) {
                let studentsArr = tmpHead.data;
                let curRollNum = studentsArr[0];
                if (curRollNum === rollNum) {
                    let prev = tmpHead.prev;
                    let next = tmpHead.next;

                    if (prev === undefined) { // search element is head
                        linkedList.head = tmpHead.next;
                        return tmpHead;
                    } else {
                        prev.next = next;
                    }
                }
            }
        }
        return 'not found';
    }
}


let size = 11;
let hashMap1 = new HashMap(11);
let usersArr = [[10, 'Raj'], [20, 'John'], [8, 'Russel'], [12, 'Peter'], [35, 'Cook'], [9, 'James'], [16, 'Vivek']];

for (const subArr of usersArr) {
    hashMap1.insertNewData(subArr);
}

// console.log(hashTable1)
console.log(hashMap1.get(10))
console.log(hashMap1.delete(10))
console.log(hashMap1.get(10))