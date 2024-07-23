import state from "./state.js";
import * as timer from './timer.js'

export function toogleRunning(){
   state.isRunning = document.documentElement.classList.toggle('running')
   timer.countdowm()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
}
export function set(){
    
}

export function toogleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
}