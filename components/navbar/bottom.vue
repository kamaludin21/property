<template>
	<div class="flex justify-between bg-white shadow-2xl p-4 rounded-t-xl relative z-40">
		<NavbarLink to="/" title="Beranda" :active="true">
			<IconsHome class="w-6 h-6 mx-auto" />
		</NavbarLink>
		<NavbarLink to="/explore" title="Explore" :active="false">
			<IconsHomeSearch class="w-6 h-6 mx-auto" />
		</NavbarLink>
		<NavbarLink to="/message" title="Bookmark" :active="false">
			<IconsBookmark class="w-6 h-6 mx-auto" />
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