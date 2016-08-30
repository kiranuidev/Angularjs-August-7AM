function User() {
    this.username = "";
    var password = "";
    var SSN = "";
    var encrypt = function (data) {
        return "xxx-xxx-" + data.substring(6, 10);
    };
    this.showPassword = function () {
        return encrypt(password);
    };
    this.showSSN = function () {
            return encrypt(SSN)
        }
        /*this.salary = function (role) {
            if (role == "manager") {
                return 1200000;
            }
            if (role == "admin") {
                return 8000000;
            }
        };*/
}
User.prototype.salary = function (role) {
    if (role == "manager") {
        return 1200000;
    }
    if (role == "admin") {
        return 8000000;
    }
};

User.application = "Object Oriented JS";

var admin = new User();
admin.hasAccessToAll = true;

var manager = new User();
manager.employess = [];
manager.salary = function () {

    console.log(User.application)
    return 11212121212212;
};
admin.salary = function () {
    return 34234343;
};






/*console.log(manager);
console.log(admin);*/
console.log(manager.salary("manager"));
console.log(admin.salary("admin"));
console.log(User.application)
