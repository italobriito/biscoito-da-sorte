
/* Váriáveis */

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")

const fortune = [
    "É em meio a dificuldade que se encontra a oportunidade.",

    "Sorte é estar pronto quando a oportunidade vem.",

    "Mesmo que algo pareça difícil, nunca desista antes de tentar",

    "O encontro da preparação com a oportunidade gera o que chamamos sorte.",

    "O que a mente é capaz de conceber e acreditar, ela é capaz de realizar",

    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",

    "Quer você acredite que consiga fazer uma coisa ou não, você está certo",

    "Não espere. O momento nunca será 'perfeito'",

    "Cada sonho que você deixa para trás é um pedaço do seu futuro que deixa de existir.",

    "Algumas pessoas querem que algo aconteça, outras desejam que aconteça, outras fazem acontecer"
]


/* Eventos */

screen1.addEventListener('click',cookieClick)
btnReset.addEventListener('click',resetClick)
document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        resetClick()
    }
})


/*Funções */
function cookieClick(event){
    toggleScreen()
 
}

function resetClick(){
    toggleScreen()
    changeFortune()
}

function changeFortune() {
    let anyFortune = fortune.length
    let randomNumber =  Math.floor(Math.random() * anyFortune)  
    screen2.querySelector("p").innerText = `${fortune[randomNumber]}`
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}





  



