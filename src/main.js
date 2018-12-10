import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Game from './components/Game.vue'
import Over from './components/Over.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { name: 'Game', path: '/', component: Game },
        { name: 'Over', path: '/game-over', component: Over }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
