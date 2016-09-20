(function () {
    angular.module("lookup")
        .service("lookupSvc", function () {
            this.getCountryList = function () {
                return [{
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    }];
            };

            this.getStateList = function () {
                return [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    },
                    {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
            };

        });
})();
