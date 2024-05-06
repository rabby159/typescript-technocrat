{
// Polymorphism Problem 2

// Define a base class Shape
class Shape {
    // Method to calculate area, returns 0 by default
    getArea(): number {
        return 0;
    }
};

// Define a subclass Circle inheriting from Shape
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Override getArea method to calculate area of circle
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
};

// Define a subclass Rectangle inheriting from Shape
class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    };

    // Override getArea method to calculate area of rectangle
    getArea(): number {
        return this.height * this.width;
    }
};

// Function to get area value of a shape
const getAreaValue = (param: Shape) => {
    // Call getArea method of the provided Shape object
    console.log(param.getArea());
}

// Create instances of Shape, Circle, and Rectangle classes
const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(15, 20);

// Call getAreaValue function with different types of Shape objects
getAreaValue(shape); // Output: 0 (default)
getAreaValue(circle); // Output: Area of the circle
getAreaValue(rectangle); // Output: Area of the rectangle

    


}