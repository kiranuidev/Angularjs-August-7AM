//Basics of Javascript.
/*
  Data types.
*/

var numberOfStudents = 60; //Integer Data type

var sessionName = "Basic Javascript"; //String Data type.

var isTheSessionInteresting = true; //boolean data type.

var topicsToBeCovered = ["javascript", 
                         "Advanced JavaScript",
                         "Jquery", 
                         "boostrap", 
                         "Angularjs" ];//string array.
var trainer ={};//Object literal

trainer.firstName="Kiran";
trainer.lastName ="Paturi";
trainer.expertise= ["Nodejs","Angularjs",".Net"];


console.log("number of Students"+ numberOfStudents);

console.log(trainer.firstName);

console.log(topicsToBeCovered);
//anonymous function
var printDetails = function(){
    console.log("function print details");
};

//named function
function printData (){
     console.log("function print data");
}


//printData();
//printDetails();


//document.write("number of stduents");
/*
 int
 float
 decimal
 string
 bool
 char
 array
 Object
 function
*/