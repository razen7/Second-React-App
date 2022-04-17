let size = 11;
let usersArr = [[10, 'Raj'], [20, 'John'], [8, 'Russel'], [12, 'Peter'], [35, 'Cook'], [9, 'James']];
let hashTable = new Array(11);

function getHash(value) {
    return value % size;
}
function insertNewData(value) {
    let hash = getHash(value[0]);
    hashTable[hash] = value;
}