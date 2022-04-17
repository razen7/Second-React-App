let books = [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], shelf_width = 3;
console.log(getShelfHeight(books, shelf_width)); // Output: 8
// Explanation: The sum of the heights of the 3 shelves are 3 + 3 + 2 = 8.

function getShelfHeight(books, shelf_width) {
    let curWidth = 0, curHeight = 0, height = 0;
    for (const [w, h] of books) {
        if (curWidth + w > shelf_width) {
            curWidth = 0;
            height += curHeight;
            curHeight = 0;
        }
        curWidth += w;
        if (h > curHeight) {
            curHeight = h;
        }
    }
    return height + curHeight;
}