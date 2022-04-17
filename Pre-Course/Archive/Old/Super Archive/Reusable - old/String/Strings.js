function checkAnagram(str1, str2) {
    let arr1 = str1.toLowerCase().split('');
    let arr2 = str2.toLowerCase().split('');
    arr1.sort();
    arr2.sort();
    str1 = arr1.join('');
    str2 = arr2.join('');
    return str1 === str2;
}

let str1 = "Silent";
let str2 = "liSten";
console.log(checkAnagram(str1, str2));