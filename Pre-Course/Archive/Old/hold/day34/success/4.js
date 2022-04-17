let node1 = {
    data: 'a1',
    left: {
        data: 'b1',
        left: {
            data: 'c1', left: undefined, right: undefined
        },
        right: {
            data: 'c2', left: undefined, right: undefined
        }
    },
    right: {
        data: 'b2',
        left: undefined,
        right: undefined
    }
}
console.log(isSibling(node1, 'c2', 'c1'));
function isSibling(root, v1, v2) {
    return isSiblingHelper(root, v1, v2);
}

function isSiblingHelper(node, v1, v2) {
    if (node === undefined) {
        return false;
    } else if (node.left === undefined || node.right === undefined) {
        return false;
    }

    let left = node.left;
    let right = node.right;
    if (left.data === v1 && right.data === v2) {
        return true;
    } else if (right.data === v1 && left.data === v2) {
        return true
    }

    return isSiblingHelper(left, v1, v2) || isSiblingHelper(right, v1, v2)

}