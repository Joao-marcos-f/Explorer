import { Router } from "./router.js"

const router = new Router()
router.add('/','pages/home.html')
router.add('/about','pages/about.html')
router.add('/contato','pages/contato.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = ()=> router.route()