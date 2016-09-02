
function printUserDetails(user) {
    if (user == "kiran") {
       details(user)
    } else {
        errorData();
    }
}

function errorData() {
    alert("Hey you didnot passed the info");
}

function details(user) {
    alert("you passed" + user);
}

function init() {
 printUserDetails("kiran")
}
init();

