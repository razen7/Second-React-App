function isBetween(n1, n2, val) {
    return val >= n1 && val <= n2;
}
function sumRange(root, low, high) {
    return sumRangeHelper(root, low, high, 0);
}

function sumRangeHelper(node, low, high, sum) {
    // overflow
    if (node === undefined) {
        return sum;
    }
    sum = sumRangeHelper(node.left, low, high, sum) + sumRangeHelper(node.right, low, high, sum)

    if (isBetween(low, high, node.data))
        sum += node.data;

    return sum;
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

console.log(sumRange(root1,1,3)); // Output: 6 (1 + 2 + 3)

let root2 = {
    data: 14,
    left: {
        data: 12,
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

console.log(sumRange(root2,16,18)); // Output: 34 (18 + 16)
console.log(sumRange(root2,12,16)); // Output: 55 (12 + 13 + 14 + 16)


