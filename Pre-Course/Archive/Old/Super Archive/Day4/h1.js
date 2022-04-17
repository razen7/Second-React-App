console.log(
    isSymmetrical(7227) // ➞ true
    ,
    isSymmetrical(12567) // ➞ false
    ,
    isSymmetrical(44444444) // ➞ true
    ,
    isSymmetrical(9939) // ➞ false
    ,
    isSymmetrical(1112111) // ➞ true
)

function isSymmetrical(number) {
    let str = number.toString();

    let length = str.length;
    let midIndex = (length % 2) ? length / 2 : Math.ceil(length / 2);

    let pointer1 = 0;
    let pointer2 = length - 1;
    while (pointer1 < midIndex) {
        if (str[pointer1] === str[pointer2]) {
            ++pointer1;
            --pointer2;
        } else {
            return false;
        }
    }
    return true;
}
