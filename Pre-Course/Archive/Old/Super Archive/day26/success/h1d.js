let a = [13, 7, 6, 12] // [-1, 12, 12, -1]
console.log(
    nextGreater(a)
);

function nextGreater(nums) {
    return nextGreaterHelper(nums, nums.length);
}

function nextGreaterHelper(arr, length) {
    let IndexesStack = [];

    let nextGreaterArr = new Array(arr.length);
    for (const [idx, ele] of arr.entries()) {
        let stackTop = () => IndexesStack[IndexesStack.length - 1];


        if (ele <= arr[stackTop()] || IndexesStack.length === 0) {
            // console.log(arr[stackTop()]);
            IndexesStack.push(idx);
        } else {
            // console.log(ele,stackTop(),stack[stackTop()]);
            while (ele > arr[stackTop()]) {
                nextGreaterArr[stackTop()] = ele;
                IndexesStack.pop();
                // console.log(IndexesStack.pop(),IndexesStack);
            }
            IndexesStack.push(idx);
            // console.log(IndexesStack,idx);
        }
    }

    while (IndexesStack.length != 0) {
        nextGreaterArr[IndexesStack.pop()] = -1;
    }
    return nextGreaterArr
}