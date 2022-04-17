console.log(repeatChar("String", 3));// should return "SSStttrrriiinnnggg"

repeatChar("Hello World!", 2);// should return "HHeelllloo  WWoorrlldd!!"

repeatChar("1234!_ ", 4);// should return "1111222233334444!!!!____    "

function repeatChar(str, freq) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        let j= freq;
        while (j > 0) {
            result += element;
            j--;
        }
    }
    return result
}