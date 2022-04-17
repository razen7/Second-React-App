let node1 = {
    data: 10,
    left: {
        data: 20,
        left: {
            data: 19, left: undefined, right: undefined
        },
        right: undefined
    },
    right: {
        data: 19,
        left: undefined,
        right: undefined
    }
}
console.log(isValidBST(node1)); // false

let node2 = {
    data: 10,
    left: {
        data: 8,
        left: {
            data: 9, left: undefined, right: undefined
        },
        right: undefined
    },
    right: {
        data: 19,
        left: undefined,
        right: undefined
    }
}
console.log(isValidBST(node2)); // false

let node3 = {
    data: 10,
    left: {
        data: 8,
        left: {
            data: 6, left: undefined, right: undefined
        },
        right: undefined
    },
    right: {
        data: 19,
        left: undefined,
        right: undefined
    }
}
console.log(isValidBST(node3)); // true

let node4 = {
    value: 18,
    left: {
        value: 10,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 25,
            left: null,
            right: null
        }
    },
    right: {
        value: 21,
        left: null,
        right: null
    }
}
console.log(isValidBST(node4)); // true

function isValidBST(node) {
    // base
    if (!node)
        return true;
    else if (node.left && node.left.data > node.data)
        return false;
    else if (node.right && node.right.data < node.data)
        return false;

    // recursive
    return isValidBST(node.left) && isValidBST(node.right);
}