let student1 = {
    name: 'Anil',
    score: 99
}

let student2 = {
    name: 'Michael',
    score: 84
}

let student3 = {
    name: 'Kimiko',
    score: 95
}

let student4 = {
    name: 'Raj',
    score: 67
}

let students = [student1, student2, student3, student4];
console.log(studentsAboveCutoff(students, 67));
function studentsAboveCutoff(students, cutOff) {
    return students.filter(v => v.score > cutOff);
}