class DoublyLinkedList {
    constructor(value = null, prev = null, next = null) {
        this.head = {
            'value': value,
            'prev': prev,
            'next': next,
        }
        this.length = 1;
    }
    // create new node
    createNode(value, prev = null, next = null) {
        return {
            'value': value,
            'prev': prev,
            'next': next,
        }
    }

    printAllNodes() {
        let tmphead = this.head;
        while (tmphead != null) {
            console.log(tmphead.value)
            tmphead = tmphead.next;
        }
        return true;
    }

    push(value) {
        let tmphead = this.head;
        while (tmphead.next != null) {
            tmphead = tmphead.next();
        }

        tmphead.next = this.createNode(value);
        ++this.length;
        return true;
    }

    unshift(value) { //To add a new node at beginning of doubly linked list.
        let tmphead = this.head;
        this.head = this.createNode(value, null, tmphead);
        ++this.length;
        return true;
    }

    pop() { // To delete the last node.
        let tmpHead = this.head;
        for (let i = 2; i < this.length; i++) {
            tmpHead = tmpHead.next;
        }
        tmpHead.next = null;

        --this.length;
        return true;
    }
    shift() {// - To delete the first node of doubly linked list.
        let next = this.head.next;
        this.head = next;

        --this.length;
        return true;
    }
}

let newDLL = new DoublyLinkedList(1);

newDLL.push(2)

newDLL.unshift(0)

newDLL.pop()

newDLL.shift()
console.log(newDLL);
newDLL.printAllNodes();
