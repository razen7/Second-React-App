function isPalindromicRecurHelper(str, leftPtr, rightPtr) {
    if(leftPtr >= rightPtr) {
        return true;
    }
    if(str[leftPtr] !== str[rightPtr]) {
        return false;
    }
    return isPalindromicRecurHelper(str, leftPtr + 1, rightPtr - 1);
}

function isPalindromicRecur(str){
    return isPalindromicRecurHelper(str, 0, str.length - 1);
}


console.log(isPalindromicRecur('viv')); // t
console.log(isPalindromicRecur('vive')); //f
console.log(isPalindromicRecur('abba')); //true
