console.log(isbn13("9780316066525")); // "Valid"

console.log(isbn13("0330301824")); // "Invalid"

console.log(isbn13("0316066524")); // "9780316066525"

console.log(isbn13("817450494X")); // '9788174504944'

function isbn13(str) {
    if (![10, 13].includes(str.length)) {
        return "Invalid";
    }

    let sArr = str.split('').map(v => Number(v));
    if (str.length === 13) {
        let cArr = sArr.map((v, idx) => {
            if (idx % 2 === 0)
                return v * 1;
            else
                return v * 3;
        })
        let sum = cArr.reduce((p, c) => p + c);
        return sum % 10 === 0 ? 'Valid' : 'Invalid';
    } else {
        if (!sArr[sArr.length - 1])
            sArr[sArr.length - 1] = 10;

        let cArr = sArr.map((v, idx) => v * (sArr.length - idx));
        let sum = cArr.reduce((p, c) => p + c);
        if (sum % 11 === 0) {
            // convert to 13
            sArr.unshift(9, 7, 8)

            cArr = sArr.map((v, idx) => {
                if (idx % 2 === 0)
                    return v * 1;
                else
                    return v * 3;
            })

            sum = cArr.reduce((p, c) => p + c);
            let r = sum % 10;

            sArr[sArr.length - 1] += 10 - r;

            if (sArr[sArr.length - 1] > 9) {
                sArr[sArr.length - 1] -= 10
            }

            return sArr.join('');
        } else
            return 'Invalid';
    }

}