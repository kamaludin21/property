<template>
	<div class="w-full h-48 border">
		<LMap ref="map" :zoom="zoom" :center="[0.5086178514786303, 101.44782858051124]">
			<LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a>" layer-type="base"
				name="OpenStreetMap" />
			<l-marker :lat-lng="[0.5086178514786303, 101.44782858051124]"></l-marker>
		</LMap>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(12)
</script>

<style>
body {
	margin: 0;
}
</style>