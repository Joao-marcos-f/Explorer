/*
capiturar 2 numero e fazer as operações matematicas de soma subtração, multiplicação divisão e resto de divisão

e cada operação mostrar o resultado na tela 
*/

let fistNumber = prompt("digite o primeiro numero")
let secondNumber = prompt("digite o segundo numero")

fistNumber = Number(fistNumber)
secondNumber = Number(secondNumber)

const sum = fistNumber + secondNumber
const sub = fistNumber - secondNumber
const multi = fistNumber * secondNumber
const div = fistNumber / secondNumber
const rest = fistNumber % secondNumber



alert(`a soma deu ${sum} a subtração deu ${sub} a multiplicação deu ${multi} a divisao deu ${div}`)