let loanAmount = '$125000'
let loanPayments = ['$1200', '$1400', '$1800', '$3200']

let pendingAmt = loanPayments.reduce((acc, cur) => {
    return acc - cur.substring(1);
}, loanAmount.substring(1))

console.log(
    pendingAmt
)