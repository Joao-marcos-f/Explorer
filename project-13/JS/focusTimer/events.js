import {controls} from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

//essa função como o nome diz faz o registro dos controles adicionando um "ouvidor" aos botoes, quando os botoes recebem um click ele pega o nome que foi passado no dataset la no html e faz a verificação se o nome passado corresponde a uma função se nao existir, para a aplicação, se tiver tudo bem ele passar a função
export function registerControls(){
    controls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

//essa função define os minutos, ela adiciona um "ouvidor" ao elemento.minutos e quando ele ta em foco ele limpa o texto para digitar um novo alem de fazer a validação de permitir somente numeros
export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    //essa parte da função faz a validação para que so seja aceito numero o /\d ele é uma função regular que meio que fala "somente numero" o .test faz o teste e recebe como parametro a tecla que o user pressionar
    el.minutes.onkeypress = () => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        //state.second =0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}
export function setSeconds(){
    el.seconds.onkeypress = () =>{
        /\d/.test(event.key)
    }
    el.seconds.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent

        time = time > 59 ? 59 : time
        state.seconds = time

        updateDisplay()
        el.seconds.removeAttribute('contenteditable')
    })
}