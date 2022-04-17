function diceGame(arr) {
    let sum = 0;
    for (const subArr of arr) {
        if (subArr[0] === subArr[1])
            sum = 0;
        else
            sum += subArr[0] + subArr[1];
    }
    return sum;
}
diceGame([[1, 2], [3, 4], [5, 6]]); // should return 21

diceGame([[5, 6], [6, 4], [1, 1]]); // should return 0

diceGame([[4, 5], [4, 5], [4, 5]]); // should return 27

function countVowels(word) {
    vowels = 'aeiouAEIOU';
    let count = 0;
    word.split('').map(element => vowels.includes(element) ? ++count : '');
    console.log(count);
    return count;
}
countVowels("Celebration");// should return 5

countVowels("Palm");// should return 1

countVowels("Prediction");// should return 4