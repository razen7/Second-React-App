dashed("Edabit"); // should return "-E-d-a-b-i-t"

dashed("Carpe Diem"); // should return "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!"); // should return "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"

// Challenge 1
function dashed(word) {
    let vowels = 'aeiouAEIOU';
    let wordArr = word.split('');
    for (const k in wordArr) {
        const v = wordArr[k];
        if (vowels.includes(v))
            wordArr[k] = '-' + v + '-';
    }
    word = wordArr.join('');
    return word;
}

// Challenge 2
function expensiveOrders(orders, cost) {
    let expensive = {};
    for (const key in orders) {
        const v = orders[key];
        if (v >= cost) {
            expensive[key] = v;
        }
    }
    return expensive;
}
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000); // should return { "a": 3000, "c": 1050 }

// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000); // should return { "Gucci Fur": 24600 }

// expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40); // should return {}