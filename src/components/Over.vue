<template>
	<div>
		<h1 class="over-text" v-if="won">You won!</h1>
		<h1 class="over-text" v-else>You lost!</h1>

		<div class="info">
			<button @click="$router.push({ name: 'Game' })">Play again</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		won () {
			return this.$route.params.won
		}
	}
}
</script>

<style>
@import '../main.css';
</style>
