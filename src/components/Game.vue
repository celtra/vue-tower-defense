<template>
    <div>
        <div class="boss">
            <p>Health: <b>{{ bossHealth }}</b></p>
            <p>Damage: <b>{{ bossDamage }}</b></p>
        </div>
        <progress class="boss-health" :value="bossHealth" :max="maxBossHealth"></progress>

        <div class="towers">
            <tower ref="tower" v-for="index in 3" :key="index" :max-health="index === 2 ? 300 : 100" @buy="(name) => onBuy(index, name)"></tower>
        </div>

        <div class="info">
            <p>Resources: {{ resources }}</p>
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
    beforeCreate () {
        this.initialBossHealth = 500
        this.initialBossDamage = 30
    },
    data () {
        return {
            bossHealth: this.initialBossHealth,
            bossDamage: this.initialBossDamage,
            resources: 1000,
            numBossesDefeated: 0
        }
    },
    computed: {
        isEveryTowerDead () {
            return this.$refs.tower.every(tower => !tower.isAlive)
        },
        maxBossHealth () {
            return Math.floor(this.initialBossHealth * Math.pow(1.4, this.numBossesDefeated))
        }
    },
    methods: {
        onBuy (index, name) {
            let tower = this.$refs.tower[index - 1]

            let cost = tower.costs[name]
            if (this.resources >= cost) {
                this.resources -= cost
                tower.onBought(name)
            }
        },
        endTurn () {
            let towers = this.$refs.tower

            towers.filter(tower => tower.isAlive).forEach(tower => {
                this.bossHealth -= tower.damage
                tower.takeDamage(this.bossDamage)
                this.resources += tower.farm
            })

            if (Math.random() < 1/5) {
                this.bossHealth += 50
                if (this.bossHealth > this.maxBossHealth)
                    this.bossHealth = this.maxBossHealth
            }
            this.bossDamage = Math.floor(this.bossDamage * 1.06)

            if (this.bossHealth <= 0) {
                this.numBossesDefeated ++
                this.bossHealth = this.maxBossHealth
                this.bossDamage = this.initialBossDamage
                towers.forEach(tower => {
                    tower.resetHealth()
                })
            } else if (this.isEveryTowerDead) {
                this.$router.push({ name: 'Over', params: { score: this.numBossesDefeated } })
            }
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
