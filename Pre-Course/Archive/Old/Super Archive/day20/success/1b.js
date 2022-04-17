let input1 = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: null
            }
        }
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
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
    } while (inputHead != null)

    return head;
}

let reverse = reverseLinkedList(input1)
let tmpPtr = reverse;
while (tmpPtr.next != null) {
    console.log(tmpPtr.value)
    tmpPtr = tmpPtr.next;
}