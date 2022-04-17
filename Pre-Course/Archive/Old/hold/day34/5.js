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
console.log(isCousin(node1, 'c2', 'c1'));

function isCousin(root, v1, v2) {
    if (root === undefined) return false;
    let left = root.left
    let right = root.right
    return isCousinHelper(grandaPa, left, right, v1, v2);
}

function isCousinHelper(node, v1, v2) {
    if (node === undefined) {
        return false;
    } else if (node.left === undefined || node.right === undefined) {
        return false;
    }

    let left = node.left;
    let right = node.right;
    if (left.left === undefined || left.right === undefined) {
        return false;
    } else if (right.left === undefined || right.right === undefined) {
        return false;
    }
    let leftA = left.left;
    let leftB = left.right;
    let rightA = right.left;
    let rightB = right.right;

    if (leftA.data === v1 && rightA.data === v2) {
        return true;
    } else if (rightA.data === v1 && leftA.data === v2) {
        return true
    } else if (leftB.data === v1 && rightB.data === v2) {
        return true
    } else if (rightB.data === v1 && leftB.data === v2) {
        return true
    }

    return isCousinHelper(left, v1, v2) || isCousinHelper(right, v1, v2)

}