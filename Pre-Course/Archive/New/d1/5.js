console.log(
    reverseString('hello'), // should return olleh;
    reverseString('swen'), // should return news;
    reverseString('laptop'), // should return potpal;
);
function reverseString(word) {
    let result = '';
    for (let i = word.length - 1; i > -1; i--) {
        const element = word[i];
        result += element;
    }
    return result;
}