function groceryPrice(item) {
    // write your code here.
    let total = 0;
    for (const key in item) {
        if (Object.hasOwnProperty.call(item, key)) {
            total += item[key];
        }
    }
    return total;          
}

let groceries = {
    banana: 12,
    Milk: 10.5,
    Bread: 8,
    Egg: 2,
};

let price = groceryPrice(groceries);
console.log(`Total price for grocery item is ${price}`)