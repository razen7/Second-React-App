function stupidAddition(a, b) {
    if (typeof (a) !== typeof (b)) return null;

    let switchType = (ele) => typeof (ele) === 'number' ? String(ele) : Number(ele);
    [a, b] = [switchType(a), switchType(b)];
    return a + b
}
console.log(
    stupidAddition(1, 2),// ➞ "12"

    stupidAddition("1", "2"),// ➞ 3

    stupidAddition("1", 2),// ➞ null
)