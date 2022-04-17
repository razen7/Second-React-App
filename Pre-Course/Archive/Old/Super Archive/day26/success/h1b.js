function printNGE(arr, n) {
    let stack = [];
    stack.push(arr[0]);
    let newArr = [];
    for (let i = 1; i < n; i++) {

        if (stack.length == 0) {
            stack.push(arr[i]);
            continue;
        }

        /* if stack is not empty, then
           pop an element from stack.
           If the popped element is smaller
           than next, then
        a) print the pair
        b) keep popping while elements are
        smaller and stack is not empty */
        while (stack.length == 0 == false && stack[stack.length - 1] < arr[i]) {
            newArr.push(arr[i]);
            stack.pop()
        }

        /* push next to stack so that we can find
        next greater for it */
        stack.push(arr[i]);
    }

    /* After iterating over the loop, the remaining
    elements in stack do not have the next greater
    element, so print -1 for them */
    while (stack.length != 0) {
        newArr.push(-1);
        stack.pop();
    }
    return newArr
}

/* Driver code */
var arr = [11, 13, 21, 3];
var n = arr.length;
console.log(
    printNGE(arr, n)
);
