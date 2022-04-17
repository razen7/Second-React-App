let students = [
    { name: 'Raj', age: 18, location: 'Delhi', isMarvelFan: true },
    { name: 'Kumar', age: 25, location: 'Mumbai', isMarvelFan: true },
    { name: 'John', age: 21, location: 'Kolkata', isMarvelFan: false },
    { name: 'Tom', age: 29, location: 'Chennai', isMarvelFan: true },
    { name: 'Brad', age: 23, location: 'Mumbai', isMarvelFan: false },
    { name: 'King', age: 31, location: 'Mumbai', isMarvelFan: false }
];

// call the filterStudents function to get a list of students aged above 23.
let above23 = ({ age }) => age > 23
// Call the filterStudents function to get a list of students who are from Mumbai.
let fromMumbai = ({ location }) => location === `Mumbai`
// Call the filterStudents function to get a list of students who are marvel fans.
let marvelFans = ({ isMarvelFan }) => isMarvelFan
// Call the filterStudents function to get a list of students whose names starts with A.
let startsWithA = ({ name }) => name.startsWith('A')
// filterStudents(students, startsWithA)
console.log(
students.filter(above23),
students.filter(fromMumbai),
students.filter(marvelFans),
students.filter(startsWithA),
)