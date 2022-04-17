// charCodeAt
function asciiCapitalize(str) {
    let strArr = str.split(' ');
    if (strArr) {
        strArr.forEach((v, idx, arr) => {
            v = v.split('');
            // console.log(v)
            v.forEach((v2, idx2, arr2) => {
                arr2[idx2] = v2.charCodeAt(0) % 2 === 0 ? v2.toUpperCase() : v2
            })
            arr[idx] = v.join('');
        });
    }
    console.log(strArr.join(' '))
}

asciiCapitalize("to be or not to be!")// ➞ "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID")// ➞ "THe LiTTLe meRmaiD"

// asciiCapitalize("Oh what a beautiful morning.")// ➞ "oH wHaT a BeauTiFuL moRNiNg."