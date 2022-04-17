let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
// let countVoters = voters.reduce((accu, cur) => cur.voted === true ? ++accu : accu, 0)
// console.log(countVoters); // should return 7

// potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted.

let voterStats = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
}

voters.reduce((voterStats, voter) => {
    let age = voter.age;
    if (age >= 18 && age <= 25) {
        ++voterStats.numYoungPeople
        if (voter.voted) ++voterStats.numYoungVotes;
    } else if (age > 25 && age < 36) {
        ++voterStats.numMidPeople
        if (voter.voted) ++voterStats.numMidVotes;
    } else if (age > 35 && age < 56) {
        ++voterStats.numOldPeople
        if (voter.voted) ++voterStats.numOldVotes;
    }
    return voterStats;
}, voterStats)

console.log(voterStats);