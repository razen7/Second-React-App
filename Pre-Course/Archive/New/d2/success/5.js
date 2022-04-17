// https://gist.github.com/McLarenCollege/b1ef6af0ab8572cd20247e179e690a5e

function addGrade(student = {}, semester) {
    let sum = student['scores'].reduce((acc, cur) => {
        return acc + cur[semester - 1]
    }, 0);
    let avg = (sum / student['scores'].length);

    let grade;
    if (avg > 90) {
        grade = 'A';
    } else if (avg > 80) {
        grade = 'B';
    } else if (avg > 70) {
        grade = 'C';
    } else if (avg > 60) {
        grade = 'D';
    } else if (avg > 50) {
        grade = 'E';
    } else
        grade = 'F';

    if (semester === 2) {
        student['semeseter2_grade'] = grade;
    } else if (semester === 1) {
        student['semeseter1_grade'] = grade;
    }
}

let student1 = { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] };

addGrade(student1, 2); // since the semester value is 2 the scores will be 100, 80, 100 and 60 so adding them gives 340. 
// So the average value will be 85. And Hence the grade is `B`. So we will add the property `semeseter2_grade` with the value `B`.

// console.log(student1); // should print{ name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]], semeseter2_grade: 'B' };

let students = [
    { name: 'Vivek', scores: [[70, 60], [90, 100], [60, 80], [91, 59]] },
    { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] },
    { name: 'Arnav', scores: [[70, 40], [60, 60], [90, 100], [90, 90]] },
    { name: 'Pawan', scores: [[80, 80], [90, 60], [90, 40], [70, 80]] }
];

function addGrades(students, sem) {
    for (const student of students) {
        addGrade(student,sem)
    }
    console.log(students);
}
addGrades(students, 1); // should add `semester1_grade` property to each student