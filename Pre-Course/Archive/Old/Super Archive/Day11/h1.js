// Exercise 1: Number Of Subarrays
console.log(
    numOfSubbarrays([1, 2, 3])
)



function numOfSubbarrays(arr) {
    return arr.reduce((accu, curV) => {
        Array.isArray(curV) ? accu++ : accu;
        return accu;
    }, 0)
}