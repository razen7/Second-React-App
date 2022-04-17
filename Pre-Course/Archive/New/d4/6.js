console.log(rot13('grfg')); // returns 'test'

function rot13(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let code = char.charCodeAt(0);
        if (code > 96 && code < 123) {
            code += 13;
            if (code > 122) {
                code = 96 + (code - 122);
            }
            result += String.fromCharCode(code);
        } else {
            result += char;
        }
    }
    return result;
}