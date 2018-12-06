<template>
    <div>
        <div class="boss">
            <p>Health: <b>{{ bossHealth }}</b></p>
            <p>Damage: <b>{{ bossDamage }}</b></p>
        </div>
        <progress class="boss-health" :value="bossHealth" max="500"></progress>

        <div class="towers">
            <tower ref="tower" v-for="index in 3" :key="index"></tower>
        </div>

        <div class="info">
            <button @click="endTurn()">End turn</button>
        </div>
    </div>
</template>

<script>
import Tower from './Tower.vue'

export default {
    components: {
        tower: Tower
    },
    data () {
        return {
            bossHealth: 500,
            bossDamage: 25
        }
    },
    computed: {
        isEveryTowerDead () {
            return this.$refs.tower.every(tower => !tower.isAlive)
        }
    },
    methods: {
        endTurn () {
            let towers = this.$refs.tower

            towers.filter(tower => tower.isAlive).forEach(tower => {
                this.bossHealth -= tower.damage
                tower.takeDamage(this.bossDamage)
            })

            if (this.bossHealth <= 0)
                alert('You won!')
            else if (this.isEveryTowerDead)
                alert('You lost!')
        }
    }
}
</script>

<style>
@import '../main.css';

h1 {
    text-align: center;
    font-size: 72px;
    font-weight: normal;
}
</style>
