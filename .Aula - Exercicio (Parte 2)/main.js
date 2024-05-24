let anoNasc = document.querySelector(".numId")
let radio = document.querySelectorAll(".gen")
let btn = document.querySelector(".button")
let res = document.querySelector(".res")
let img = document.querySelector(".imagem")
let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

btn.addEventListener('click', (evt) => {
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual ) {
        alert("Informaçoes Nâo Compativeis.")
    } else {
        let idade = anoAtual - Number(anoNasc.value)
        res.style.textAlign = "center"
        res.innerHTML = `Voce tem ${idade} Anos de Idade`

        // MASCULINO!
        if (idade <= 15 && radio[0].checked) {
            img.src = "https://pm1.aminoapps.com/7742/bd8524610fa8a8885445e357b383fd471b674a08r1-250-250v2_00.jpg"

        } else if (idade <= 50 && radio[0].checked) {
            img.src = "https://boo-prod.b-cdn.net/database/profiles/1688783843414023dbeb8eef3acd35a52736727f27654.jpeg?class=sm"

        } else if (idade >= 51 && radio[0].checked) {
            img.src = "https://static.wikia.nocookie.net/deathbattlefanon/images/5/5d/Askeladd.full.3121388.jpg/revision/latest/scale-to-width-down/250?cb=20210227211147"

        // FEMININO!
        } if (idade <= 15 && radio[1].checked) {
            img.src = "https://i.pinimg.com/474x/e8/9c/6d/e89c6d30f8887ee32eba33fb99082055.jpg"

        } else if (idade <= 50 && radio[1].checked) {
            img.src = "https://i.pinimg.com/474x/2f/5f/06/2f5f06482b6a05b12429820af10c5235.jpg"

        } else if (idade >= 51 && radio[1].checked) {
            img.src = "https://static.wikia.nocookie.net/wikinaruto/images/a/a4/Chiyo.jpg/revision/latest/smart/width/250/height/250?cb=20100522211417&path-prefix=pt"
        }
    }
})