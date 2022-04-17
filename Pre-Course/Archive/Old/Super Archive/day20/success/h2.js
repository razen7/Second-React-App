class DoublyLinkedList {
    constructor(value = undefined, prev = undefined, next = undefined) {
        this.head = {
            'data': value,
            'prev': prev,
            'next': next,
        };
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

let myDLL = new DoublyLinkedList();
myDLL.push(14);
myDLL.push(5);
myDLL.push(12);
myDLL.push(8);

function bubbleSortLinkedList(linkedList) {
    let lastNode;
    {
        let tmphead = linkedList.head;
        while (tmphead.next != undefined) {
            tmphead = tmphead.next;
        }
        lastNode = tmphead;
    }

    let tmpHead1 = linkedList.head;
    while (lastNode != tmpHead1) {

        let tmpHead2 = linkedList.head;
        while (tmpHead2 != lastNode) {
            if (lastNode.data < tmpHead2.data) {
                let tmp = lastNode.data;
                lastNode.data = tmpHead2.data;
                tmpHead2.data = tmp;
            }
            tmpHead2 = tmpHead2.next;
        }

        lastNode = lastNode.prev;
    }
    return linkedList;
}

bubbleSortLinkedList(myDLL);
myDLL.print(); // should print values: 5, 8, 12, 14
// console.log(myDLL)