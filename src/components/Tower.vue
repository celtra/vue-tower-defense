<template>
    <div class="tower" :class="{'tower-dead': !isAlive}">
        <progress class="health" :value="health" max="100"></progress>
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
