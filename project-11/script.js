//variaveis
const btnTrylucky = document.querySelector("#tryLucky");
const btnTryAgain = document.querySelector("#tryAgain");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
let randomNumber = Math.round(Math.random() * 15);
let luckyPhases = [
    "Oportunidades incríveis estão a caminho.",
    "A felicidade bate à sua porta; esteja pronto para recebê-la.",
    "Grandes surpresas virão de onde você menos espera.",
    "Uma mudança positiva em sua carreira está próxima.",
    "Seus esforços serão recompensados em breve.",
    "O amor está mais perto do que você imagina.",
    "Uma nova amizade trará muita alegria.",
    "Siga seu coração e encontrará o caminho certo.",
    "Hoje é o dia perfeito para começar algo novo.",
    "A sorte favorece os corajosos; arrisque-se mais.",
    "Um desafio se tornará uma oportunidade.",
    "Alguém especial está pensando em você.",
   "Suas ideias criativas trarão grande sucesso.",
    "Um gesto de bondade retornará a você multiplicado.",
    "O conhecimento que você procura está ao seu alcance."
]

//eventos
btnTrylucky.addEventListener('click',trylucky)
btnTryAgain.addEventListener('click', toogleScreen)

//funções
/* função para trocar a tela */
function toogleScreen(e){
    event.preventDefault()//não faça o padrão

    content1.classList.toggle("hide")
    content2.classList.toggle("hide")
}
/*função para voltar ao menu*/
function trylucky(e){
    //não faça o padrão
    event.preventDefault()
    //vai sortear um numero entre 0 e 15
    let randomNumber = Math.round(Math.random() * 15);
    //na "tela 2 ou content2 ou biscoito aberto" vai trocar o lorem ipsum que esta la por uma frase do array aleatoria.
    content2.querySelector("p").innerText = `${luckyPhases[Number(randomNumber)]}`
    //e vai trocar de tela
    toogleScreen()
}