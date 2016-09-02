function getTickets(mode){
   var message ;
    if(mode=="flight"){
        message="Happy Bonvoyage";
    }
    else{
        message="Wish you a happy journey";
    }
    return{
        
       printTicketsWithDiscount:function(source,destination){
            var welcomeNote="Dear customer your "+mode+"from: ";
        console.log(welcomeNote+source+" to "+destination+ " is confirmed");
        console.log(message);  
        if(mode=="flight"){
            console.log("You got a discount of 10%");
        }
       },    
       printTickets:function (source,destination){
        var welcomeNote="Dear customer your "+mode+"from: ";
        console.log(welcomeNote+source+" to "+destination+ " is confirmed");
        console.log(message);   
    }
   };
}


var bookAFlight = getTickets("flight");
var bookATrain = getTickets("train");
var bookACruise = getTickets("cruise");

bookACruise.printTickets("chennai", "Andaman");
bookAFlight.printTicketsWithDiscount("Hyderabad","Delhi");




