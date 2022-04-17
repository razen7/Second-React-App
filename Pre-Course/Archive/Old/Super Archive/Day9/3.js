let student1 = {
    name: 'Aditya',
    score: 55,
    grade: 7
}

let student2 = {
    name: 'Nikhil',
    score: 75,
    grade: 8
}

let student3 = {
    name: 'Danny',
    score: 84,
    grade: 7
}



let student4 = {
    name: 'Kimiko',
    score: 64,
    grade: 8
}

let students = [student1, student2, student3, student4]

// Part 1
// Use forEach to print student info like:
// 'Kimiko scored 64'
students.forEach(v => {
    console.log(`${v.name} scored ${v.score}`)
})

// Part 2
// Print the student info `Kimiko scored 64` and if the student scores more than 80 also add 'Well Done, studentName!'
// e.g. 'Danny scored 84. Well Done, Danny!
students.forEach(v => {
    console.log(v.score > 80 ? `${v.name} scored ${v.score}. Well Done, ${v.name}!` : `${v.name} scored ${v.score}`)
})

  // Part 3
  // Print the student info like this:
  // 1. Aditya scored 55
  // 2. Nikhil scored 75
  // 3. Danny scored 84
  // 4. Kimiko scored 64
  students.forEach((v,idx) => {
    console.log(`${idx+1}. ${v.name} scored ${v.score}`)
})