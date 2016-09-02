function printDetails(data){
    setTimeout(function logData(){
     console.log("i am executing after 5sec");
    },5000);
   
}
function getDetails(user){
  printDetails(user);
}

getDetails("kiran");
console.log("Hey i am done");