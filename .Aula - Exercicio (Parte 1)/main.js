let dataAtual = new Date();
let horario = dataAtual.getHours()
let res = document.querySelector(".text")

function horas() {
    let img = document.querySelector(".imagem");
    res.innerHTML = `Agora sao ${horario} Horas :D`

    if (horario <= 12) {
        img.src = "https://media.istockphoto.com/id/527039202/pt/foto/campo-nascer-do-sol-e-céu-azul.jpg?s=170667a&w=0&k=20&c=RveMRuTq48G7g_m3IMFwzscO_x6OdcTY9R3Tut5UBZo="

    } else if (horario >= 13 && horario <= 18) {
        img.src = "https://img.freepik.com/fotos-premium/luz-solar-no-fundo-do-ceu-ao-meio-dia_43957-41.jpg"

    } else {
        img.src = "https://img.freepik.com/fotos-premium/cidade-do-japao-a-noite_492154-7124.jpg"
        
    }
}

horas();