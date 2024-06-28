/*
fazer um pragama que vai receber 3 valores do usuario e retornar a media e dizer se ele passou 
*/

alert("vamos fazer sua media usando JS")

let n1 = prompt("qual a nota da primeira prova")
let n2 = prompt("qual a nota da segunda prova")
let n3 = prompt("qual a nota da terceira prova")

let avarege = (Number(n1) + Number(n2) + Number(n3)) /3

if(avarege <= 6){
    alert(`voce ficou de recuperação sua media foi ${avarege.toFixed(2)}`)
}else{
    alert(`voce passou sua media foi ${avarege.toFixed(2)}`)
}