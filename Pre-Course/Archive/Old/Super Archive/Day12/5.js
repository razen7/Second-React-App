// Take this code and re-write it to use single reduce function. Put the time it took for your code to run in a comment on Airtable when you submit.

function minMaxTotal(arr) {
    return arr.reduce((a, c) => {
        a[0] = Math.min(a[0], c);
        a[1] = Math.max(a[1], c);
        a[2] = a[2] + c;
        return a
    }, [Infinity, -Infinity, 0])
}

let arr = new Array(10000000).fill(0).map((item) => Math.floor(Math.random() * 10000 + 10000));
// you can try priting the array to find out whats inside it.

console.time('functionTime');
console.log(minMaxTotal(arr));
console.timeEnd('functionTime');