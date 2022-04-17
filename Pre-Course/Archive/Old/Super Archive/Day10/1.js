// @ Your position.
// - A blank spot.
// &, #, $ Collectible items.
// From your starting point in the grid, you have to trace a route placing a x in every spot visited, following a sequence of letters with the directions to take:

function collectedItems(grid, route) {
    // Ref https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    gridCopy = JSON.parse(JSON.stringify(grid));
    //find loc
    let row, col;
    gridCopy.forEach((val, rowIdx) => {
        if (val.indexOf('@') > 0) {
            row = rowIdx;
            col = val.indexOf('@');
        }
    });
    //start travelling
    let mapGuide = {
        l: [0, -1],
        r: [0, 1],
        u: [-1, 0],
        d: [1, 0]
    }
    // console.log(row, col);
    // mapGuide['l']
    // console.log(row, col);

    let treasureBox = '';
    let treasures = ['&', '#', '$'];
    for (let index = 0; index < route.length; index++) {
        const step = route[index];
        row += mapGuide[step][0]
        col += mapGuide[step][1]
        // console.log(row,col)
        let currentLoc = gridCopy[row][col];
        if (treasures.includes(currentLoc)) {
            treasureBox += currentLoc;
        }
        // x in every spot visited
        gridCopy[row][col] = 'x';
    }
    return gridCopy;
}
let route = "luur"

let grid = [
    ["-", "-", "-", "#"],
    ["-", "-", "$", "-"],
    ["-", "-", "-", "@"],
    ["-", "&", "-", "-"],
]

let result = collectedItems(grid, route) //"$#"
console.log(result)