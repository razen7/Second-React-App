// console.log(rot13('grfg')); // returns 'test'
console.log(rot13('z')); // returns 'm'

function rot13(str) {
    let result = '';
    let all = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        let pos = all.indexOf(char);
        if (all[pos + 13]) {
            result += all[pos + 13];
        } else {
            result += all[(pos + 13) - all.length]
        }
    }
    return result;
}