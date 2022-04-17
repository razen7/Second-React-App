// Exercise 1 - Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(votes) {
    return votes.replace(/k/gi, "*1000")
        .split(' ')
        .map(v => {
            return Number(eval(v))
        })
}
console.log(
// transformUpvotes("6.8k 13.5k");// should return [6800, 13500]

transformUpvotes("5.5k 8.9k 32")// should return [5500, 8900, 32]

// transformUpvotes("20.3k 3.8k 7.7k 992");// should return [20300, 3800, 7700, 992]
)
// Notes
// Return the upvotes as an array.