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