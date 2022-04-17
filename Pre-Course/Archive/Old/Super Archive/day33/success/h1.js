function getDiff(n1, n2) {
    let diff = Math.max(n1, n2) - Math.min(n1, n2);
    return Math.abs(diff);
}
function minDiff(root) {
    return minDiffHelper(root)
}
function minDiffHelper(node, min = Number.POSITIVE_INFINITY) {
    // Base
    if (node.left === undefined && node.right === undefined) {
        return min;
    } else if (node.left === undefined) {
        return Math.min(min, getDiff(node.data, node.right.data));
    } else if (node.right === undefined) {
        return Math.min(min, getDiff(node.data, node.left.data));
    }

    // Recursive
    let leftDiff = getDiff(node.data, node.left.data);
    let rightDiff = getDiff(node.data, node.right.data);
    return Math.min(leftDiff, rightDiff, minDiffHelper(node.left, min), minDiffHelper(node.right, min))
}

let root1 = {
    data: 4,
    left: {
        data: 2,
        left: {
            data: 1, left: undefined, right: undefined
        },
        right: {
            data: 3, left: undefined, right: undefined
        }
    },
    right: {
        data: 6,
        left: undefined,
        right: undefined
    }
}

console.log(minDiff(root1)); // Output: 1 (2 - 1 or 3 - 2)

let root2 = {
    data: 14,
    left: {
        data: 10,
        left: {
            data: 1, left: undefined, right: undefined
        },
        right: {
            data: 13, left: undefined, right: undefined
        }
    },
    right: {
        data: 16,
        left: undefined,
        right: {
            data: 18, left: undefined, right: undefined
        }
    }
}

console.log(minDiff(root2)); // Output: 1 (2 - 1 or 3 - 2)
