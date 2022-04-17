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
        if (index != 0) {
            prev.next = newNode;
            next.prev = newNode;
        } else {
            linkedList.head = newNode;
            newNode.next = tmpHead;
        }

    }
    ++linkedList.size;
    return true;
}

let newDLL = new DoublyLinkedList(111);

newDLL.push(11)
newDLL.push(1)
newDLL.push(2)

newDLL.unshift(0)

newDLL.pop()

newDLL.shift()
// console.log(newDLL);
newDLL.printAllNodes();
