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

let dll3 = new DoublyLinkedList();
bubbleSortLinkedList(dll3);
dll3.push(15);
dll3.push(-15);
dll3.push(100);
bubbleSortLinkedList(dll3);
// expect(dll3.size).toBe(3);
console.log(dll3.size);