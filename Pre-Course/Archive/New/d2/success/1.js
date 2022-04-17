// we are trying to calculate the the average of number in numbers in array.
let numbers = [12, 5, 17, 8, 19];
let total = 0;
let x;
for (x = 0; x < numbers.length; x++) {
    total += numbers[x];
}
let avg = total / numbers.length;
console.log(avg);
