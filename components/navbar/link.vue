<template>
	<NuxtLink :to="url" class="active-link text-slate-500">
		<button>
			<slot />
			<p class="text-sm font-medium">{{ title }}</p>
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

<style>
.active-link.router-link-active {
	@apply text-amber-600;
}

.active-link.router-link-active:hover {
	@apply text-amber-700;
}
</style>