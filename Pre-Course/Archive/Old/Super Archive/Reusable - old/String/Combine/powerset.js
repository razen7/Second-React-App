powerSet(['a', 'b', 'c'])
// [    [],   [a],   [b],   [c],   [a, b],   [a, c],   [b, c],   [a, b, c]  ]



function powerSet(arr, sum) {
    let powerSet = powerSetSumHelper(arr);
    console.log(powerSet)
}

function powerSetHelper(arr, sSet = [], pSet = [], iterator = 0) {
    //base 
    if (iterator === arr.length) {
        return pSet.push([...sSet]);
    }

    //recursion
    let num = arr[iterator];

    powerSetSumHelper(arr, sSet, pSet, iterator + 1)
    sSet.push(num)
    powerSetSumHelper(arr, sSet, pSet, iterator + 1)

    sSet.pop()

    return pSet;

}