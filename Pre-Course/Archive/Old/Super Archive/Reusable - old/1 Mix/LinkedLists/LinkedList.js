class LinkedList {
    constructor(data) {
        this.head = {
            next: undefined,
            data: data,
        }
        this.size = (data) ? 1 : 0;

    }

    createNode(data, next = undefined) {
        return {
            next: next,
            data: data,
        }
    }

    display() {
        let tmpPtr = this.head;
        while (tmpPtr !== undefined) {
            console.log(tmpPtr.data)
            tmpPtr = tmpPtr.next;
        }
    }

    unshift(val) {
        let newNode = this.createNode(val);
        newNode.next = this.head;
        this.head = newNode;
        ++this.size;
        return true;
    }

    shift() {
        // write your code here.
        if (head.next) {
            let next = head.next;
            head = next;
        }
    }

    push(val) {
        if (this.head.data === undefined) {
            this.head.data = val;
        } else {
            let newNode = this.createNode(val);

            let tmpPtr = this.head;
            while (tmpPtr.next != undefined) {
                tmpPtr = tmpPtr.next;
            }
            tmpPtr.next = newNode;
        }
        ++this.size;
        return true;
    }

    pop() {
        // write your code here.
        let tmpPtr1 = this.head;
        let tmpPtr2;
        while (tmpPtr1.next != undefined) {
            [tmpPtr2, tmpPtr1] = [tmpPtr1, tmpPtr1.next];
        }
        if (tmpPtr2)
            tmpPtr2.next = undefined;
    }

    deleteTarget(value) {
        // write your code here.
        let curPtr = this.head;
        let prevPtr;
        while (curPtr != undefined) {
            if (curPtr.data == value) {
                // console.log(tmpPtr1.data, tmpPtr2.data)
                if (prevPtr)
                    prevPtr.next = curPtr.next;
                else
                    this.head = curPtr.next
                return true;
            }
            [prevPtr, curPtr] = [curPtr, curPtr.next];
        }
        return false;
    }
}

function mergeTwoLinkedLists(listA, listB) {
    let mergedLL = new LinkedList();
    while (listA || listB) {
        let a = listA ? listA.data : Infinity;
        let b = listB ? listB.data : Infinity;
        if (a < b) {
            mergedLL.push(a)
            listA = listA.next;
        } else if (b < a) {
            mergedLL.push(b)
            listB = listB.next
        }
    }
    return mergedLL;
}

function AddTwoLinkedLists(listA, listB) { 
    // https://gist.github.com/McLarenCollege/b5a9de7c1428e4cde93c60e3b6cc2883
    // Remainders are considered
    let mergedLL = new LinkedList();
    let [small, big] = listA.size < listB.size ? [listA.head, listB.head] : [listB.head, listA.head];
    let carry = 0;

    while (small) {
        let m = small.data + big.data + carry;
        carry = 0;
        if (m > 9) {
            carry = Math.floor(m / 10);
            m = m % 10;
        }
        mergedLL.push(m);

        [small, big] = [small.next, big.next] //unpick
    }

    while (big) {
        let m = big.data + carry;
        carry = 0;
        mergedLL.push(m);
        big = big.next;
    }
    mergedLL.display()
}

function reverseLinkedList(LinkedList) {
    let inputHead = LinkedList;

    let newLL1 = new Node();
    head = newLL1;
    do {
        let unshift = (val) => {
            let newNode = new Node(val);
            newNode.next = head;
            head = newNode;
        }

        unshift(inputHead.value);

        inputHead = inputHead.next;
    } while (inputHead != undefined)

    return head;
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

let l1 = new LinkedList(1);
l1.push(2)
l1.push(3)
l1.push(4)
l1.deleteTarget(3)
l1.deleteTarget(2)
l1.deleteTarget(1)
l1.deleteTarget(4)
l1.deleteTarget(4)
l1.display();
// console.log(l1.length)