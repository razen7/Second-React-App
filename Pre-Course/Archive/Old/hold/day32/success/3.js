class Node {
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
}

class BinarySearchTree {
    constructor(data) {
        this.root = data ? new Node(data) : undefined;
        this.size = data ? 1 : 0;
    }

    addNode(data) {
        ++this.size;
        // Base Case
        if (this.root === undefined) {
            return this.root = new Node(data);
        }
        this.addNodeHelper(this.root, data);
    }

    addNodeHelper(curPtr, data) {
        // Base Case
        if (curPtr === undefined) {
            return new Node(data);
        }
        // Recursive Case
        if (data <= curPtr.data)
            curPtr.left = this.addNodeHelper(curPtr.left, data);
        else if (data > curPtr.data) {
            curPtr.right = this.addNodeHelper(curPtr.right, data);
        }
        return curPtr;
    }

    displayPre() {
        displayPreHelper(this.root)
    }

    displayPreHelper(curNode, curRoot) {
        // base


        // recursive
    }

    searchVal(val) {
        return this.searchValHelper(val, this.root)
    }
    searchValHelper(val, curNode) {
        // Base
        if (curNode === undefined) {
            return false;
        } else if (curNode.data === val) {
            return true;
        }
        // Recursive
        if (val <= curNode.data) {
            return this.searchValHelper(val, curNode.left);
        } else if (val > curNode.data) {
            return this.searchValHelper(val, curNode.right);
        }
    }

    findMin(val=NU){

    }
}

let bst2 = new BinarySearchTree();
bst2.addNode(1)
bst2.addNode(2)
bst2.addNode(3)
console.log(bst2.searchVal(3));
// console.log(JSON.stringify(bst2));