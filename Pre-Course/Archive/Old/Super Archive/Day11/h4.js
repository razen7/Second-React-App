// Exercise 4
function total(arr) {
    return arr.reduce((accu, curVal) => {
        accu += curVal.price*curVal.qty;
        return accu
    }, 0)
}

let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];
console.log(
total(shoppingCart)// should return 750.96
)