// Create a function that returns an integer representing the number of matching pairs of socks that are available.

function sockMerchant(arr) {
    let record = {};
    for (const val of arr) {
        if (!record[val]) record[val] = 1;
        else ++record[val];
    }
    let count = 0;
    for (const key in record) {
        if (Object.hasOwnProperty.call(record, key)) {
            const val = record[key];
            let pairs = Math.floor(val / 2);
            count += pairs ? pairs : 0;
        }
    }
    return count;
}
// Examples
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // should return 3

sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]); // should return 4

sockMerchant([]); // should return 0
