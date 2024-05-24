let numTxt = document.querySelector(".txtNum");
let btn = document.querySelector(".btn");
let tabuada = document.querySelector(".tabuada");
let res = document.querySelector(".res");

btn.addEventListener('click', (evt) => {
    if (numTxt.value.length == 0) {
        alert("Coloque um Numero.")
    } else {
    tabuada.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            let opt = document.createElement('option');   
            opt.text = `${numTxt.value} x ${i} = ${numTxt.value * i}`;
            tabuada.appendChild(opt);
    }}
})