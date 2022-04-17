//Given a linked list write the code to delete an element from the beginning of the linked list.
let head = {
    data: 10,
    next: {
        data: 20,
        next: {
            data: 30,
            next: {
                data: 40,
                next: null
            }
        }
    }
};


function display() {
    let tmpPtr = head;
    while (tmpPtr !== null) {
        console.log(tmpPtr.data)
        tmpPtr = tmpPtr.next;
    }
}

// display();
function shift() {
    // write your code here.
    let next = (head.next) ? head.next : null;
    head = next;
}
// shift();
// display();
function pop() {
    // write your code here.
    let tmpPtr1 = head;
    let tmpPtr2;
    while (tmpPtr1.next != null) {
        [tmpPtr2, tmpPtr1] = [tmpPtr1, tmpPtr1.next];
    }
    if (tmpPtr2)
        tmpPtr2.next = null;
}
// pop();
// display();

function deleteTarget(value) {
    // write your code here.
    let curPtr = head;
    let prevPtr;
    while (curPtr != null) {
        [prevPtr, curPtr] = [curPtr, curPtr.next];
        if (curPtr.data == value) {
            // console.log(tmpPtr1.data, tmpPtr2.data)
            prevPtr.next = curPtr.next;
            break;
        }
    }
}

console.log(deleteTarget(40)); // true
display()
// console.log(deleteTarget(50)); // false