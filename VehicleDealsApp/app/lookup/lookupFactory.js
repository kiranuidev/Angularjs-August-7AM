(function () {
    angular.module("lookup")
        .factory("lookupFact", [function () {


            return {
                getCountryList: function () {
                    return [{
                            "key": "IN",
                            "value": "India"
                    },
                        {
                            "key": "US",
                            "value": "United States"
                    }];
                },

                getStateList: function () {
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
                }
            };

        }]);
})();
