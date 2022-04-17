// Given an unsorted array and a target sum find whether two elements in the array can sum to target sum. Also write the time complexity of your code.

// Example: arr = [1, 3, 10, 23, 15] sum = 26

// Output: true

// Explanation: 3 and 23 can sum to 26.

// Time Complexity: O (n^2)
function canSum(arr, targetSum) {
    // write your code here.
    for (let idx = 0; idx < arr.length; idx++) {
        const num = arr[idx];
        for (let idxB = idx + 1; idxB < arr.length; idxB++) {
            const num2 = array[idxB];
            if (num + num2 === targetSum) return targetSum;
        }
    }
}