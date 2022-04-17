function indexShuffle(str) {
    let [even, odd] = ['', ''];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (i % 2)
            even += char;
        else
            odd += char;
    }
    return odd + even;
}
console.log(
    indexShuffle("abcdefg") // should return "acegbdf"
    ,
    indexShuffle("holiday") // should return "hldyoia"
    ,
    indexShuffle("maybe") // should return "myeab"
)