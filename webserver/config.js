

class config{
    // config parameters
    exchangeRateAPIKey = "";

    constructor() {
        if(config._instance){
            return config._instance
        }
        config._instance = this;


        // init exchange rates
        config._instance.fetchCurrentExhangeRates();
        
        // rest of constructor
        let propertyReader = require('properties-reader');
        let properties = propertyReader('config.properties');

        // set config parameters
        this.exchangeRateAPIKey = properties.get("exchangeRateAPIKey");

    }

    getExchangeRateAPIKey(){
        return this.exchangeRateAPIKey;    
    }
    
    

    
}

