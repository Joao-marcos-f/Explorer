let darkMode = true
const buttonToogle = document.getElementById('toogle-mode')

buttonToogle.addEventListener('click',(event) =>{
    document.documentElement.classList.toggle('light')


    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `ativar ${mode} mode`

    darkMode =!darkMode
})