<template>
	<main class="relative max-w-sm bg-slate-200 mx-auto h-screen main-wrapper overflow-hidden">
		<slot />
		<!-- bottom navbar -->
		<div class="absolute fixed bottom-0 w-full ">
			<NavbarBottom/>
		</div>
	</main>
</template>

<script setup>
const activemenu = ref(true)
</script>

<style>
.main-wrapper {
	height: 100vh;
	/* Use vh as a fallback for browsers that do not support Custom Properties */
	height: calc(var(--vh, 1vh) * 100);
	margin: 0 auto;
}
</style>