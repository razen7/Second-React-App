isValid('()[]{}')// -> 'Valid'
isValid('()({[]})')// -> 'Valid'
isValid('()[]({}()')// -> 'Invalid'

function isValid(str) {
    // write your code here
    isValidHelper(str);
}

function isValidHelper(str, pointer = 0) {
    if (str === '') {
        console.log('Valid');
        return;
    }

    let pickedChoice = str[pointer];
    let closingBracket = getclosingBracket(pickedChoice);
    let pos = str.indexOf(closingBracket)
    if (pos !== -1) {
        str = str.substring(pointer + 1, pos) + str.substring(pos + 1);
        let explore = isValidHelper(str, pointer);
        
    } else {
        console.log('Invalid');
        return false;
    }



}

function getclosingBracket(pickedChoice) {
    switch (pickedChoice) {
        case '(':
            return ')';
        case '{':
            return '}';
        case '[':
            return ']';
    }
}