import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://tovuelist2-default-rtdb.firebaseio.com/"
}
const firebaseApp = initializeApp(appSettings)
const database = getDatabase(firebaseApp)
const tasksInDB = ref(database, "taskList")

export default tasksInDB