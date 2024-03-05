<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.include()
const filter = ref(false)

const isMap = ref(true)
const detail = ref(false)


import { ref } from 'vue'
const zoom = ref(12)


const location = [
	{
		position: [0.5086178514786303, 101.44782858051124],
		title: 'Rumah 1'
	},
	{
		position: [0.5005630211985309, 101.41200257896735],
		title: 'Rumah 2'
	},
	{
		position: [0.49973461185598667, 101.47662096879131],
		title: 'Rumah 3'
	},
	{
		position: [0.4927065126484524, 101.47051648833795],
		title: 'Rumah 4'
	},
	{
		position: [0.4645550299489861, 101.44099073245556],
		title: 'Rumah 5'
	},
	{
		position: [0.5308138167600058, 101.44785718731191],
		title: 'Rumah 6'
	},
]

const router = useRouter()
</script>

<template>
	<!-- List Card -->
	<div class="p-2 border bg-slate-100 overflow-hidden h-screen space-y-2">
		<div class="flex relative items-center">
			<button @click="$router.back()" class="absolute left-0 p-1 hover:bg-amber-400/20 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" viewBox="0 0 24 24" stroke-width="1.5"
					stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M15 6l-6 6l6 6" />
				</svg>
			</button>
			<div class="w-full">
				<p class="text-center text-xl font-light text-amber-600">Explore</p>
			</div>
			<div class="">
				<button @click="isMap = !isMap" class="p-1.5 bg-white rounded-md text-amber-600">
					<IconsMap class="w-5 h-5" v-if="isMap" />
					<IconsList class="w-5 h-5" v-else />
				</button>
			</div>
		</div>

		<div class="space-y-2" v-if="!isMap">
			<!-- Content -->
			<div class="relative">
				<!-- Searchbox -->
				<div class="w-full bg-white shadow rounded-lg py-1 pr-1 pl-2 flex item-center">
					<input type="text" class="flex-1 outline-none" placeholder="Pencarian ">
					<button @click="filter = !filter" class="p-1 bg-slate-100 rounded-md">
						<IconsFilter class="w-5 h-5 text-slate-600 hover:text-amber-600" />
					</button>
				</div>
				<!-- Searchbox -->
				<!-- filer box -->
				<div v-if="filter" class=" space-y-2 absolute w-full h-auto top-10 left-0 bg-white rounded-lg shadow p-2">
					<p class="text-sm font-medium">Filter</p>
					<hr>
					<div>
						<input type="text" class="bg-slate-100 outline-none w-full rounded p-1" placeholder="Mulai harga">
					</div>
					<div>
						<input type="text" class="bg-slate-100 outline-none w-full rounded p-1" placeholder="Harga Maksimal">
					</div>
					<div>
						<input type="text" class="bg-slate-100 outline-none w-full rounded p-1" placeholder="Lokasi">
					</div>

					<div class="flex space-x-2">
						<button class="flex-1 ring-inset ring-1 ring-amber-600 rounded-md">Reset</button>
						<button class="flex-1 bg-amber-600 text-white py-1 rounded-md">Submit</button>
					</div>
				</div>
				<!-- filer box -->
			</div>
			<!-- Content -->

			<!-- Result card -->
			<div class="h-screen space-y-2 overflow-y-auto scrollbar-hide p-2 bg-white rounded-lg ring-1 ring-slate-200">
				<p class="text-sm font-medium text-slat-600">Hasil Pencarian:</p>
				<hr>
				<NuxtLink to="/property-detail" class="flex gap-x-2 p-2 bg-white shadow rounded-lg" v-for="n in 10">
					<img src="https://source.unsplash.com/2d4lAQAlbDA" class="w-1/3 h-28 object-cover rounded-md" alt="">
					<div class="w-2/3 h-28 flex flex-col">
						<p class="text-base text-slate-700 font-medium">Rumah Type 32</p>
						<div class="inline-flex items-center gap-x-1 text-slate-500 text-xs">
							<IconsLocation class="h-3 w-3" />
							<p>Jalan Nangka, No. 24A Gg. Johari</p>
						</div>
						<div class="flex-1"></div>
						<p class="text-sm text-slate-600 font-normal">Rp. <span
								class="text-xl font-semibold text-amber-600">120.000.000</span></p>
					</div>
				</NuxtLink>

				<!-- Scroll helper -->
				<div class="pb-44 pt-4">
					<p class="text-sm text-center text-slate-400">End of list...</p>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-md h-full relative z-0" v-else>
			<div class="h-[80%]">
				<ClientOnly fallback="Loading maps...">
					<LMap ref="map" :zoom="zoom" :center="[0.5086178514786303, 101.44782858051124]">
						<LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a>"
							layer-type="base" name="OpenStreetMap" />
						<l-marker @click="detail = !detail" v-for="data in location" :lat-lng="data.position"></l-marker>
					</LMap>
				</ClientOnly>
			</div>
		</div>

		<div class="absolute -top-2 left-0 w-full flex items-center justify-center h-screen bg-black/50 z-50"
			v-if="detail">
			<div class="bg-white w-11/12 p-2 rounded-lg">
				<p>Informasi Property</p>
				<hr>
				<div class="h-auto w-full relative">
					<PropertyImages />
				</div>
				<!-- Info -->
				<div class="space-y-4 p-2 font-inter">
					<div class="space-y-1">
						<p class="text-xl font-semibold text-slate-700 ">Rumah Type 32 - 4 Kamar 2 Kamar Mandi</p>
						<div class="flex-1 flex items-center gap-1">
							<IconsLocation class="h-5 w-5 stroke-1.7 text-amber-600" />
							<div class="">
								<p class="text-sm font-light text-slate-600 line-clamp-1">Payung Sekaki, Pekanbaru
								</p>
							</div>
						</div>
					</div>
					<hr>
					<div class="flex items-top py-2 justify-center font-roboto">
						<p class="text-xl font-light text-slate-500">Rp.</p>
						<p class="text-4xl line-clamp-1 font-black text-amber-600">
							790.000.000,00</p>
					</div>
					<div class="flex flex-row gap-2 items-center">
						<div @click="detail = !detail"
							class="bg-white w-full flex-1 ring-inset ring-2 ring-amber-600 text-amber-600 px-3 py-2 gap-1 rounded-full h-fit">
							<p class="font-light text-center">Tutup</p>
						</div>
						<NuxtLink to="property-detail"
							class="bg-amber-600 w-full flex-1 ring-inset hover:ring-2 ring-amber-700 text-white px-3 py-2 gap-1 rounded-full h-fit">
							<p class="font-light text-center">Selengkapnya</p>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
</template>
