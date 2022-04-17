let files = {
    'New folder (1)': {
        'New folder': {
            'funnyjoke.txt': 'lol i pranked you!!!'
        }
    }
};

function searchHelper(filesObj, path = '') {
    //base case
    let objLength = Object.keys(files).length;
    let foldersArr = Object.keys(filesObj);
    if (objLength > 0 && typeof (filesObj) !== 'object') {
        return path;
    } else if (objLength === 0) {
        // console.log('not here');
        return undefined;
    }

    // Recursive Case
    let slash = path ? '/' : '';
    path += slash + foldersArr[0];
    return searchHelper(filesObj[foldersArr[0]], path);
}

function search(filesObj) {
    // let objLength = Object.keys(files).length;
    let foldersArr = Object.keys(filesObj);

    let pointer = 0;
    let path = undefined;
    while (path === undefined && pointer !== foldersArr.length) {
        // console.log(pointer);
        path = searchHelper(filesObj[foldersArr[pointer++]], path = foldersArr[0]);
    }
    return path;
}
console.log(
    search(files)
); // should return "New folder (1)/New folder/funnyjoke.txt"