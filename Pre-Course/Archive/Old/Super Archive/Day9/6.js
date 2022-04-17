// Given an an array containing various users detail, return a new array containing the names of users.

let student1 = {
    name: 'Aditya',
    score: 95,
    grade: 7
};

let student2 = {
    name: 'Nikhil',
    score: 75,
    grade: 8
};

let student3 = {
    name: 'Danny',
    score: 84,
    grade: 7
};

let student4 = {
    name: 'Kimiko',
    score: 64,
    grade: 8
};

let students = [student1, student2, student3, student4];

// write your code here
console.log(students.map(v => v.name))