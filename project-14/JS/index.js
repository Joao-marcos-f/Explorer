import { Router } from "./router.js"

const router = new Router()
router.add('/','/project-14/pages/home.html')
router.add('/about','/project-14/pages/about.html')
router.add('/contato','/project-14/pages/contato.html')
router.add(404,'/project-14/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = ()=> router.route()