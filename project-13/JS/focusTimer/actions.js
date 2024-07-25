import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'

//aqui estão as funções que serão executadas quando ouver o clik;

//essa função tem como objetivo mudar o estado(state) da aplicação para "running" se o estado for falso ou parar se o estado for verdadeiro alem de receber outra função que faz com que o timer continue ou pare
export function toogleRunning(){
   state.isRunning = document.documentElement.classList.toggle('running')
   timer.countdowm()
   audio.buttonPressAudio.play()
}

//essa função faz o reset do timer, colocando o estado(state) como falso para parar a aplicação e removendo a classe "running" do html e por fim recebe uma função que atualiza o display do timer
export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    audio.buttonPressAudio.play()
}

//essa função é para o user conseguir mudar/editar o tempo que ele quer, ele faz isso pegando o elemento > minuto e adicionando um atributo que nesse caso é o contenteditable que como o nome diz faz o conteudo ser editavel
export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    el.seconds.setAttribute('contenteditable', true)
}

export function toogleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        audio.bgAudio.play()
        return
    }

    audio.bgAudio.pause()
}