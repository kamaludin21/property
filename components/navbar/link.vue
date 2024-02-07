<template>
	<NuxtLink :to="url">
		<button :class="active ? 'text-amber-600' : 'text-slate-600'">
			<slot />
			<p class="text-xs">{{ title }}</p>
		</button>
	</NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
	url: String,
	title: String,
	active: {
		type: Boolean,
		default: false
	},
})
</script>

<style></style>