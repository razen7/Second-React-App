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
        return this.addNodeHelper(data, this.root);
    }

    addNodeHelper(data, next) {
        // Base Case
        if (data < next.data && next.left === undefined) {
            return next.left = new Node(data);
        } else if (data >= next.data && next.right === undefined) {
            return next.right = new Node(data);
        }

        // Recursive Case
        return this.addNodeHelper(data, data < next.data ? next.left : next.right)
    }
}

let bst2 = new BinarySearchTree();
bst2.addNode(1)
bst2.addNode(2)
// bst2.addNode(1)
// console.log(JSON.stringify(bst2));
console.log(bst2);