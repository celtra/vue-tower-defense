<template>
	<div>
		<h1 class="over-text">You managed to defeat {{ `${$route.params.score} ${$route.params.score === 1 ? 'boss' : 'bosses'}` }}!</h1>

		<div class="info">
			<button @click="$router.push({ name: 'Game' })">Play again</button>
		</div>
	</div>
</template>

<style>
@import '../main.css';
</style>
