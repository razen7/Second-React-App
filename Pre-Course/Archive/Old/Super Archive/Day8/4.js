// You are given a number(between 0 and 100000000000) and you have to format it properly as Thousands(K), Million(M) or Billion(B) with a fixed decimal place of 2.
const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

let format = (number) => {
    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;
    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;
    // console.log(scaled)

    // format number and add suffix
    // console.log(scaled.toFixed(1) + suffix) 
    return scaled.toFixed(1) + suffix;
}
format(10100)
10100 //-> 10.10K
2023150 //-> 2.02M
5430120215 //-> 5.43B
