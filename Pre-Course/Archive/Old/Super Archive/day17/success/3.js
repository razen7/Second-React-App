class Node {
    constructor(next = null, data) {
        this.next = next;
        this.data = data;
    }
}
let node4 = new Node(undefined, 40)
let node3 = new Node(node4, 30)
let node2 = new Node(node3, 20)
let head = new Node(node2, 10)


function display() {
    let tmpPtr = head;
    while (tmpPtr != undefined) {
        console.log(tmpPtr.data)
        tmpPtr = tmpPtr.next;
    }
}

node5 = new Node(undefined, 50);
push(50)
display();
function push(val) {
    let newNode = new Node(null, val);

    let tmpPtr = head;
    while (tmpPtr.next != undefined) {
        tmpPtr = tmpPtr.next;
    }
    tmpPtr.next = newNode;
}
unshift(5);
display();
function unshift(val) {
    let newNode = new Node(null, val);
    newNode.next = head;
    head = newNode;
}