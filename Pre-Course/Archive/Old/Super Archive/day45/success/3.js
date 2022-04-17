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
    let itinerary = [start];

    let arrCopy = arr.map(v => {
        return v.map(v => v);
    })

    let p;
    while (itinerary.length !== arr && arrCopy.length !== 0) {
        let dIdx;
        p = arrCopy.some((v, idx) => {
            if (v[0] === start) {
                dIdx = idx;
                start = v[1];
                itinerary.push(start);
                return true;
            }
        })

        if (p === false) return undefined;
        arrCopy.splice(dIdx, 1);
    }
    return itinerary;
}