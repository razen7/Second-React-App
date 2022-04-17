const currencyRates = {
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2020-10-07",
    "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396,
    }
}
// Function takes in the targetCurrency and amount to be converted. Implement the function so that it returns the amount in base currency 'EUR'
// e.g. getCurrencyPrice('AUD', 200) should return '127.71 EUR'
function getCurrencyPrice(targetCurrency, amount) {
    return amount / currencyRates.rates[targetCurrency];

}
console.log(
getCurrencyPrice('AUD', 1.566015)
)