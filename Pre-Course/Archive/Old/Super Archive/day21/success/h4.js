class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection.join(" <- "));
    }

    // an enqueue method that pushes an element to the tail of the queue
    enqueue(element) {
        // adding element to the queue
        this.collection.push(element);
    }

    // a dequeue method that removes and returns the front element
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.collection.shift();
    }

    // a front method that lets us see the front element
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.collection[0];
    }

    // a size method that shows the length
    size() {
        return this.collection.length();
    }

    // an isEmpty method to check if the queue is empty.
    isEmpty() {
        return this.size() === 0;
    }
}