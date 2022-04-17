function missingLetter(str) { // O n
    for (let i = 1; i < str.length; i++) {
        const [utf16Cur, utf16Prev] = [str.charCodeAt(i), str.charCodeAt(i - 1)];
        if (utf16Cur - 1 != utf16Prev) {
            return String.fromCharCode(utf16Cur - 1)
        }
    }
    return "No Missing Letter";
}
console.log(
    missingLetter("abdefg"),// ➞ "c"

    missingLetter("mnopqs"),// ➞ "r"

    missingLetter("tuvxyz"),// ➞ "w"

    missingLetter("ghijklmno"),// ➞ "No Missing Letter"
)