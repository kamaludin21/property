<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.include()
const router = useRouter()

const rusunawa = [
{
		'id': 1,
		'title': 'Rusunawa Rejosari',
		'alamat': ' Jalan Kampung Baru, Kel. Bambu Kuning',
		'kecamatan': 'Tenayan Raya',
		'start_price': '175.000',
		'end_price': '275.000',
		'image_path': 'rejosari',
		'lat': '0.549271',
		'long': '101.479668',
	},
	{
		'id': 2,
		'title': 'Rusunawa Rumbai',
		'alamat': ' Jalan Yos Sudarso, Kel. Meranti Pandak',
		'kecamatan': 'Rumbai Pesisir',
		'start_price': '175.000',
		'end_price': '275.000',
		'image_path': 'rumbai',
		'lat': '0.553784',
		'long': '101.435883'
	}
];

</script>

<template>
	<div class="p-2 border bg-slate-100 overflow-auto h-screen space-y-2 scrollbar-hide">
		<div class="-space-y-1 text-xl font-light text-slate-600">
			<p class="">Temukan <span class="text-2xl font-semibold text-slate-700">Hunian</span></p>
			<p class=""><span class="text-2xl font-semibold text-slate-700">Terbaik</span> Anda</p>
		</div>

		<!-- List Card -->
		<div class="flex w-full gap-x-4 overflow-x-auto scrollbar-hide py-2">
			<NuxtLink
				class="w-3/5 flex-none p-2 bg-white hover:shadow-lg duration-200 border-transparent hover:border-amber-600 border rounded-lg"
				v-for="(property, index) in rusunawa"  :key="index" :to="`/property-detail/${property.id}`" >
				<img :src="`/images/${property.image_path}/${index+1}.png`" class="w-full h-36 object-cover rounded-md" alt="">
				<div class="py-1">
					<p class="text-base text-slate-600 font-bold font-roboto">{{ property.title }}</p>
					<div class="inline-flex items-center gap-x-1 text-slate-500 text-sm line-clamp-1">
						<IconsLocation class="h-4 w-4" />
						<p>{{ property.kecamatan }}</p>
					</div>
					<p class="text-base font-bold text-amber-600">Rp. {{ property.start_price }} - Rp. {{ property.end_price }}</p>
				</div>
			</NuxtLink>
		</div>
		<!-- List Card -->

		<div class="space-y-2">
			<p class="text-base font-medium text-slate-600">Properti Unggulan</p>
			<hr>
			<NuxtLink class="flex gap-x-2 p-2 bg-white shadow rounded-lg"
				v-for="(property, index) in rusunawa" :key="index" :to="`/property-detail/${property.id}`">
				<img :src="`/images/${property.image_path}/${index+1}.png`"  class="w-1/3 h-28 object-cover rounded-md" alt="">
				<div class="w-2/3 h-28 flex flex-col">
					<p class="text-base text-slate-700 font-medium">{{ property.title }}</p>
					<div class="inline-flex items-center gap-x-1 text-slate-500 text-xs">
						<IconsLocation class="h-3 w-3" />
						<p>{{ property.kecamatan }}</p>
					</div>
					<div class="flex-1"></div>
					<p class="text-base font-bold text-amber-600">Rp. {{ property.start_price }} - Rp. {{ property.end_price }}</p>
				</div>
			</NuxtLink>
		</div>


		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
</template>

<style>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
	-ms-overflow-style: none;
	/* IE and Edge */
	scrollbar-width: none;
	/* Firefox */
}
</style>