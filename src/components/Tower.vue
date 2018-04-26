<template>
    <div class="tower" :class="{'tower-dead': !isAlive}">
        <progress class="health" :value="health" max="100"></progress>

        <div class="stat">
            <span>Health: <b>{{ health }}</b></span>
        </div>

        <div class="stat">
            <span>Damage: <b>{{ damage }}</b></span>
        </div>

        <div class="stat">
            <span>Farm: <b>{{ farm }}</b></span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            health: 100
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
    }
}
</script>
