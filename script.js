const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const fromCurrency = document.querySelector(".from-currency")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const allCurrencies = {
        USD: 5.04,
        EUR: 5.41,
        BTC: 139.739,
        GBP: 6.29,
        BRL: 1
    }

    if (fromCurrency.value == "BRL") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat(currencySelect.querySelector(`[value="${currencySelect.value}"]`).getAttribute("data-lang"), {
            style: "currency",
            currency: currencySelect.value
        }).format(inputCurrencyValue / allCurrencies[currencySelect.value])
    } else {
        currencyValueConverted.innerHTML = new Intl.NumberFormat(currencySelect.querySelector(`[value="${currencySelect.value}"]`).getAttribute("data-lang"), {
            style: "currency",
            currency: currencySelect.value
        }).format((inputCurrencyValue * (allCurrencies["BRL"] / allCurrencies[currencySelect.value])) * allCurrencies [fromCurrency.value])
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(fromCurrency.querySelector(`[value="${currencySelect.value}"]`).getAttribute("data-lang"), {
        style: "currency",
        currency: fromCurrency.value
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyFromName = document.getElementById("currency-from")
    const currencyFromImg = document.querySelector("#img1")
    const currencyToName = document.getElementById("currency-name")
    const currencyToImg = document.querySelector("#img2")
    const currencies = {
        USD: {
            name: "Dólar Americano",
            img: "./assets/estados-unidos (1) 1.png"
        },
        EUR: {
            name: "Euro",
            img: "./assets/euro.png"
        },
        BTC: {
            name: "Bitcoin",
            img: "./assets/bitcoin 1.png"
        },
        GBP: {
            name: "Libra",
            img: "./assets/libra 1.png"
        },
        BRL: {
            name: "Real",
            img: "./assets/brasil 2.png"
        }
    }

    const selectedCurrencyFrom = currencies[document.querySelector(".from-currency").value]
    const selectedCurrencyTo = currencies[document.querySelector(".currency-select").value]

    currencyFromName.innerHTML = selectedCurrencyFrom.name
    currencyFromImg.src = selectedCurrencyFrom.img

    currencyToName.innerHTML = selectedCurrencyTo.name
    currencyToImg.src = selectedCurrencyTo.img

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)