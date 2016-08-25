(function () {
    function init() {
        bindEvents();
        bulidCountryDropDown();
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
        controls.state = document.getElementById("ddlState");

        return controls;
    }

    function registerUser() {
        var userDetails = {};
        var controls = getAllControls();
        userDetails.firstName = controls.firstName.value;
        userDetails.lastName = controls.lastName.value;
        userDetails.age = controls.age.value;
        userDetails.terms = controls.terms.checked;
        userDetails.password = controls.password.value;
        userDetails.gender = getGender(controls.gender);
        userDetails.country = controls.country.value;
        console.log(userDetails);
    }

    function getGender(genderList) {

        for (var i = 0; i < genderList.length; i++) {
            //step 3 do something.
            if (genderList[i].checked) {

                return genderList[i].value;
            }

        }

    }

    function bulidCountryDropDown() {
        /*step1 get the country list
        step2 get the country dropdown.
        step3 loop through the list of countries
         for each country build the option tag
        step append the option tag as a child to dropdown*/

        var countryList = lookup.getCountryList();
        var ddlCountry = getAllControls().country;
        for (var i = 0; i < countryList.length; i++) {
            createOptionTag(countryList[i], ddlCountry);
        }
    }

    function buildState() {
        var states = [{
                "name": "Telangana",
                "code": "TS",
                "countryCode": "IN"
        },
            {
                "name": "Andhra Pradesh",
                "code": "AP",
                "countryCode": "IN"
        },
            {
                "name": "Texas",
                "code": "TX",
                "countryCode": "US"
        },
            {
                "name": "NewYork",
                "code": "NY",
                "countryCode": "US"
        }];
        for (var i = 0; i < states.length; i++) {
            createOptionTag(states[i], getAllControls().state)
        }
    }

    function createOptionTag(data, ctrl) {
        var optionTag = document.createElement("option");
        optionTag.value = data.code;
        optionTag.textContent = data.name;
        //console.log(optionTag);
        ctrl.appendChild(optionTag);
    }

    function bindEvents() {
        var controls = getAllControls();

        controls.country.addEventListener("change", loadStateList);
        controls.register.addEventListener("click", registerUser);
        controls.firstName.addEventListener("keypress", validations.alphabetsOnly);
        controls.lastName.addEventListener("keypress", validations.alphabetsOnly);

    }


    function loadStateList() {
        console.log(this.value);
    };
    init();



})();
