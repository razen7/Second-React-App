console.log(findClosing("((1)23(45))(aB)", 0));
// 10 // the opening brace at index 0 matches the closing brace at index 10
console.log(findClosing("((1)23(45))(aB)", 2));

function findClosing(str, ptr) {
    let char = str.substring(ptr, ptr + 1);
    if (char!=='(') return -1;
    
    let queue = [];
    queue.unshift(char)
    for (let i = ptr + 1; i < str.length; i++) {
        const char = str[i];

        if (char === ')') queue.pop();
        else if (char === '(') queue.unshift(char)

        if (queue.length <= 0) return i;
    }
    return -1;
}