class DoublyLinkedList {
    constructor(value = undefined, prev = undefined, next = undefined) {
        this.head = {
            'value': value,
            'prev': prev,
            'next': next,
        }
        this.size = value === undefined ? 0 : 1;
    }
    // create new node
    createNode(value, prev = undefined, next = undefined) {
        return {
            'value': value,
            'prev': prev,
            'next': next,
        }
    }

    print() {
        let tmpHead = this.head;
        while (tmpHead != undefined) {
            console.log(tmpHead.value)
            tmpHead = tmpHead.next;
        }
        return true;
    }

    push(value) {
        if (this.head.value === undefined && this.head.prev === undefined) {
            this.head.value = value;
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
    if (tmpHead.value === undefined && tmpHead.prev === undefined) {
        tmpHead.value = value;
        ++this.size;
        return true;
    }

    let pointer = 0;
    while (pointer < index) {
        tmpHead = tmpHead.next;
        ++pointer;
    }
    let prev = tmpHead.prev;
    let next = tmpHead.next;

    let newNode = linkedList.createNode(value, prev, tmpHead);
    prev.next = newNode;
    next.prev = newNode;
    ++this.size;

    return true;
}
let myDLL = new DoublyLinkedList();
myDLL.push(3);
myDLL.push(5);
myDLL.push(2);
myDLL.push(8);

insertAt(myDLL, 2, 7);
myDLL.print(); // should print values: 3, 5, 7, 2, 8