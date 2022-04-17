objectToArray({
    D: 1,
    B: 2,
    C: 3
}); // should return [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}); // should return [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
    return Object.entries(obj);
}