import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Game from './components/Game.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { name: 'Game', path: '/', component: Game }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
