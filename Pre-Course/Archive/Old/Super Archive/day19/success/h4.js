function isPotentialFriend(person1, person2) {
    //  have exact interests
    if (person1.join('') == person2.join('')) return true;

    // at least two things in common 
    let commonObj = {};
    let [bigArr, smallArr] = person1.length >= person2.length ? [person1, person2] : [person2, person1];
    for (let idx = 0; idx < smallArr.length; idx++) {
        const interestS = smallArr[idx];
        const interestB = bigArr[idx];

        commonObj[interestS] = commonObj[interestS] ? ++commonObj[interestS] : 1;
        commonObj[interestB] = commonObj[interestB] ? ++commonObj[interestB] : 1;

        if (commonObj[interestS] > 1 || commonObj[interestB] > 1)
            return true;
    }
    return false;
}
console.log(
    isPotentialFriend(
        ["sports", "music", "chess"],
        ["coding", "music", "netflix", "chess"]
    ) // should return true
    ,
    isPotentialFriend(
        ["cycling", "technology", "drawing"],
        ["dancing", "drawing"]
    ) // should return false
    ,
    isPotentialFriend(
        ["history"],
        ["history"]
    ) // should return true
)