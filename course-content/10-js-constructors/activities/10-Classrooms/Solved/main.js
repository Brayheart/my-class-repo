// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Jerome", 506);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Katia", "Coding", 3.91);
firstClass.addStudent("Ricky", "Coding", 3.87);
firstClass.addStudent("Shelby", "Coding", 3.83);
firstClass.addStudent("Yimeng", "Coding", 3.75);



console.log(firstClass);
