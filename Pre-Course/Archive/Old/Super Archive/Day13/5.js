// Implement the function minimumThree to find the 3 smallest number from a given unsorted array of distinct integers.

// Note: Its given that the size of the array will be atleast 3 and all the numbers will be unique.

function minimumThree(arr) {
    // write your code here
    let newArr = arr.sort((num1, num2) => num1 - num2);
    return newArr.slice(0,3)
}

console.log(
    minimumThree(
        [88, 3, 66, 26, 83, 16]
    )
)