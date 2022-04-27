const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const dolar = 5.2
const euro = 5.9
const bitcoin = 195283

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais)

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReais / euro)
    }
    if(select.value === "₿ Bitcoin"){
        let resultadoDolares = inputReais / bitcoin
        currencyValueText.innerHTML = resultadoDolares.toLocaleString('de-DE', {styles: 'currency', currency: 'BTC'})
      }
}

    changeCurrency = () => {
        const currencyName = document.getElementById('currency-name')
        const currencyImg = document.getElementById('currency-img')

        if (select.value === 'US$ Dólar Americano') {
            currencyName.innerHTML = 'Dólar americano'
            currencyImg.src = './img/USA.png'
        }

        if (select.value === '€ Euro') {
            currencyName.innerHTML = 'Euro'
            currencyImg.src = './img/EURO.png'
        }

        if (select.value === '₿ Bitcoin') {
            currencyName.innerHTML = 'Bitcoin'
            currencyImg.src = './img/BTN.png'
        }

        convertValues()

    }

    button.addEventListener('click', convertValues)
    select.addEventListener('change', changeCurrency)
