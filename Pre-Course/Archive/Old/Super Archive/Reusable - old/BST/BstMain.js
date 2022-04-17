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
}

let bst2 = new BinarySearchTree();
bst2.addNode(20)
bst2.addNode(2)
bst2.addNode(1)
bst2.addNode(3)
console.log(bst2);
console.log(JSON.stringify(bst2));
