console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let result=[],count=0;
    for (const v of arr) {
        if (v!==0) {
            result.push(v);
        } else {
            count++;
        }
    }
    while (count>0) {
        result.push(0)
        count--;
    }
    return result

}