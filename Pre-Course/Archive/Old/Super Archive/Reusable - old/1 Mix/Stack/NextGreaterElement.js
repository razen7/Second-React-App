let a = [13, 7, 6, 12] // [-1, 12, 12, -1]
console.log(
    nextGreater(a)
);

function nextGreater(nums) {
    return nextGreaterHelper(nums);
}

function nextGreaterHelper(arr) {
    let IndexesStack = [];
    for (const [idx, ele] of arr.entries()) {
        let stackTop = () => IndexesStack[IndexesStack.length - 1];

        if (ele <= arr[stackTop()] || IndexesStack.length === 0) {
            IndexesStack.push(idx);
        } else {
            while (ele > arr[stackTop()]) {
                arr[stackTop()] = ele;
                IndexesStack.pop();
            }
            IndexesStack.push(idx);
        }
    }

    while (IndexesStack.length != 0) {
        arr[IndexesStack.pop()] = -1;
    }
    return arr
}