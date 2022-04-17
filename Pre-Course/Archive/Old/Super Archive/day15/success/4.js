// 1. Create a student class which takes name and initializes a new object with name and scores. 
// 2. Implement a method to add new score into scores list.
// 3. Implement a method called averageScore which returns average score of the student.
// 4. Implement a method called printInfo which returns 'Name has average score of xx' string.

class student {
    constructor(name) {
        this.name = name;
        this.scores = [];
    }
    addNewScore(score) {
        this.scores.push(score)
    }
    averageScore() {
        return this.scores.reduce((accu, cur) => accu + cur)
    }
    printInfo() {
        return `${this.name} has average score of ${this.averageScore()}`;
    }
}
let raz = new student('raz');
raz.addNewScore(33)
raz.addNewScore(93)

console.log(
    raz.printInfo()
)