function Person(SSN) {
    var ssn = SSN;
    this.firstName = "";
    this.lastName = "";
    this.getMaskedSSN = function () {
        return "xxx-xxx-" + ssn.substring(6, 10);
    };
    this.address = new Address();
    this.officeAddress = new Address();
}


function Address() {
    this.streetName = "";
    this.country = "";
    this.state = "";
    this.zipcode = "";
}

var user = new Person("1234567890");
user.firstName = "kiran";
user.lastName = "PVS";
user.address.country = "India";
user.address.state = "Telangana";
user.address.zipcode = "500067";
user.address.streetName = "Maitrivanam";
console.log(user);
console.log(user.getMaskedSSN());
