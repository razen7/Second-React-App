//you are given several student's score for two different semesters.

let students = [
  { name: 'Vivek', scores: [[70, 60], [90, 100], [60, 80], [91, 59]] },
  { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] },
  { name: 'Arnav', scores: [[70, 40], [60, 60], [90, 100], [90, 90]] },
  { name: 'Pawan', scores: [[80, 80], [90, 60], [90, 40], [70, 80]] }
];

// calculate the grade for the student for the given semester and add it as a property like 'semester1_grade' or `semester2_grade` based on the given semester value.
function getSemGrade(students, studentName, semester) {
  let scoresArr = [];
  let idx;
  for (const key in students) {
    let val = students[key];
    if (val.name === studentName) {
      scoresArr = val.scores;
      idx = key;
    }
  }
  let sum = 0;
  for (let i = 0; i < scoresArr.length; i++) {
    sum += scoresArr[i][semester - 1];
  }
  students[idx]['semester' + semester + '_grade'] = calcGrade(sum / scoresArr.length);
  // console.log(students);
  return students;
}

function calcGrade(avg) {
  if (avg > 90) {
    return 'Grade A'
  } else if (avg > 80) {
    return 'Grade B'
  } else if (avg > 70) {
    return 'Grade C'
  } else if (avg > 60) {
    return 'Grade D'
  } else if (avg > 50) {
    return 'Grade E'
  } else {
    return 'Grade F'
  }
}
/*
Grade A - greater then 90
Grade B - greater than 80
Grade C - greater than 70
Grade D - greater than 60
Grade E - greater than 50
Grade F - otherwise
*/

let semester = 2, studentName = 'Akshat';
getSemGrade(students, studentName, semester);

/*
For students Akshat, since the semester value is 2 the scores will be 100, 80, 100 and 60 so adding them gives 340. So the average value will be 85. And Hence the grade is `B`. So we will add the property `semeseter2_grade` with the value `B`.
*/