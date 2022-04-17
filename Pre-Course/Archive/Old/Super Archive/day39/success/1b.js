function subtract(str1, str2) {
    let [bArr, sArr] = [str1.split('').reverse(), str2.split('').reverse()];
    bArr = bArr.map((v) => Number(v));
    sArr = sArr.map((v) => Number(v));

    let result = [];
    let i;
    for (i = 0; i < sArr.length; i++) {
        const small = sArr[i];
        let big = bArr[i];
        if (big < small) {
            big += 10;
            if (bArr[i + 1] > 0) {
                --bArr[i + 1];
            } else {
                let i2 = i + 1;
                while (bArr[i2] < 1) {
                    ++i2;
                }

                if (bArr[i2] === 1 && i2 === bArr.length - 1) {
                    bArr.pop();
                } else
                    bArr[i2] -= 1;

                --i2;
                while (i2 > i) {
                    bArr[i2] += 9;
                    --i2;
                }
            }

        }
        result.push(big - small);
    }
    while (i < bArr.length) {
        result.push(bArr[i++])
    }

    result = result.reverse().join('')
    console.log(result);
}

subtract('10001111', '999999'); // should return '9001112'
subtract('10051515135', '8412512'); // should return '10043102623'
subtract('12612363912306306312009881', '1284612399923200255129015');  // should return '11327751512383106056880866'