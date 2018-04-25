<template>
    <div class="tower" :class="{'tower-dead': !isAlive}">
        <progress class="health" :value="health" :max="maxHealth"></progress>

        <div class="buyable">
            <span>Health: <b>{{ health }}</b></span>
            <button @click="health += 20" :disabled="!isAlive || health >= maxHealth">Heal</button>
        </div>
    </div>
</template>

<script>
export default {
    beforeCreate () {
        this.maxHealth = 100
    },
    data () {
        return {
            health: this.maxHealth
        }
    },
    computed: {
        isAlive () {
            return this.health > 0
        },
        damage () {
            return 10
        },
        farm () {
            return 20
        }
    },
    methods: {
        takeDamage (damage) {
            this.health -= damage
            if (this.health < 0)
                this.health = 0
        }
    }
}
</script>
