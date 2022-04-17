console.log(
    isSymmetrical(7227),// ➞ true

    isSymmetrical(12567),// ➞ false

    isSymmetrical(44444444),// ➞ true

    isSymmetrical(9939),// ➞ false

    isSymmetrical(1112111),// ➞ true
);

function isSymmetrical(n) {
    return helper(n.toString())
}

function helper(str = '', idx1 = 0, idx2 = str.length - 1) {
    if (idx1 >= idx2) {
        return true
    }

    if (str[idx1] === str[idx2]) {
        return helper(str, idx1 + 1, idx2 - 1)
    } else {
        return false;
    }
}