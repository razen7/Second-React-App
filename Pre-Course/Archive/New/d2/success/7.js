console.log(doubleChar("String")); // should return "SSttrriinngg"

doubleChar("Hello World!");// should return "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ");// should return "11223344!!__  "

function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        result += element + element
    }
    return result
}