let node3 = {
    value: 18,
    left: {
        value: 100,
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
console.log(isValidBST(node3)); // true

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