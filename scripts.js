let botao = document.getElementById("button")
let select = document.getElementById("selectMoeda")

async function clickButton() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputReal = Number(document.getElementById("input").value)

    if (select.value === "U$$ Dólar Americano") {
        let resultadoDolar = document.getElementById("resultado-dolar")
        let resultadoReal = document.getElementById("resultado-real")

        let valorDolar = inputReal / dolar
        resultadoDolar.innerHTML = valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        resultadoReal.innerHTML = inputReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
    if (select.value === "€ Euro") {
        let valorEuro = inputReal / euro
        let resultadoReal = document.getElementById("resultado-real")
        let resultadoDolar = document.getElementById("resultado-dolar")
        resultadoDolar.innerHTML = valorEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
        resultadoReal.innerHTML = inputReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
}

function trocarMoeda() {
    let textoMoeda = document.getElementById("texto-moeda")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "U$$ Dólar Americano") {
        textoMoeda.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./Imagens/Dolar.png"
    }
    if (select.value === "€ Euro") {
        textoMoeda.innerHTML = "Euro"
        bandeiraMoedas.src = "./Imagens/Euro.png"
    }
    clickButton()
}


botao.addEventListener("click", clickButton)
select.addEventListener("change", trocarMoeda)

// .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


