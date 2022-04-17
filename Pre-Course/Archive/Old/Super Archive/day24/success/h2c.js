let files = {
    'New folder': {
        'New folder': {}
    },
    'New folder (1)': {
        'New folder': {
            'funnyjoke.txt': 'lol i pranked you!!!'
        }
    },
    'New folder (2)': {}
};

console.log(
    search(files)
); // should return "New folder (1)/New folder/funnyjoke.txt"

function searchHelper(filesObj, path = '') {
    //base case
    if (filesObj == undefined) { // when no file is there inside directory
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
    return searchHelper(filesObj[curFolder], path);
}

function search(foldersObj) {
    for (const [key, folder] of Object.entries(foldersObj)) {
        let path = searchHelper(folder, pathForHelper = key);
        if (path !== undefined)
            return path;
    }
}
