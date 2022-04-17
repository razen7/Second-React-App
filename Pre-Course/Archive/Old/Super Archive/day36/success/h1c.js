// algorithm ref: https://www.youtube.com/watch?v=DD-_hZwEkXY

console.log(knightMinPath([0, 7], [7, 0])); // should print 6

function knightMinPath(start, end) {
    let chess = new Array(8).fill(0).map(r => new Array(8).fill(0));
    // console.table(chess)
    queue = [start];
    return knightHelper(queue, end, chess)
}

function knightHelper(queue, end, chess) {
    let isInside = (r, c) => r > -1 && r < 8 && c > -1 && c < 8;

    // x and y direction, where a knight can move
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    let move = 0;
    while (queue.length > 0) {
        const [r, c] = queue.pop();
        // console.log(end)
        if (r == end[0] && c == end[1]) {
            // console.table(chess)
            return chess[r][c];
        }

        let flag = false;
        for (let m = 0; m < dx.length; m++) {
            // const element = dx[m];
            let r2 = dx[m] + r;
            let c2 = dy[m] + c;
            // console.log(r2,c2)
            if (isInside(r2, c2) && chess[r2][c2] === 0) {
                if (flag === false) {
                    flag = true;
                    ++move;
                }
                queue.unshift([r2, c2])
                // console.log(move);
                chess[r2][c2] = chess[r][c] + 1;
            }
        }
    }
    return -1;
}