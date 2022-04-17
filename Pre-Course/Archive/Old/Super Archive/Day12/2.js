erase("##hello");  //should return "hello"
erase("he##l#hel#llo");  //should return "hello"

function erase(word) {
    while (word.indexOf('#') !== -1) { // all backspaces # are not over
        let erase = word.substring(word.indexOf('#') - 1, word.indexOf('#') + 1);
        word = word.replace(erase, '')
    }
    return word;
}