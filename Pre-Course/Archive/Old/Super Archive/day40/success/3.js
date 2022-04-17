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
