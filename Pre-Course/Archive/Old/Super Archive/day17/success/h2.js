// Exercise 2
function caesarCipher(str, num) {
    let strArr = str.split('');
    let smallChars = 'abcdefghijklmnopqrstuvwxyz';
    let bigChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    strArr.forEach((val, idx, arr) => {
        if (/[a-z]/g.test(val)) {
            let encodedIdx = smallChars.indexOf(val) + num;
            while (encodedIdx >= smallChars.length) {
                encodedIdx -= smallChars.length;
            }
            arr[idx] = smallChars[encodedIdx];
        } else if (/[A-Z]/g.test(val)) {
            let encodedIdx = bigChars.indexOf(val) + num;
            while (encodedIdx >= bigChars.length) {
                encodedIdx -= bigChars.length;
            }
            arr[idx] = bigChars[encodedIdx];
        }
    });
    return strArr.join('');
}
console.log(
    // caesarCipher("middle-Outz", 2), // ➞ "okffng-Qwvb"

    // caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
    // , //➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

    // caesarCipher("A friend in need is a friend indeed", 20), //➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

    caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49)
    // Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.
)