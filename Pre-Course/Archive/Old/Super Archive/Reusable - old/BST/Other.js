{
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

    function isValidBST(node) {
        // base
        if (node === undefined)
            return true;
        else if (node.left && node.left.data > node.data)
            return false;
        else if (node.right && node.right.data < node.data)
            return false;

        // recursive
        return isValidBST(node.left) && isValidBST(node.right);
    }
}

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
// console.log(printLevelOrder(node1));
printLevelOrder(node1)

function printLevelOrder(root) {
    // let arr = printLevelOrderHelper(root);
    let levelArr = [root];
    while (levelArr.length > 0) {
        levelArr = printLevelOrderHelper(levelArr);
    }
}

function printLevelOrderHelper(levelArr, childrenArr = []) {
    if (levelArr.length <= 0)
        return [];

    for (let i = 0; i < levelArr.length; i++) {
        const node = levelArr[i];
        console.log(node.data);
        if (node.left) childrenArr.push(node.left)
        if (node.right) childrenArr.push(node.right)
    }

    return childrenArr;
}

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
        left: {
            data: 'c3', left: undefined, right: undefined
        },
        right: undefined
    }
}
console.log(isCousin(node1, 'c2', 'c3'));

function isCousin(root, v1, v2) {
    if (root === undefined) return false;
    let left = root.left
    let right = root.right
    return isCousinHelper(root, left, right, v1, v2);
}

function isCousinHelper(grandaPa, s1, s2, v1, v2) {
    if ([grandaPa, s1, s2].includes(undefined)) {
        return false;
    }

    s1A = s1.left ? s1.left.data : undefined;
    s1B = s1.right ? s1.right.data : undefined;
    s2A = s2.left ? s2.left.data : undefined;
    s2B = s2.right ? s2.right.data : undefined;
    s1Siblings = [s1A, s1B];
    s2Siblings = [s2A, s2B];

    if (s1Siblings.includes(v1) && s2Siblings.includes(v2)) {
        return true;
    } else if (s1Siblings.includes(v2) && s2Siblings.includes(v1)) {
        return true;
    }

    return isCousinHelper(s1, s1.left, s1.right, v1, v2) || isCousinHelper(s2, s2.left, s2.right, v1, v2);
}