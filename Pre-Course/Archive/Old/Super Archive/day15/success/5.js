/*
In previous inclass challenge we implemented Rectangle class that helped us represent a colorful rectangle.
Now we would like to add some more properties and would like to also create a new class to represent circles as well.
For rectanlge
----------
properties: topLeftx, topLeftY, width, height, fillColor, borderColor
methods: getArea, getPerimeter, getDescription
For circle
---------
properties: centerX, centerY, radius, fillColor, borderColor
methods: getArea, getPerimeter, getDescription
*/

//Note: In each of the methods above the first line should be a console.log() statement printing what operation is being performed. ie. for getArea method the first line should be  `console.log('Calculating the area....');`

class Rectangle extends Shape{
    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        // add the properties here
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        super.getPerimeter();
        // code to calculate the perimeter of rectangle
        return (this.width * this.height) * 2;
    }

    getArea() {
        super.getArea();
        // code to calculate the area of rectangle
        return this.width * this.height;
    }

    getDescription() {
        super.getDescription();
        // if the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        console.log(`Its a ${this.color}-filled ${this.borderColor} bordered rectangle`)
    }
}
class Circle {
    constructor(centerX, centerY, radius, fillColor, borderColor) {
        // add the properties here
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.color = fillColor;
        this.borderColor = borderColor;
    }

    getArea() {
        console.log('Calculating the area...');
        // code to calculate the area of rectangle
        return 3.14 * this.radius * this.radius;
    }

    getPerimeter() {
        console.log('Calculating the perimeter...');
        // code to calculate the perimeter of rectangle
        return 2 * 3.14 * this.radius;
    }


    getDescription() {
        console.log('Printing the description...');
        // if the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        console.log(`Its a ${this.color}-filled ${this.borderColor} bordered circle`)
    }
}

let rectangle1 = new Rectangle(10, 10, 100, 20, 'Red', 'Black');
let circle1 = new Circle(10, 10, 2, 'Red', 'Green');

console.log(circle1.getArea())