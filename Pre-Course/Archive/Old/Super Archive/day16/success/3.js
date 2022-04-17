// Write a class Student which has 3 properties name, age and grade. You should make sure that all 3 parameters are passed when an object is created and age should be negative. If an invalid age (< 0) is passed then you should print Invalid age provided, setting default age to 10, and set age property to have value 10.

class Student {
    // Your code here
    constructor(name, age, grade) {
        this.name = name;
        this.grade = grade;
        if (age >= 0) {
            this.age = age;
        } else {
            console.log('Invalid age provided')
            this.age = 10;
        }
    }
}

let raz=new Student('raz',-1,'A');