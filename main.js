// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faBell, faCircleArrowRight, faCircleChevronRight, faCirclePlus, faClockRotateLeft, faEarthAmericas, faGamepad, faHouse, faMagnifyingGlass, faPeopleGroup, faSearch, faStore, faTv, faUser, faUserGroup, faUserSecret, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faFacebook,faHouse,faTv,faStore,faPeopleGroup,faBars,faFacebookMessenger,faBell,faUser,faGamepad,faUserGroup,faStore,faClockRotateLeft,faMagnifyingGlass,faVideo,faEarthAmericas,faCirclePlus,faCircleChevronRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
