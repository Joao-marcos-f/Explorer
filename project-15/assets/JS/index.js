import { Router } from "./Routes.js"

const router = new Router()
router.add('/','assets/pages/Home.html')
router.add('/universe','/assets/pages/theUniverse.html')
router.add('/exploration','assets/pages/Exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = ()=> router.route()