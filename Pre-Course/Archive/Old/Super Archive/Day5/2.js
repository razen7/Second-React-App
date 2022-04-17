// Create a function that will return an integer number corresponding to the amount of digits in the given integer num. Examples

num_of_digits_toStr(
    1000); // 4

num_of_digits_toStr(
    12); // 2

num_of_digits_toStr(
    1305981031); // 10

num_of_digits_toStr(
    0); // 1

function num_of_digits(
    num) {
    let num_of_digits = 0;
    do {
        num = Math.floor(num / 10);
        ++num_of_digits;
    } while (num > 0)
    return num_of_digits;
}

function num_of_digits_toStr(num) {
    return num.toString().length;
}