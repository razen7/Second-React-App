// Exercise 1 - Given code. Please modify it to get desired output
function twins(arr) {
    if (!arr) return 0;
    else if (arr.length === 2) return 1;

    for (let party = 1; party < arr.length - 1; party++) {
        let [firstHalf, secondHalf] = [0, 0]
        for (let soul = 0; soul < party; soul++) {
            firstHalf += arr[soul];
        }
        for (let mate = party; mate < arr.length; mate++) {
            secondHalf += arr[mate];
        }
        if (firstHalf === secondHalf) return party;
    }
}

console.log(
    twins([10, 20, 30, 5, 40, 50, 40, 15]),//  ➞ 5
    // foundIndex 5 : [10+20+30+5+40]=[50+40+15]

    twins([1, 2, 3, 4, 5, 5]),//  ➞ 4
    // [1, 2, 3, 4] [5, 5]

    twins([3, 3]),//  ➞ 1
)