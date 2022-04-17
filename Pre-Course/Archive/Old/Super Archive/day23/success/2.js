function isPalindromic(str, sIdx = 0, lIdx = str.length - 1) {
    // base case
    if (str.length === 0) return true;
    else if (sIdx + 1 == lIdx) {
        return str[sIdx + 1] == str[lIdx];
    } else if (sIdx == lIdx) {
        return str[sIdx] == str[lIdx];
    }
    
    //recursive case
    return str[sIdx] == str[lIdx] ? isPalindromic(str, ++sIdx, --lIdx) : false;

}

console.log(isPalindromic('viv'));//true
console.log(isPalindromic('abc'));//false
console.log(isPalindromic(''));//true