let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
};

function middleOfLinkedList(linkedList) {
    let length = () => { // 1 find length
        let counter = 0;

        let tmpHead = linkedList;
        while (tmpHead.next != undefined) {
            tmpHead = tmpHead.next
            ++counter;
        }
        return counter;
    }
    // console.log(length())

    let mid = Math.ceil(length() / 2); // 2 find mid
    // console.log(mid)

    // 3 get mid and return
    let counter = 0;

    let tmpHead = linkedList;
    while (counter < mid) {
        tmpHead = tmpHead.next
        ++counter;
    }
    
    return tmpHead.value;
}
console.log(
    middleOfLinkedList(linkedList), // should print 11
)