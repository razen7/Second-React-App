let arr = ['a', 'b', 'c']
console.log(powerSet(arr));

function powerSet(setArr) {
    return powerSetHelper(setArr.join(''), powerSetArr = [[]], pointer = 0);
}
function powerSetHelper(str, powerSetArr = [], pointer = 0) {
    let pre = str.substring(0, pointer);

    // base overflow
    if (pointer >= str.length) {
        return;
    }

    // recursive
    for (let i = pre.length; i < str.length; i++) {
        let temp = pre + str[i];
        powerSetArr.push(temp.split(''));
        powerSetHelper(str.substring(i + 1), powerSetArr, pre.length + 1)
    }

    powerSetHelper(str, powerSetArr, pointer + 1)


    return powerSetArr;
}