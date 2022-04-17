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

    print() {
        let tmpHead = this.head;
        while (tmpHead != undefined) {
            console.log(tmpHead.data)
            tmpHead = tmpHead.next;
        }
        return true;
    }

    push(value) {
        if (this.head.data === undefined && this.head.prev === undefined) {
            this.head.data = value;
            ++this.size;
            return true;
        }

        let tmpHead = this.head;
        while (tmpHead.next != undefined) {
            tmpHead = tmpHead.next;
        }

        tmpHead.next = this.createNode(value, tmpHead);
        ++this.size;
        return true;
    }
}

function insertAt(linkedList, index, value) {
    let tmpHead = linkedList.head;
    if (tmpHead.data === undefined && tmpHead.prev === undefined) {
        tmpHead.data = value;
    } else {
        let pointer = 0;
        while (pointer < index) {
            tmpHead = tmpHead.next;
            ++pointer;
        }
        let prev = tmpHead.prev;
        let next = tmpHead.next;

        let newNode = linkedList.createNode(value, prev, tmpHead);
        index != 0 ? prev.next : linkedList.head = newNode;
        next.prev = newNode;
    }
    ++linkedList.size;
    return true;
}

let myDLL = new DoublyLinkedList();
myDLL.push(14);
myDLL.push(5);
myDLL.push(12);
myDLL.push(8);

insertAt(myDLL, 0, 100);
// console.log(myDLL.size)
// expect(myDLL.head.data).toBe(14);
// expect(myDLL.head.next.data).toBe(5);
// expect(myDLL.head.next.next.data).toBe(100);
// expect(myDLL.size).toBe(5);


myDLL.print();