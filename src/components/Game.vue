<template>
    <div>
        <div class="boss">
            <p>Health: <b>{{ bossHealth }}</b></p>
            <p>Damage: <b>{{ bossDamage }}</b></p>
        </div>
        <progress class="boss-health" :value="bossHealth" max="500"></progress>

        <div class="towers">
            <tower></tower>
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
