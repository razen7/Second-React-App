console.log(findMinNum(10));// 48  
//divisors are: 1, 2, 3, 4, 6, 8, 12, 16, 24 and  48


function findMinNum(num) {
    return findMinNumHelper(num, num + 1);
}
function findMinNumHelper(num, next, count = 0) {
    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */
    if (count === num)
        return next - 1;

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ
    count = 0;
    for (let f = 1; f <= next; f++) {
        if (next % f === 0)
            ++count;
    }
    return findMinNumHelper(num, next + 1, count)
}