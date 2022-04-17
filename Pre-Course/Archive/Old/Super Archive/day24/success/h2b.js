let files = {
    'New folder (1)': {
        'New folder': {
            'funnyjoke.txt': 'lol i pranked you!!!'
        }
    }
};


function search(filesObj, path = '') {
    // console.log(path);

    //base case
    if (filesObj == undefined) {
        return;
    }
    let foldersArr = Object.keys(filesObj);
    if (filesObj.length > 0 && typeof (filesObj) !== 'object') {
        return path;
    }

    // Recursive Case
    let curFolder = foldersArr[0];
    let slash = path ? '/' : '';
    path += slash + curFolder;
    return search(filesObj[curFolder], path);
}
console.log(
    search(files)
); // should return "New folder (1)/New folder/funnyjoke.txt"