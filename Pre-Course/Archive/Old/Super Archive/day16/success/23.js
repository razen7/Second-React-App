class Canvas {
    constructor() {
        this.shapesList = [];
    }
    addShape() {
        console.log('Adding the shapesss...');
        for (var i = 0; i < arguments.length; ++i)
            this.shapesList.push(arguments[i])
    }
    getDescriptionAtPoint(x, y) {
        for (let idx = this.shapesList.length - 1; idx >= 0; idx--) {
            const curShape = this.shapesList[idx];
            let statusMsg = curShape.getDescription(x, y);
            if (statusMsg !== false) {
                console.log(`Mouse pointer is over a ${statusMsg}`)
                return;
            }
        }
        console.log(`Mouse pointer is not over any shape`);
    }
}


class Shape {
    constructor(fillColor, borderColor) {
        this.color = fillColor;
        this.borderColor = borderColor;
    }
    getArea() {
        console.log('Calculating the area...');
    }
    getPerimeter() {
        console.log('Calculating the perimeter...');
    }
    getDescription() {
        console.log('Printing the description...');
    }
}

class Circle extends Shape {
    constructor(centerX, centerY, radius, fillColor, borderColor) {
        // add the properties here
        super(fillColor, borderColor);
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    pointIsInside(x2, y2) {
        console.log('Evaluating if point is inside...');
        let [x1, y1] = [this.centerX, this.centerY];
        let distance = Math.sqrt(
            Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
        );
        // console.log(this.radius >= distance);
        return this.radius >= distance
    }

    getArea() {
        super.getArea();
        // code to calculate the area of rectangle
        return 3.14 * this.radius * this.radius;
    }

    getCircumference() {
        super.getPerimeter();
        // code to calculate the perimeter of rectangle
        return 2 * 3.14 * this.radius;
    }

    getDescription(x2, y2) {
        // super.getDescription();
        let isInside = this.pointIsInside(x2, y2);

        if (isInside) {
            return `${this.color} circle`
        } else {
            return false;
        }
    }
}
class Rectangle extends Shape {
    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        // add the properties here
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
    }
    pointIsInside(x2, y2) {
        console.log('Evaluating if point is inside...');
        let [x1, y1] = [this.topLeftX, this.topLeftY];

        let verticalMeasure = false; //if (y2 < y1)   // point at left
        if (y2 >= y1) { // point at right
            verticalMeasure = y2 <= (y1 + this.height)
        }

        let horizontalMeasure = false // if (x2 < x1) {  // point at Up
        if (x2 >= x1) {    // point at Down
            horizontalMeasure = x2 <= (x1 + this.width)
        }

        // console.log(verticalMeasure && horizontalMeasure)
        return verticalMeasure && horizontalMeasure;
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

    getDescription(x2, y2) {
        // super.getDescription();
        let isInside = this.pointIsInside(x2, y2);

        if (isInside) {
            return `${this.color} rectangle`
        } else {
            return false;
        }
    }
}
// 21
let circle1 = new Circle(10, 10, 2, 'Red', 'Green');
let rectangle1 = new Rectangle(100, 100, 2, 2, 'Red', 'Green');
let rectangle2 = new Rectangle(15, 17, 6, 4, 'Yellow', 'Black');
let canvas1 = new Canvas();
canvas1.addShape(circle1, rectangle1, rectangle2);
// console.log(canvas1)


let circle2 = new Circle(4, 4, 6, 'Gold', 'yellow');
let circle3 = new Circle(3, 3, 2, 'brown', 'yellow');
{// 22
    // rectangle1.pointIsInside(11, 11)
    // rectangle1.pointIsInside(12, 10)
    // circle2.pointIsInside(1,1)
    // circle3.pointIsInside(0,1)
}

//23
canvas1.addShape(circle2, circle3);
canvas1.getDescriptionAtPoint(100, 100)
// console.log(canvas1)