<template>
    <div class="tower" :class="{'tower-dead': !isAlive}">
        <progress v-if="isAlive" class="health" :value="health" :max="maxHealth"></progress>
        <button v-else @click="$emit('buy', 'revive')" class="revive">Revive ({{ costs.revive }})</button>

        <div class="stat">
            <span>Health: <b>{{ health }}</b></span>
            <button @click="$emit('buy', 'heal')" :disabled="!isAlive || health >= maxHealth">Heal ({{ costs.heal }})</button>
        </div>

        <div class="stat">
            <span>Damage: <b>{{ damage }}</b></span>
            <button @click="$emit('buy', 'damage')" :disabled="!isAlive">Upgrade ({{ costs.damage }})</button>
        </div>

        <div class="stat">
            <span>Farm: <b>{{ farm }}</b></span>
            <button @click="$emit('buy', 'farm')" :disabled="!isAlive">Upgrade ({{ costs.farm }})</button>
        </div>

        <div class="buyable">
            <span>Defense: <b>{{ Math.floor(defense * 100) }}%</b></span>
            <button class="buy" @click="$emit('buy', 'defense')" :disabled="!isAlive">Upgrade ({{ costs.defense }})</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        maxHealth: { type: Number }
    },
    data () {
        return {
            health: this.maxHealth,
            numDamageUpgrades: 0,
            numFarmUpgrades: 0,
            numDefenseUpgrades: 0
        }
    },
    computed: {
        isAlive () {
            return this.health > 0
        },
        damage () {
            return 10 + 10 * this.numDamageUpgrades
        },
        farm () {
            return 20 + 15 * this.numFarmUpgrades
        },
        defense () {
            return 1 - Math.pow(0.95, this.numDefenseUpgrades)
        },
        costs () {
            return {
                heal: 20,
                damage: Math.floor(40 * Math.pow(1.2, this.numDamageUpgrades)),
                farm: Math.floor(50 * Math.pow(1.3, this.numFarmUpgrades)),
                defense: Math.floor(30 * Math.pow(1.2, this.numDefenseUpgrades)),
                revive: 200
            }
        }
    },
    methods: {
        takeDamage (damage) {
            this.health -= Math.floor(damage * (1 - this.defense))
            if (this.health < 0)
                this.health = 0
        },
        onBought (name) {
            if (name === 'heal') {
                this.health += 40
                if (this.health > this.maxHealth)
                    this.health = this.maxHealth
            } else if (name === 'damage') {
                this.numDamageUpgrades ++
            } else if (name === 'farm') {
                this.numFarmUpgrades ++
            } else if (name === 'defense') {
                this.numDefenseUpgrades ++
            } else if (name === 'revive') {
                this.health = this.maxHealth
            }
        },
        resetHealth () {
            this.health = this.maxHealth
        }
    }
}
</script>
