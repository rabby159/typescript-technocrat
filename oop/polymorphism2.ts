{
    //Polymorphism Problem 2

    class Shape{
        getArea() : number{
            return 0;
        }
    };

    class Circle extends Shape{
        radius : number;

        constructor(radius : number){
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    };

    class Rectangle extends Shape{
        height : number;
        width : number;

        constructor(height : number, width : number){
            super();
            this.height = height;
            this.width = width;
        };

        getArea(): number {
            return this.height * this.width;
        }
    };

    const getAreaValue = (param : Shape) => {
        console.log(param.getArea());
    }

    const shape = new Shape();
    const circle = new Circle(10);
    const rectangle = new Rectangle(15, 20);

    getAreaValue(shape);
    getAreaValue(circle);
    getAreaValue(rectangle);
    


}