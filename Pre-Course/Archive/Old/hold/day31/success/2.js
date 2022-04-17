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
        let newNode = new Node(data);
        if (this.root === undefined) {
            this.root = newNode;
            return;
        }

        let rootCopy = this.root;
        while (rootCopy.data !== undefined) {
            if (data < rootCopy.data) {
                if (rootCopy.left === undefined) {
                    rootCopy.left = newNode;
                    return;
                }
                rootCopy = rootCopy.left;
            } else {
                if (rootCopy.right === undefined) {
                    rootCopy.right = newNode;
                    return;
                }
                rootCopy = rootCopy.right;
            }
        }
    }
}

let bst2 = new BinarySearchTree();
bst2.addNode(1)
bst2.addNode(2)
bst2.addNode(1)
console.log(JSON.stringify(bst2));