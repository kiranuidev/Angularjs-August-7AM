// functions.

/* function declaration.

function function_name(parm1,parm2){
    
}

*/

/* function calling/invoiking
function_name(1,3);
*/

//SRP

function calculator(operand, first, second) {
    var check = checkIfDataIsValid(first, second);
    if (check) {
        if (operand == "add") {
            add(first, second);
        } else if (operand == "sub") {
            sub(first, second);
        } else if (operand == "mul") {
            multiply(first, second);
        } else if (operand == "divide") {
            divide(first, second);
        } else {
            console.log("I am unaware of this function");
        }
    } else {
        console.log("please send the numbers only");
    }
   
}

function add(first, second) {
    console.log(first + second);
}

function sub(first, second) {
    console.log(first - second);
}

function divide(first, second) {
    if (second == 0) {
        console.log("Invalid operation");
    } else {
        console.log(first / second);
    }
}

function multiply(first, second) {
    console.log(first * second);
}

function checkIfDataIsValid(first, second) {
    if (typeof first == "number" && typeof second == "number") {
        return true;
    } else {
        return false;
    }
}


calculator("divide", 2, 0);
calculator("add", 122, 234);
calculator("divide", "ABC", "XUZ")
