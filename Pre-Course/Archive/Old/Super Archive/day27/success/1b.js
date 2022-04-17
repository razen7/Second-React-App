let linkedList = {
    value: 11,
    next: {
        value: 11,
        next: {
            value: 21,
            next: {
                value: 43,
                next: {
                    value: 43,
                    next: {
                        value: 60,
                        next: undefined
                    }
                }
            }
        }
    }
}      



removeDuplicates(linkedList); // this will make the linked list 5 -> 7 -> 18

function removeDuplicates(linkedList) {
    let pointer = linkedList;
    while (pointer !== undefined) {
        let curNode = pointer;
        let nextNode = curNode.next;

        while (nextNode !== undefined && curNode.value === nextNode.value) {
            nextNode = nextNode.next;
            curNode.next = nextNode;
        }

        pointer = pointer.next
    }
    display(linkedList)
}

function display(linkedList) {
    let tmpPtr = linkedList;
    while (tmpPtr) {
        console.log(tmpPtr.value)
        tmpPtr = tmpPtr.next;
    }
}