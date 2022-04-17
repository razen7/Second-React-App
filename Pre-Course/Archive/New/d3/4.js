console.log(
    objectToArray({
        D: 1,
        B: 2,
        C: 3
    }),
    objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
    }) // should return [["likes", 2], ["dislikes", 3], ["followers", 10]]
); // should return [["D", 1], ["B", 2], ["C", 3]]



function objectToArray(obj) {
    let result = [];
    for (const key in obj) {
        const element = obj[key];
        result.push(key, element)
    }
    return result;
}