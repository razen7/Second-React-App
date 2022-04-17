function willHit(equation, position) {
    let [x, y] = [...position];
    equation = equation.replace('x', '*' + x).replace('y', y).replace('=', '==');
    return eval(equation);
}

console.log(willHit("y = 2x - 5", [0, 0]),// ➞ false

    willHit("y = -4x + 6", [1, 2]),//  ➞ true

    willHit("y = 2x + 6", [3, 2]),//  ➞ false
);

