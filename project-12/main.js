import {modal} from './module.js'
import {alertError} from './alert-error.js'
import {IMC, notNumber} from './utils.js'

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')




//função para previnir que a pagina recarregue ao enviar o fomulario
form.onsubmit = function(e){
    //não permite que a pagina recarregue
    e.preventDefault()
    //salva dentro dessas variaveis o valor colocado nos inputs
    const weight = inputWeight.value
    const height =inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        alertError.open()
        return;
    }

    alertError.close()
    //faz o uso da função IMC e passa como valor as variaveis
    let result = IMC(weight, height)
    // salva em uma variavel a mensagem que será exibida 
    const message = `seu IMC é de ${result}`
    //faz com que apareça o texto na tela
    modal.open()
    modal.message.innerText = message
}

