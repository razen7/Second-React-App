class LinkedList {
    constructor(data) {
        this.head = {
            next: null,
            data: data,
        }
        this.size = (data) ? 1 : 0;

    }

    createNode(data, next = null) {
        return {
            next: next,
            data: data,
        }
    }

    display() {
        let tmpPtr = this.head;
        while (tmpPtr !== null) {
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
        while (tmpPtr1.next != null) {
            [tmpPtr2, tmpPtr1] = [tmpPtr1, tmpPtr1.next];
        }
        if (tmpPtr2)
            tmpPtr2.next = null;
    }

    deleteTarget(value) {
        // write your code here.
        let curPtr = this.head;
        let prevPtr;
        while (curPtr != null) {
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

let ll1 = new LinkedList(1);
ll1.push(2)
ll1.push(3)

let ll2 = new LinkedList(2);
ll2.push(3)
ll2.push(4)
ll2.push(5)
ll2.push(5)

addLinkedLists(ll1, ll2);

function addLinkedLists(listA, listB) {
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
