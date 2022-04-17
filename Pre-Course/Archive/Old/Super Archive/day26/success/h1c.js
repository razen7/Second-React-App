let a = [4, 5, 2, 25] // 5, 25, 25, -1
console.log(nextGreater(a));

function nextGreater(nums) {
    return nextGreaterHelper(nums, nums.length);
}

function nextGreaterHelper(arr, length) {
    let stack = [];
    stack.push(arr[0]);
    let nextGreaterArr = [];

    for (let i = 1; i < length; i++) {
        if (stack.length == 0) {
            stack.push(arr[i]);
            continue;
        }

        while (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
            nextGreaterArr.push(arr[i]);
            stack.pop()
        }

        stack.push(arr[i]);
    }

    while (stack.length != 0) {
        nextGreaterArr.push(-1);
        stack.pop();
    }
    return nextGreaterArr
}