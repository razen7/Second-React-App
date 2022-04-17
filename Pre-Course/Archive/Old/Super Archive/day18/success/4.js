class LinkedList {
    constructor(data) {
        this.head = {
            next: null,
            data: data,
        }
        this.length = (data) ? 1 : 0;

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
        let newNode = this
            .createNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    shift() {
        // write your code here.
        if (head.next) {
            let next = head.next;
            head = next;
        }
    }

    push(val) {
        let newNode = this
            .createNode(val);

        let tmpPtr = this.head;
        while (tmpPtr.next != undefined) {
            tmpPtr = tmpPtr.next;
        }
        tmpPtr.next = newNode;
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