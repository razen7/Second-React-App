console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)); // should return { "a": 3000, "c": 1050 }

expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000); // should return { "Gucci Fur": 24600 }

expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40); // should return {}

function expensiveOrders(obj,amt) {
    let result={};
    for (const [item,price] of Object.entries(obj)) {
        if(price>amt) result[item]=price;
    }
    return result;
}