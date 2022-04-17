// algorithm ref: https://www.youtube.com/watch?v=DD-_hZwEkXY

console.log(knightMinPath([0, 7], [7, 0])); // should print 6
console.log(knightMinPath([3, 3], [1, 4])); // should print 1
console.log(knightMinPath([3, 3], [0, 6])); // should print 2

function knightMinPath(start, end) {
    let chess = new Array(8).fill(0).map(r => new Array(8).fill(0));
    queue = [start];
    return knightHelper(queue, end, chess)
}

function knightHelper(queue, end, chess) {
    let isInside = (r, c) => r > -1 && r < 8 && c > -1 && c < 8;

    // x and y direction, where a knight can move
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

    while (queue.length > 0) {
        const [r, c] = queue.pop();
        if (r == end[0] && c == end[1]) {
            return chess[r][c];
        }

        for (let m = 0; m < dx.length; m++) {
            let r2 = dx[m] + r;
            let c2 = dy[m] + c;
            if (isInside(r2, c2) && chess[r2][c2] === 0) {
                queue.unshift([r2, c2])
                chess[r2][c2] = chess[r][c] + 1;
            }
        }
    }
    return -1;
}

