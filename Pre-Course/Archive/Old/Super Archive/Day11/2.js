// Given a users array containing details of various user, use find and findIndex method to return the index and details of the user for the given id.

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
];

let id = 3;

console.log(
    users.find((value) => value.id === id)
    ,
    users.findIndex(value => value.id === id)
)