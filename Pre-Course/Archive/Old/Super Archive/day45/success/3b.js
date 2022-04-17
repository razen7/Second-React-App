let input = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']]
let start = 'YUL';
console.log(itinerary(input, start));

function itinerary(input, start) {
    return helper(input, start);
}

function helper(input, healthy) {
    for (let p = 0; p < input.length; p++) {
        let fish = input[p][0];

        // if its tasty
        if (fish === healthy) {
            // try cooking
            let dish = cook(input, p, fish);

            if (dish.length === input.length) {
                return dish;
            }
        }
    }
    return undefined;

}

function cook(arr, p, from) {
    let itinerary = [];

    let arrCopy = arr.map(v => {
        return v.map(v => v);
    })
    itinerary.push(from);
    arrCopy.splice(p, 1);
    let tmp = true;
    while (arrCopy.length !== 0 && tmp === true) {
        // console.log('Hi! Hi! Hi!');
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
    console.log(itinerary);
    return itinerary;
}