let a = [4, 5, 2, 25] // 5, 25, 25, -1
findNextGreatestEle(a)
function findNextGreatestEle(a) {
    let stack = [];
    let resultArr = [];
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if (stack.length === 0) stack.unshift(element);
        else if (stack[stack.length - 1] > element) stack.unshift(element);
        else if(stack[stack.length - 1] > element) resultArr.unshift(stack.shift())
    }
    console.log(resultArr);
}


