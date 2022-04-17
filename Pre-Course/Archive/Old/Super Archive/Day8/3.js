// You are given a rectangular matrix and you have to return a new matrix that will represent the given matrix if it is flipped along the right end.
// Note: Flipped array should not modify the origin given array.

let flipArr=(arr)=>{
    let newArr=[];
    for (const rowIdx in arr) {
        row=arr[rowIdx]
        newArr.push([])
        newRow=newArr[rowIdx]
        for (const idx in row) {
                const val = row[idx];
                newRow.unshift(val);
        }
    }
    console.log(newArr)
    return newArr;
}

flipArr( [ [1, 10, 12],
         [3, 4, 6],
         [0, 9 , 8],
       ])
// Output: [ [12, 10, 1],
//          [6, 4, 3],
//          [8, 9 , 0],
//        ]
       
// input: [ [9, 0, 12],
//          [13, 2, 1],
//        ]
// Output: [ [12, 0, 9],
//          [1, 2, 13],
//        ]