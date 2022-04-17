function cuttingGrass(heights, ...cuts) {
    let status = [];
    let isDone = false;
    for (let cutsIdx = 0; cutsIdx < cuts.length; cutsIdx++) {
        const num = cuts[cutsIdx];
        heights = heights.map(v => {
            v = v - num;
            if (v <= 0) isDone = true;
            return v;
        })

        if (isDone) {
            status.push('Done')
        } else {
            status.push(heights);
        }
    }
    return status
}
console.log(
    cuttingGrass([1, 0, 1, 1], 100)
)