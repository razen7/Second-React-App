// Ref: https://betterprogramming.pub/implementing-a-stack-in-javascript-73d1aa0483c1 

class Stack {
    constructor() {
        this.collection = [];
        this.top = -1;
        this.length = this.collection.length;
    }

    // a push method that pushes an element to the top of the stack
    push(element) {
        this.collection[++this.top] = element;
    }

    // a pop method that removes and returns the element on the top of the stack
    pop() {
        if (this.length >= 0) --this.top;
        return this.collection.pop(); // removes the last element
    }

    // a peek method that returns the top element of the stack
    peek() {
        return this.collection[this.top];
    }

    // an isEmpty method that checks if the stack is empty,
    isEmpty() {
        return this.top < 0;
    }

    // a clear method that removes all elements from the stack.
    clear() {
        this.collection.length = 0;
        this.top = -1;
        this.length = this.collection.length;
    }

    // Normally stacks don't have print method, but we've added a print helper method that console logs the collection.
    print() {
        
        let top = this.top;
        while (top >= 0) { // print upto 0th index
            console.log(this.collection[top]);
            top--;
        }
    }
}
let myStack = new Stack();
// console.log(myStack.isEmpty());
//expect(myStack.isEmpty()).toBe(true);

myStack.push(3);
myStack.push(111);
myStack.push(35);
myStack.push(12);
myStack.push(6);
// console.log(myStack.isEmpty());
// expect(myStack.isEmpty()).toBe(false);

console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.peek());
// expect(myStack.peek()).toBe(35);

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());
myStack.push(9);
myStack.push(17);
console.log(myStack.isEmpty());

myStack.clear();
console.log(myStack.isEmpty());
