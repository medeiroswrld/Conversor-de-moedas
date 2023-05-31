const convertButton = document.querySelector (".convert-button")
const currencySelect = document.querySelector (".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.04 
    const euroToday = 5.41
    const bitcoin = 139.739

    if(currencySelect.value == "dolar"){ // se o select estiver selecionado o valor de dolar entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){ // se o select estiver selecionado o valor de euro entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue /euroToday) 
    }

    if (currencySelect.value === 'bitcoin') {
        const convertedValue = (inputCurrencyValue / bitcoin).toFixed(8); // Converter para Bitcoin com 8 casas decimais
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
           style: 'currency',
           currency: 'BTC',
        }).format (inputCurrencyValue /bitcoin) 
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML ="Dólar Americano"
        currencyImg.src="./assets/estados-unidos (1) 1.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML ="Euro"
        currencyImg.src= "./assets/euro.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML ="Bitcoin"
        currencyImg.src= "./assets/bitcoin 1.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)