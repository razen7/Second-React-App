subset([1, 2, 3, 3], 6)
// Output: 3 
// All the possible subsets are [1, 2, 3], [1, 2, 3] and [3, 3]

function subset(arr, sum) {
    let allSubsets = subsetSumHelper(arr);
    let filtered = allSubsets.filter(arr => {
        let curSum = arr.length ? arr.reduce((cur, accu) => cur + accu) : 0;
        return curSum === sum;
    })
    console.log(filtered.length)
}

function subsetSumHelper(arr, sSet = [], pSet = [], iterator = 0) {
    //base 
    if (iterator === arr.length) {
        return pSet.push([...sSet]);
    }

    //recursion
    let num = arr[iterator];

    subsetSumHelper(arr, sSet, pSet, iterator + 1)
    sSet.push(num)
    subsetSumHelper(arr, sSet, pSet, iterator + 1)

    sSet.pop()

    return pSet;
}