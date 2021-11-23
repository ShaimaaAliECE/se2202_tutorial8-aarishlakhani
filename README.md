# Tutorial8

Use the class notation to create a class that represents a 3-dimensional point according to the following requirements:
-	The three variables representing the point coordinates should be initialized and added to the new object through the constructor function.
-	Create an object-level method called ‘distanceFrom’ that receives another point object and returns the Euclidean distance between the current object and the one received. (should be added as a prototype method)
-	Create a class-level method called ‘distance’ (i.e., accessible through the class name Point.distance)  that would receive two objects and return the Euclidean distance between them

 (hint: you can use Math.sqrt and Math.pow to calculate the distances https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math )

-	Allow access to the calculated distance from the origin (0,0,0) through a getter method
