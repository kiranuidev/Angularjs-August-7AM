
function registerUser(user){
    console.log("i am calling db");
    setTimeout(function(user){
        console.log("user created"+user);
    },3000);
     setTimeout(function(){
        console.log("user created after 3 secs");
    },3000);
    console.log("i don't know")
}


/*function dbCall(){
    console.log("user created");
}*/

registerUser("kiran");