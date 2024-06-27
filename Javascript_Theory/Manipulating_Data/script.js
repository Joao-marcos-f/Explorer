//mainipulando string e numeros

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
/*
let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)*/

//transformar um numero quebrado com duas casas decimais e trocar ponto por virgula
/*
let number = 968.12675
console.log(number.toFixed(2).replace(".", ","))*/

//tranformar letras minusculas em maiusculas e o contrario tambem

/*let word = "programar é muito bacana!"
console.log(word.toLowerCase().toUpperCase())*/

//separar um texto que contem espaços em um novo array onde cada texto é uma posição do array.Depois disso,tranforme o arry em um texto e onjde eram espaços e coloque _

/*let phase = "eu quero viver o amor"
let myArray = phase.split(" ")
let phaseWithUndersocre = myArray.join("_")
console.log(phaseWithUndersocre)*/

//verificar se o texto contem a palavra "amor"

/*let phase = "eu quero viver o amor"
console.log(phase.includes("amor"))*/

//criar um array construtor
/*let myarray = new Array('a','b','c')
console.log(myarray)*/

//contar os elementos de um array
/*console.log(["a","b","c"].length)*/

//tranformar uma cedeia de caracteres em elementos de um array

/*let word = "manipulação"
console.log(Array.from(word))*/

//manipulando array
/*let techs = ["html", "css","js"]

//adiciona um item no fim da lista
techs.push("node.js")
//adiciona no começo
techs.unshift("sql")
//remove do fim
techs.pop()
//remove do começo
techs.shift()
//pega somente alguns elementos do array
console.log(techs.slice(1,3))
//remove 1 ou mais itens de qualquer posição do array
techs.splice(1,1)
//encontra a posição de um elemento no array
let index = techs.indexOf('css')*/