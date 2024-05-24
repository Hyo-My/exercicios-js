let ini = document.querySelector(".numIn")
let fim = document.querySelector(".numFi")
let passo = document.querySelector(".numPa")
let btn = document.querySelector(".btn")
let res = document.querySelector(".res")

btn.addEventListener("click", (evt) => {
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        console.log("Erro")
    } else {
        res.innerHTML = ""
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i ;c <= f; c += p) {
            res.innerHTML += ` ${c} |`
        }
    }
})