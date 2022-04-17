// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.
function reverseImage(box) {
    for (const key in box) {
        if (Object.hasOwnProperty.call(box, key)) {
            const row = box[key];
            row.forEach((val, idx, arr) => {
                arr[idx] = val === 1 ? 0 : 1;
            });
        }
    }
    return box;
}
reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);// should return [[0, 1, 1],[1, 0, 1],[1, 1, 0]]

reverseImage([
    [1, 1, 1],
    [0, 0, 0]
]);// should return 
// [
// [0, 0, 0],
// [1, 1, 1]
// ]

reverseImage([
    [1, 0, 0],
    [1, 0, 0]
]);// should return 
      // [
      // [0, 1, 1],
      // [0, 1, 1]
      // ]