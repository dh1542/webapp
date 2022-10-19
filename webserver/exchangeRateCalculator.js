const { addAbortSignal } = require("stream")

class exhangeRateCalculator {
    // exchange rates
    EUR_USD = 0;
    EUR_RUB = 0;
    EUR_CNY = 0;



    constructor() {
        if(exhangeRateCalculator._instance){
            return exhangeRateCalculator._instance
        }
        exhangeRateCalculator._instance = this


        // init exchange rates
        exhangeRateCalculator._instance.fetchCurrentExhangeRates()
        
        // rest of constructor

    }

    

    /** updates exchange rate */
    async fetchCurrentExhangeRates(){
                
    }





}


