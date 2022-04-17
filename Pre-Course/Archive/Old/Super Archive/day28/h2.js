let arr = [a, b, c]
// Then power set of `arr` will be
[
    [],
    [a],
    [b],
    [c],
    [a, b],
    [a, c],
    [b, c],
    [a, b, c]
]

function powerSet(arr) {
    let powerSetArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let combine= powerSetArr[j*i]
            powerSetArr.push(arr[i + j]);
        }
    }
}