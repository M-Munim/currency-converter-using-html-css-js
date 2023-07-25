const firstCurrency = document.getElementById("currency-first")
const firstWorth = document.getElementById("worth-first")
const secondCurrency = document.getElementById("currency-second")
const secondWorth = document.getElementById("worth-second")
const exchangeRate = document.getElementById("exchange-rate")

updateRate()

function updateRate() {
    fetch(
        `https://v6.exchangerate-api.com/v6/843fb37a35b5fcd9e36267b1/latest/${firstCurrency.value}`
    )
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[secondCurrency.value]
            console.log(rate);
            exchangeRate.innerText = `1 ${firstCurrency.value} = ${rate + " " + secondCurrency.value}`;
            secondWorth.value = (firstWorth.value * rate).toFixed(3)
        })
}

firstCurrency.addEventListener("change", updateRate)

secondCurrency.addEventListener("change", updateRate)

firstWorth.addEventListener("input", updateRate)


