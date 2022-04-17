fizzBuzz()
function fizzBuzz() {
    let i = 1;
    while (i < 101) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0 || i % 5 === 0) {
            console.log(i % 3 === 0 ? 'Fizz' : 'Buzz');
        } else
            console.log(i);
        i++;
    }
}