class Point
{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    };
    /*
    Use the class notation to create a class that represents a 3-dimensional point according to the following requirements:
	The three variables representing the point coordinates should be initialized and added to the new object through the constructor function.
	Create an object-level method called ‘distanceFrom’ that receives another point object and returns the Euclidean distance between the current object and the one received. (should be added as a prototype method)
	Create a class-level method called ‘distance’ (i.e., accessible through the class name Point.distance)  that would receive two objects and return the Euclidean distance between them

    (hint: you can use Math.sqrt and Math.pow to calculate the distances https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math )

	Allow access to the calculated distance from the origin (0,0,0) through a getter method
    */
    static distance(point1, point2){
        return Math.sqrt(Math.pow((point1.x-point2.x),2) + Math.pow((point1.y-point2.y),2) + Math.pow((point1.z-point2.z),2));
    };
 
    get distanceFromOrigin(){
        return Math.sqrt(Math.pow((this.x-0),2) + Math.pow((this.y-0),2) + Math.pow((this.z-0),2));
    };
 
 };
  Point.prototype.distanceFrom = function (point){
     return Math.sqrt(Math.pow((this.x-point.x),2) + Math.pow((this.y-point.y),2) + Math.pow((this.z-point.z),2));
}

// Please don't change the lines below

let p1 = new Point(5,4,3);
let p2 = new Point(1,7,9);
let p3 = new Point (50,1,6);

console.log(p1.distanceFrom(p2));
console.log(Point.distance(p1,p2));
console.log(Point.distance(p2,p3));

console.log(p1.distanceFromOrigin);
console.log(p2.distanceFromOrigin);
console.log(p3.distanceFromOrigin);


p1.x = 20;
p2.y = 15;
p3.z = 40;

console.log(p1.distanceFromOrigin);
console.log(p2.distanceFromOrigin);
console.log(p3.distanceFromOrigin);

