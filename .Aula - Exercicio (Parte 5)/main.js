let number = document.querySelector(".txtNum");
let sel = document.querySelector(".resNum");
let btn = document.querySelector(".btn");
let finBtn = document.querySelector(".endBtn");
let res = document.querySelector(".res");

let valores = [];

function inLista(n, valores) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isNumber(n) {
    if (Number(n) >= 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

btn.addEventListener('click', (evt) => { 
    let num = Number(number.value)

    if (!inLista(num, valores) && isNumber(num)) {
        valores.push(num)

        let opt = document.createElement('option')
        opt.text = `Número ${num} foi Adicionado.`
        sel.appendChild(opt)

    } else {
        throw `o Número '${num}' já esta na Lista.`
    }
    number.value = ''
    number.focus()    
})

finBtn.addEventListener('click', (evt) => {
    if (valores.length == 0) {
        alert("Adicione Valores Antes de Finalizar!")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML += `Ao todo temos ${tot} Numeros Cadastrados. </br>`
        res.innerHTML += `O Maior valor informado foi ${maior} </br>`
        res.innerHTML += `O Menor valor informado foi ${menor} </br>`
        res.innerHTML += `Somando todos os Valores, Resulta em ${soma} </br>`
        res.innerHTML += `a Media entre os Todos os Valores é ${media} </br>`
    }})
