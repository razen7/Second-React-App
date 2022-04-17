let node1 = {
    data: 'a1',
    left: {
        data: 'b1',
        left: {
            data: 'c1', left: undefined, right: undefined
        },
        right: undefined
    },
    right: {
        data: 'b2',
        left: undefined,
        right: undefined
    }
}
console.log(findHeight(node1));
function findHeight(root) {
    return findHeightHelper(root);
}

function findHeightHelper(node, height = 0) {
    if (node === undefined) {
        return height - 1;
    }

    let left = findHeightHelper(node.left, height + 1);
    let right = findHeightHelper(node.right, height + 1);
    return Math.max(left, right);
}