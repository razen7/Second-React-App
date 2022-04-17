// Part A
// We are trying to several colorful type of rectangles, your task is to create Class that will help us to create different rectangles based on color, width and height.
// Part B
// Inside the class we also need functions to help us calculate the perimeter and area of the rectangle object.

// Part C
// We also need a getInfo() function that prints both the area and perimeter of the a rectangle on console.
class rectangles {
    constructor(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return this.getArea() * 2;
    }
    getInfo() {
        console.log(`Area = ${this.getArea()} Perimeter = ${this.getPerimeter()}`)
    }

}

let rectangle1 = new rectangles('Red', 20, 10);

rectangle1.getInfo()