<template>
	<div class="flex justify-between bg-white shadow-2xl p-4 rounded-t-xl relative z-40">
		<NavbarLink to="/" title="Beranda" :active="true">
			<IconsHome class="w-6 h-6 mx-auto" />
		</NavbarLink>
		<NavbarLink to="/explore" title="Explore" :active="false">
			<IconsHomeSearch class="w-6 h-6 mx-auto" />
		</NavbarLink>
		<NavbarLink to="/bookmark" title="Pengajuan" :active="false">
			<!-- <IconsBookmark /> -->
			<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="w-6 h-6 mx-auto" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 20h-11a3 3 0 0 1 0 -6h11a3 3 0 0 0 0 6h1a3 3 0 0 0 3 -3v-11a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" /></svg>
		</NavbarLink>
		<NavbarLink to="/profile" title="Profil" :active="false">
			<IconsUserCircle class="w-6 h-6 mx-auto" />
		</NavbarLink>
	</div>
	<!-- shadow element -->
	<div class="absolute bg-black/20 blur-lg left-0 w-full top-0 z-0 h-10"> 
	</div>
	<!-- shadow element -->
</template>

<script lang="ts" setup>

</script>

<style></style>