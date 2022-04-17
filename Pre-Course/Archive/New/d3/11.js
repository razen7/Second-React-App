let sayHello = function(name) {
    console.log('Hello ' + name);
};

let sayGoodbye = function(name) {
    console.log('Goodbye ' + name);
};

let saySomething = sayGoodbye;

let sayings = [sayHello, sayGoodbye, saySomething];

for (const func of sayings) {
    func('john')
}