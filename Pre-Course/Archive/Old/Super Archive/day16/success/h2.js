function doubleSwap(str, a, b) {
    strArr = str.split('');
    strArr.forEach((char, idx, arr) => {
        arr[idx] = char === a ? b :
            char === b ? a : char;
    });
    return strArr.join('')
}
console.log(
    doubleSwap("aabbccc", "a", "b"), // ➞ "bbaaccc"

    doubleSwap("random w#rds writt&n h&r&", "#", "&"), // ➞ "random w&rds writt#n h#r#"

    doubleSwap("128 895 556 788 999", "8", "9"), // ➞ "129 985 556 799 888"
)