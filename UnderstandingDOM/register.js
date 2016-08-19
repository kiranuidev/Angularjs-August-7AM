
var inputElements =document.getElementsByTagName("input");

var labels = document.getElementsByClassName("label-control");

var age = document.getElementById("txtAge");

var password=document.getElementById("txtPassword");

password.value="kiran";
password.id="newId";
password.type="text"

age.value=30;

console.log(password);



console.log(inputElements);
console.log(labels);
console.log(age);