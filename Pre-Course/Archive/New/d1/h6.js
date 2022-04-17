console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // should return "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // should return "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // should return "(345) 501-2527"

function formatPhoneNumber(arr) {
    let a = arr.slice(0, 3).join('');
    let b = arr.slice(3, 6).join('');
    let c = arr.slice(6).join('');
    return `(${a}) ${b}-${c}`
}