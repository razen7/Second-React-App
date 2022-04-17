// It is always tough for us to get the last element from the array and we know that is a very commong thing that we do with arrays. So we are planning to add a method to last to arrays so that all the array objects can use this to get their last values.

// write the code to add last method to arrays.

Array.prototype.last = function () {
    return this[this.length - 1];
};

let sampleArr = [1, 2, 3];
sampleArr = [];

console.log(sampleArr.last())