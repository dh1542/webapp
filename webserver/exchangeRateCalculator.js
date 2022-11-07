import fetch from "node-fetch";

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
        const resp = await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist.xml?3392da9c043c921107ed495d3b5b2426')
            .then(data => console.log(data.text()))
                
    }





}

var exchangeRateCalculator = new exhangeRateCalculator();
exchangeRateCalculator.fetchCurrentExhangeRates()
console.log(exchangeRateCalculator)


