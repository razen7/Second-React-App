subset([1, 2, 3, 3], 6)
// Output: 3 
// All the possible subsets are [1, 2, 3], [1, 2, 3] and [3, 3]



function subset(arr, sum) {
    let allSubsets = subsetSumHelper(arr);
    // console.log(allSubsets)
}

function subsetSumHelper(arr, sSet = [], pSet = [], iterator = 0) {
    //base 
    if (iterator === arr.length) {
        console.log(sSet);
        return pSet.push([...sSet]);
    }

    //recursion
    for (let i = iterator; i < arr.length; i++) {
        let num = arr[i];
        sSet.push(num)

        subsetSumHelper(arr, sSet, pSet, iterator + 1)

        sSet.pop()

        // subsetSumHelper(arr, sSet, pSet, iterator + 1)
    }
    return pSet;

}