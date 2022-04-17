let statement = `Hurricane Gonzalo was the second tropical cyclone, after Hurricane Fay, to directly strike the island of Bermuda in a one-week time frame in October 2014, and was the first Category 4 Atlantic hurricane since Hurricane Ophelia in 2011. At the time, it was the strongest hurricane in the Atlantic since Igor in 2010.[1] Gonzalo struck Bermuda less than a week after the surprisingly fierce Hurricane Fay; 2014 was the first season in recorded history to feature two hurricane landfalls in Bermuda. A powerful Atlantic tropical cyclone that wrought destruction in the Leeward Islands and Bermuda, Gonzalo was the seventh named storm, sixth and final hurricane and only the second major hurricane of the below-average 2014 Atlantic hurricane season.`

function getWordCount(statement='') {
    let arr = statement.toLowerCase().split(' ')
    let res = {};
    for (const word of arr) {
        if (res.hasOwnProperty(word)) res[word]++;
        else res[word] = 1;
    }
    return res;
}

let wordObj = getWordCount(statement);
console.log(wordObj);