let input1 = {
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

let valArr = [];
let head = input1;
do {
    valArr.unshift(head.value);
    head = head.next;
} while (head.next != undefined)
valArr.unshift(head.value);
// console.log(valArr);
let newLL = {
    value: null,
    next: null,
}
let head2 = newLL;
for (const [idx, val] of valArr.entries()) {
    newLL.value = val;

    newLL.next = {
        value: null,
        next: null,
    }

    newLL = newLL.next;
}

console.log(head2)


