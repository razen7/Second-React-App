let input = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']]
let start = 'YUL';
console.log(itinerary(input, start));
// ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']

input = [['SFO', 'COM'], ['COM', 'YYZ']];
start = 'COM';
console.log(itinerary(input, start));
// undefined

input = [['A', 'E'], ['B', 'C'], ['C', 'D'], ['D', 'A'], ['A', 'B']];
start = 'A';
console.log(itinerary(input, start));
//  [ 'A', 'B', 'C', 'D', 'A', 'E' ]


function itinerary(arr, start) {
    // Gather
    for (let p = 0; p < arr.length; p++) {
        let choice = arr[p][0]; // pick

        // if its tasty
        if (choice === start) {
            // try cooking
            let itinerary = arr.filter((v, idx) => idx === p).flat();
            let dish = cook(arr, p, itinerary); // explore

            if (dish && dish.length - 1 === arr.length) {
                return dish; // select
            } else {
                // unpick
            }
        }
    }
    return undefined;
}

function cook(arr, p, itinerary) {
    let arrCopy = arr.map(v => {
        return v.map(v => v);
    })

    let from = arrCopy[p][1];
    arrCopy.splice(p, 1);
    let tmp = true;
    while (arrCopy.length !== 0 && tmp === true) {
        tmp = arrCopy.some((v, idx) => {
            if (v[0] === from) {
                p = idx;
                from = v[1];
                itinerary.push(from);
                return true;
            }
        })
        arrCopy.splice(p, 1);
    }
    return itinerary;
}