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
}
function isValuePresent(linkedList, val) {
    let tmpHead = linkedList;
    while (val != tmpHead.value && tmpHead.next != undefined) {
        tmpHead = tmpHead.next
    }
    if (tmpHead.value === val)
        return true;
    else //if (tmpHead.next === undefined)
        return false;
}
console.log(
    isValuePresent(linkedList, 7), // should return true
    isValuePresent(linkedList, 18), // should return true
    isValuePresent(linkedList, 3), // should return false
)