function init() {

}


function getAllControls() {
    var controls = {};
    controls.firstName = document.getElementById("txtFirstName");
    controls.lastName = document.getElementById("txtLastName");
    controls.register = document.getElementById("btnRegister");
    controls.password = document.getElementById("txtPassword");
    controls.terms = document.getElementById("chkAgree");
    controls.age = document.getElementById("txtAge");
    controls.country = document.getElementById("ddlCountry");
    controls.gender = document.getElementsByName("gender");
    
    return controls;
}

function registerUser(){
    var userDetails ={};
    var controls = getAllControls();
    userDetails.firstName= controls.firstName.value;
    userDetails.lastName= controls.lastName.value;
    userDetails.age= controls.age.value;
    userDetails.terms= controls.terms.checked;
    userDetails.password= controls.password.value;
    userDetails.gender =getGender(controls.gender);
    userDetails.country = controls.country.value;
    console.log(userDetails);
}

function getGender(genderList){

    for(var i=0;i<genderList.length;i++){
        //step 3 do something.
        if(genderList[i].checked){
            
           return genderList[i].value;
        }
        
    }
     
}
        
        
        
        
        
        
        
        
        

