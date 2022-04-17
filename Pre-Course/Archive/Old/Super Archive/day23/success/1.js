class LinkedList {
    constructor(value) {
        this.head = {
            next: null,
            value: value,
        }
        this.length = (value) ? 1 : 0;

    }

    createNode(value, next = null) {
        return {
            next: next,
            value: value,
        }
    }

    display() {
        let tmpPtr = this.head;
        while (tmpPtr !== null) {
            console.log(tmpPtr.value)
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
            if (curPtr.value == value) {
                // console.log(tmpPtr1.value, tmpPtr2.value)
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

let listA = {
    value: 2,
    next: {
        value: 3,
        next: {
            value: 7
        }
    }
};

let listB = {
    value: 1,
    next: {
        value: 5,
        next: {
            value: 8
        }
    }
};

mergeTwoLinkedLists(listA, listB); // Should return 1 -> 2 -> 3 -> 5 -> 7 -> 8

function mergeTwoLinkedLists(listA, listB) {
    let [headA, headB] = [listA, listB];
    let mergedLL = new LinkedList();

    let findSmallest = () => {
        let smallest; // stores smallest variable

        val1 = headA ? headA.value : undefined;
        val2 = headB ? headB.value : undefined;

        if (val1 === undefined && val2 === undefined) {
            smallest = undefined;
        } else if (val1 === undefined) {
            smallest = val2;
            headB = headB.next;
        } else if (val2 === undefined) {
            smallest = val1;
            headA = headA.next;
        } else {
            if (val1 < val2) {
                smallest = val1;
                headA = headA.next;
            } else {
                smallest = val2;
                headB = headB.next;
            }
        }
        return [headA, headB, smallest];
    }

    let breaker = 9;
    let runBreaker = (breaker) => {
        if (breaker < 0) {
            process.exit();
        } else {
            console.log('Loop tracker running')
        }
    }

    for (let pointer = findSmallest(headA, headB); pointer[2] != undefined; pointer = findSmallest(headA, headB)) {
        const value = pointer[2];
        mergedLL.push(value);
        // runBreaker(--breaker)
    }
    mergedLL.display()
    // console.log(mergedLL);
}