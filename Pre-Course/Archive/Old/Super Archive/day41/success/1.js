class LinkedList {
    constructor(value) {
        this.head = {
            next: undefined,
            value: value,
        }
        this.size = (value) ? 1 : 0;

    }

    createNode(value, next = undefined) {
        return {
            next: next,
            value: value,
        }
    }

    display() {
        let tmpPtr = this.head;
        while (tmpPtr !== undefined) {
            console.log(tmpPtr.value)
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
        if (this.head.value === undefined) {
            this.head.value = val;
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
            if (curPtr.value == value) {
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
// Example 1:
let input1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5
                }
            }
        }
    }
};
groupEvenOdd(input1); // should return linked list with these values: 1->3->5->2->4

// Example 2:
let input2 = {
    value: 2,
    next: {
        value: 1,
        next: {
            value: 3,
            next: {
                value: 5,
                next: {
                    value: 6,
                    next: {
                        value: 4,
                        next: {
                            value: 7
                        }
                    }
                }
            }
        }
    }
};
// groupEvenOdd(input2); // should return linked list with these values: 2->3->6->7->1->5->4
function groupEvenOdd(list) {
    let [eList, oList] = [new LinkedList(), new LinkedList()];
    let eLastNode, oLastNode;

    // go through LinkedList
    let tmpPtr = list;
    let i = 1;
    while (tmpPtr !== undefined) {
        if (i % 2 === 0) {
            oList.push(tmpPtr.value);
            oLastNode = tmpPtr;
        } else {
            eList.push(tmpPtr.value);
            // console.log(tmpPtr);
            eLastNode = tmpPtr;
            if (tmpPtr)
                oList.unshift(tmpPtr.value);
        }

        tmpPtr = tmpPtr.next;
        ++i;
    }

    // combine two linkedlists

    oList.display()
    // console.log(eLastNode)

    // eLastNode['next'] = oList.head;
    // console.log(eLastNode)

    // eList.display()
    // oList.display();
    // let combined=

}