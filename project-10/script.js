//variaveis
const screen1 =document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', tryagain)

//funções
function handleClick(event){
    event.preventDefault()//não faça o padrão

    const inputNumber = document.querySelector("#inputNumber");
    
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `voce acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts++
}
// essa função faz com que ao clicar no botão de tentar novamente o usuario retorne para o jogo
function tryagain(){
    
    toggleScreen()
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10)
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}