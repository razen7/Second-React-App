function isParselTongue(arr) {
    return arr.split(' ').map(v=>v.toLowerCase()).every(v=>{
        return v.includes('ss') || !v.includes('s')
    })
}
console.log(
    isParselTongue("Sshe ssselects to eat that apple. "),// ➞ true

    isParselTongue("She ssselects to eat that apple. "),// ➞ false
    // "She" only contains one "s".

    isParselTongue("Beatrice samples lemonade"),// ➞ false
    // While "samples" has 2 instances of "s", they are not together.

    isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly."),// ➞ true
)