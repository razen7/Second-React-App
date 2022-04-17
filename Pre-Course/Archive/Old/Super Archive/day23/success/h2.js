console.log(countPairs("axa"), // → 1 
    countPairs("axax"), // → 2 
    countPairs("axbx"), // → 1
);


function countPairs(str) {
    let countPairsHelper = (str, idx) => {
        let count = str.indexOf(str[idx], idx + 2) > -1 ? 1 : 0;
        // base case
        if (idx === str.length - 2) {
            return count;
        }
        // Recursive case
        return count + countPairsHelper(str, ++idx);
    }
    return countPairsHelper(str, 0)
}