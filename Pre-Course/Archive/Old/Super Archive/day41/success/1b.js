class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
        }
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
// groupEvenOdd(input1); // should return linked list with these values: 1->3->5->2->4

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
groupEvenOdd(input2); // should return linked list with these values: 2->3->6->7->1->5->4

function groupEvenOdd(LL) {
    let [eList, oList] = [new LinkedList(), new LinkedList()];
    let [eP, oP] = [eList.head, oList.head];

    // go through LinkedList
    let LLP = LL;
    let i = 1;
    while (LLP !== undefined) {
        let newNode = {
            value: LLP.value,
        }
        if (i % 2 === 0) {
            if (!eP.value) eP.value = LLP.value;
            else {
                eP.next = newNode;
                eP = eP.next;
            }
        } else {
            if (!oP.value) oP.value = LLP.value;
            else {
                oP.next = newNode;
                oP = oP.next;
            }
        }
        LLP = LLP.next;
        ++i;
    }
    oP.next = eList.head;

    oP = oList.head;
    while (oP) {
        console.log(oP.value);
        oP = oP.next;
    }
    return oList;
}