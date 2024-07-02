/*
faça um programa que tenha um menu e apresente a seguinte mensagem:

olá usuario! Digite o numero da apção que deseja

    1.cadastrar um item na lista 
    2.Mostrar itens cadastrados
    3.Sair do programa

---
O programa devera capturar o numero digitado pelo ususario e mostrar o seguint cenario

caso o ususario digite 1, ele poderar cadastrar um item em um lista
caso o usuario digite 2, ele poderar ver os itens cadastrados
    se nao houver nenhum item cadastrado, mostrar a mensagem:
    "nao existe itens cadastrados"
caso o usuario digite 3, a aplicação devera ser encerrada
*/

let option = 0
let lista = []

while(option != 3){

    option = Number(prompt("olá usuario! Digite o numero da apção que deseja 1.cadastrar um item na lista 2.Mostrar itens cadastrados 3.Sair do programa"));


    switch(option){
        case 1:
            let item = prompt("digite o nome do item")
            lista.push(item)
            break
        case 2:
            if(lista.length == 0){
                alert("nao existe itens cadastrados")
            }else{
                alert(lista)
            }
            break
        case 3:
            alert("programa encerrado")
            break
        default:
            alert("opção invalida")
            break
    }
}
