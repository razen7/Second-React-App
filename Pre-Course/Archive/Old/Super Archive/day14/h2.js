// Exercise 2
function daysUntil2022(date) {
    let [month, day, year] = date.split('/').map(v => Number(v));

    let monthObj = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    }
    let curMonthDays = monthObj[month] - day + 1;
    let remainingMthDays = 0;

    let tempNxtMth = month;
    while (++tempNxtMth <= 12) {
        remainingMthDays += monthObj[tempNxtMth];
    }
    return curMonthDays + remainingMthDays + ' days'
}
function daysUntil2021(date) {
    return daysUntil2022(date);
}

console.log(
    daysUntil2021("12/29/2020"),// ➞ should return "3 days"

    // daysUntil2022("1/1/2021"),// ➞ should return "365 days"

    // daysUntil2022("2/28/2021"),// ➞ should return "307 days"
)