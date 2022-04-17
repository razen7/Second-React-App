// Implement a `priceCalculator` function which takes in a boolean `isChild` and a string `dayOfWeek`. 
// If it is a Sunday then price of ticket would be 80 else price would be 50
// if it is a child then the price would be halved
// Note: Any person below age 12 is considered as child.

function priceCalculator(isChild, dayOfWeek) {
    let price = dayOfWeek === 'Sunday' ? 80 : 50;
    return isChild ? price / 2 : price;
}


// Q.2 calculate ticket price this person will have to pay on Sunday.
let person = {
    name: 'Sujan',
    age: 22
};
console.log(priceCalculator(person.age < 12, 'Sunday'));