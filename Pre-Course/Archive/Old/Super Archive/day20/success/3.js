let head = {
    value: 6,
    next: null,
    prev: null
}

// Implement a function add which takes in the doublyLinkedList and value and adds the value such that DLL is always sorted
function addToDLL(linkedList, value) {
    let tmphead = head;
    let newNode = {
        value: value,
        next: null,
        prev: null,
    }

    if (head.next === null) { // LL has 1 value
        if (head.value < value) {
            head.next = newNode;
            newNode.prev = head;
        } else {
            head = newNode;
            head.next = tmphead;
            tmphead.prev = head;
        }
        return true;
    } else if (head.value > value) { // LL has more values 
        head = newNode;
        head.next = tmphead;
        tmphead.prev = head;
        return true;
    } else {
        while (tmphead != null) {
            let cur = tmphead;
            if (cur.value >= value) {
                let curPrev = cur.prev;

                newNode.next = cur;
                newNode.prev = cur.prev;

                cur.prev = newNode;

                curPrev.next = newNode;
                return true;
            } else if (cur.next === null) {
                cur.next = newNode;

                return true;
            }
            tmphead = tmphead.next;
        }
    }
    return true;
}

addToDLL(head, 10);


addToDLL(head, 7);

addToDLL(head, 11);

console.log(head)