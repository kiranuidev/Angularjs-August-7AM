function init(){
    
    var txtFirstName = document.getElementById("txtFirstName");
    txtFirstName.addEventListener("keypress",function(evt){
        console.log(this.value);
    })
}
function helloWorld(){
    this.data="kiran"'
}
init();