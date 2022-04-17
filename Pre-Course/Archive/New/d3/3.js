function groceryPrice(groceries) {
    // write your code here.
    let total = 0;
    for (const [food, price] of Object.entries(groceries)) {
        total += price;
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