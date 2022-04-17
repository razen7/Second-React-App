let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 7,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
};

removeDuplicates(linkedList); // this will make the linked list 5 -> 7 -> 18
function removeDuplicates(linkedList) {
    let iterator = linkedList;
    while (iterator.next !== undefined) {
        let curNode = iterator;
        let nextNode = curNode.next;

        while (nextNode !== undefined && curNode.value === nextNode.value) {
            nextNode = nextNode.next;
            curNode.next = nextNode;
        }
        iterator = iterator.next
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