const convertButton = document.querySelector(".convert-button");
const selecetMoeda = document.querySelector(".moeda-select")

function convertvalues() {

    const inputValorQuantia = document.querySelector(".input-quantia").value
    const valorVaiSerConvertido = document.querySelector(".valor2-convert")
    const valorConvertido = document.querySelector(".valor2")


    const dolarhj = 5.2
    const eurohj = 6.2
    const librahj = 7.0
    const bitcoinhj = 300000.00

    if (selecetMoeda.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputValorQuantia / dolarhj)

    }

    if (selecetMoeda.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputValorQuantia / eurohj)

    }

    if (selecetMoeda.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputValorQuantia / librahj)
    }

    if (selecetMoeda.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputValorQuantia / bitcoinhj)

    }

    valorVaiSerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputValorQuantia)


}

function trocarMoeda() {
    const moedaNome = document.getElementById("moeda-nome")
    const logoMoeda2 = document.querySelector(".logo-moeda-2")


    if (selecetMoeda.value == "dolar") {
        moedaNome.innerHTML = "Dolar"
        logoMoeda2.src = "./assets/estados-unidos (1) 1.png"

    }

    if (selecetMoeda.value == "euro") {
        moedaNome.innerHTML = "Euro"
        logoMoeda2.src = "assets/euro.png"
    }
    if (selecetMoeda.value == "libra") {
        moedaNome.innerHTML = "Libra"
        logoMoeda2.src = "assets/libra 1.png"
    }
    if (selecetMoeda.value == "bitcoin") {
        moedaNome.innerHTML = "Bitcoin"
        logoMoeda2.src = "assets/bitcoin 1 (2).png"
    }
    convertvalues()
}

selecetMoeda.addEventListener("change", trocarMoeda)
convertButton.addEventListener("click", convertvalues)
