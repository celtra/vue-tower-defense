<template>
    <div>
        <h1>{{ text }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: 'Hello world!'
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
