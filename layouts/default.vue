<template>
	<main
		class="relative w-full-center bg-slate-200 mx-auto h-screen main-wrapper overflow-hidden flex flex-col justify-between font-inter select-none">
		<slot />
		<!-- bottom navbar -->
		<div class="absolute bottom-0 w-full " v-if="navbar.require">
			<NavbarBottom />
		</div>
	</main>
</template>

<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.include()

const activemenu = ref(true)

const setFullHeight = () => {
	let vh = window.innerHeight * 0.01;
	document.body.style.setProperty("--vh", `${vh}px`);
}

onMounted(() => {
	setFullHeight();
	window.addEventListener("resize", setFullHeight);
});

onUnmounted(() => {
	window.removeEventListener("resize", setFullHeight);
});


</script>

<style>
.main-wrapper {
	height: 100vh;
	/* Use vh as a fallback for browsers that do not support Custom Properties */
	height: calc(var(--vh, 1vh) * 100);
	margin: 0 auto;
}

.w-full-center {
	@apply w-full max-w-md;
}
</style>