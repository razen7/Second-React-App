console.log(restoreIpAddresses('25525511135')); // [ '255.255.11.135', '255.255.111.35' ]
console.log(restoreIpAddresses('0000')); // [ '0.0.0.0' ]
console.log(restoreIpAddresses("010010")); // [ '0.10.0.10', '0.100.1.0' ]
console.log(restoreIpAddresses("1234")); // [ '1.2.3.4' ]
console.log(restoreIpAddresses("02345")); // [ '0.2.3.45', '0.2.34.5', '0.23.4.5' ]

function restoreIpAddresses(str) {
    return helper(str)
}

function helper(str, i = 0, ipArr = [], p = 0, rArr = []) {
    if (i === 4) {
        if (ipValid(ipArr)) {
            let ip = ipArr.join('.');
            if (str.length === ipArr.join('').length) {
                if (!rArr.includes(ip)) rArr.push(ip);
            }
        }
        return;
    }

    //roll
    for (let c = 0; c < 4; c++) {
        let picked = str.substring(p, p + c + 1);
        ipArr.push(picked);

        helper(str, i + 1, ipArr, p + c + 1, rArr)

        ipArr.pop();
    }

    return rArr;
}

function ipValid(arr) {
    let test1 = arr.length === 4;
    let test2 = arr.every(v => v > -1 && v < 256 && v != '');
    let test3 = arr.every(v => {
        if (v.length > 1)
            return !v.startsWith('0')
        return true;
    });
    return test1 && test2 && test3
}
