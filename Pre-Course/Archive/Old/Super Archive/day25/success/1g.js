function decodeHelper(str, pointer = 0) {
    /* ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ BASE OVERFLOW CASE ─╤╦︻3=(◣_◢)=Ƹ︻╦╤─ */
    if (pointer >= str.length) {
        return 0;
    }

    /* (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ BASE CASE (づ｡◕‿‿◕｡)づ (づ｡◕‿‿◕｡)づ */
    // Digit is Zero
    if (str[pointer] === '0') return 0;

    // Last Digit
    if (pointer === str.length - 1) return 1;

    let digits = str[pointer] + str[pointer + 1];
    // Last 2 digits
    if (pointer === str.length - 2) {
        if (digits.includes('0'))
            return 1;
        else if (digits > 10 && digits < 27)
            return 2;
    }

    // ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ RECURSIVE CASE ƪ(˘⌣˘)┐ ƪ(˘⌣˘)ʃ ┌(˘⌣˘)ʃ
    let choice1 = decodeHelper(str, pointer + 1);
    let choice2 = 0;
    if (digits > 9 && digits < 27)
        choice2 = decodeHelper(str, pointer + 2);
    return choice1 + choice2;
}
let s4 = "122195"; // Output: 10 
decode(s4)

// let s3 = "112515"; // Output: 10 
// decode(s3)

// let s = "2261"; // Output: 3 
// decode(s)

// let s2 = "12"; // Output: 2
// decode(s2)

function decode(input) {
    console.log(
        decodeHelper(input)
    );
}