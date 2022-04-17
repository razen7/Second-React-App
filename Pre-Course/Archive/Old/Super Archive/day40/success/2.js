let patt;

// 1. write regular expression which matches first 3 words Ana Bob Cpc but excludes last 3
let searchString1 = "Ana Bob Cpc aax bby ccz"
patt= '/[A-Z][a-z][a-z]/gi'

// 2. In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang "wazzup?". Try writing a pattern that matches only the first two spellings by using the curly brace notation.
let searchString2 = "wazzzzzup waZZZZZup wazzzup wazup"
patt= '/wazz+up/gi'

// 3. Add all the donations received 
let donations = `
AP - $250000
BM - $1250
CD - $5
EF - $120
`
let dArr = donations.match(/\d+/gm).map(n => Number(n))
let sum = dArr.reduce((acc, cur) => cur + acc)
console.log(sum);


// 4. For given search string match all words except last 'a'
let searchString4 = "	aaaabcc aabbbbc aacc a";
patt= '/a*[b-z]+/gi'



// 5. Match all phrases except `No files found.`
let searchString5 = "1 file found.	2 files found.	24 files found.	 No files found.";
patt= '/\d+ files? found\./gi'

// 6. Find all image tags in given `searchString`.
let searchString6 = '<html><img src="test">abc<img src="a"  alt=b></html>'
patt= '/<img.*?>/gi'

// 7. Write regular expression to match the animal name without `s` and their count separately 
let searchString7 = '1 monkey, 21 dogs and 13 elephants';
// \d+ [^s]*
// (\d+) (\w+[^s\W])s?
patt= '/(\d+) (\w+[^s\W])s?/gi'

// 8. Extract the name and year from the string
let searchString8 = "It is said that Peter Pan was born in 1993";
// [P][a-z]*|\d+
patt= '[P][a-z]*|\d+/gi'


// 8. Validate a hex color string
let hex1 = "#2e0000";
patt = new RegExp(/#[a-f0-9]{2}\d{4}\b/, 'g')
console.log(patt.test(hex1))
// #[a-f0-9]{2}\d{4}\b
