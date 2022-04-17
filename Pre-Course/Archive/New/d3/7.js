let address = {
    street: 'Lavender Park',
    number: '21',
    postal: {
        city: 'Springfield',
        state: 'NT',
        zip: '49912'
    }
};
// Destructure city and zip
let { postal:{ city, zip } } = address;
console.log(city, zip)
