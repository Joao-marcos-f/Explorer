/*
Jogo da Advinhação

apresente a mensgame ao usuario:
"adivinhe o numero que estou pensando? esta entre 0 e 10"

crie uma logica para gerar um numero aleatorio e verificar se o numero digitado é o mesmo que o aleatorio gerado pelo sistema.

enquanto o usuario nao advinhar o numero, mostrar a mensagem: "error,tente novamente"

caso o usuario acerte o numero, apresentar a mensagem: "parabens voce advinhou o numero em X tentativas"

substitua o X da mensagem, pelo numero de tentativas
*/

let guess = prompt("vamos jogar o jogo da advinhação,adivinhe o numero que estou pensando? esta entre 0 e 10")
const numberToGuess = Math.round(Math.random() * 10)
let miss = 1
while(Number(guess) != numberToGuess){
    guess = prompt("erro tente novamente:")
    miss++
}
alert(`parabens voce advinhou o numero em ${miss} tentativas`)