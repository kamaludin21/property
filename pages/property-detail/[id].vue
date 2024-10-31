<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.exclude()

const show = ref(false)

const route = useRoute()

const idData = parseInt(route.params.id);

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

let property = rusunawa.find((item) => item.id === idData);

</script>

<template>
	<div class="h-full bg-white border overflow-auto scrollbar-hide relative">
		<div class="absolute flex justify-between top-2 w-full bg-red-200 left-0 px-2">
			<button @click="$router.back()" class="p-1 bg-white/80 hover:bg-white/90 rounded-lg relative z-10">
				<IconsChevronLeft class="w-6 h-6 text-amber-600 stroke-2" />
			</button>

			<button class="p-1 bg-white/80 rounded-lg relative z-10">
				<IconsBookmark class="w-6 h-6 text-amber-600 fill-amber-600 stroke-2" />
			</button>

		</div>

		<!-- image -->
		<div class="h-auto w-full relative">

			<PropertyImages :path="property.image_path" />
		</div>
		<!-- Info -->
		<div class="space-y-4 p-2 font-inter">
			<div class="space-y-1">
				<p class="text-xl font-semibold text-slate-700 ">{{ property.title }}</p>
				<div class="flex-1 flex items-center gap-1">
					<IconsLocation class="h-5 w-5 stroke-1.7 text-amber-600" />
					<div class="">
						<p class="text-sm font-light text-slate-600 line-clamp-1">{{ property.kecamatan }}, Pekanbaru
						</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="flex items-top py-2 justify-center font-roboto">
				<p class="text-xl font-light text-slate-500">Rp. {{ property.start_price }} - Rp. {{ property.end_price }}</p>
			</div>
			<div class="border p-2 flex flex-row  items-center justify-between rounded-lg">
				<div class="flex items-center gap-2">
					<img src="/images/boy.png" class="w-12 border object-cover rounded-full h-12" alt="">
					<div class="flex-1 -space-y-1">
						<p class="text-lg font-semibold text-slate-600 ">Muslim</p>
						<p class="text-sm text-slate-500">
							0812-6655-8625
						</p>
					</div>
				</div>

				<button @click="show = !show"
					class="bg-amber-600 hover:ring-2 ring-amber-700 text-white px-3 py-2 flex items-center gap-1 rounded-full h-fit">
					<IconsMessage class="w-5 h-5 mt-0.5" />
					<p class="font-light">Hubungi</p>
				</button>
			</div>

			<div class="w-full h-full grid gap-4">
				<div class="z-0 space-y-1 w-full h-auto">
					<p class="text-lg font-semibold text-slate-700">Lokasi</p>
					<hr>
					<div class="w-full h-60 bg-red-200 relative">
						<div class="absolute w-full h-full bg-white z-20">
						</div>
						<ClientOnly fallback="Loading maps...">
							<MapView :lat="property.lat" :long="property.long" class="w-full h-full" />
						</ClientOnly>
					</div>
					<div class="flex items-center gap-2">
						<div class="flex-1">
							<p class="text-base font-medium text-slate-600">{{ property.alamat }}</p>
							<p class="text-sm font-normal text-slate-500">{{ property.kecamatan }}, Pekanbaru</p>
						</div>
						<button class="bg-white hover:bg-amber-600 border border-amber-600 rounded-md p-1 group">
							<IconsNavigation class="w-6 h-6 group-hover:text-white text-amber-600" />
						</button>
					</div>
				</div>

				<div class="z-0 space-y-1">
					<p class="text-lg font-semibold text-slate-700">Informasi Unit</p>
					<hr>
					<div class="grid text-slate-500 gap-4 text-base font-roboto">
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<!-- <IconsBed class="h-6 w-6 text-amber-600" /> -->
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="h-6 w-6 text-amber-600">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M14 12v.01" />
									<path d="M3 21h18" />
									<path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
								</svg>
							</div>
							<p class="font-normal text-slate-600">288 Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsBath class="h-6 w-6 text-amber-600" />
							</div>
							<p class="font-normal text-slate-600">1 Kamar Mandi / Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsToolsKitchen class="h-6 w-6 text-amber-600" />
							</div>
							<p class="font-normal text-slate-600">1 Dapur / Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsBed class="h-6 w-6 text-amber-600" />
							</div>
							<p class="font-normal text-slate-600">1 Kamar Tidur / Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="h-6 w-6 text-amber-600">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
									<path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
									<path d="M8 12h8" />
									<path d="M7 19v2" />
									<path d="M17 19v2" />
								</svg>
							</div>
							<p class="font-normal text-slate-600">1 Ruang Tamu / Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
									stroke="currentColor" class="h-6 w-6 text-amber-600">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
								</svg>

							</div>
							<p class="font-normal text-slate-600">1 Ruang Keluarga / Kamar</p>
						</div>
					</div>
				</div>

				<div class="z-0 space-y-1">
					<p class=" text-lg font-semibold text-slate-700">Deskripsi</p>
					<hr>
					<div class="text-base font-roboto text-slate-500">
						Fasilitas :
						<p>Lantar Dasar : R. Bersama, R. TIdur Penjaga, R. Panel, Parkir Motor, Area Komersil, R. Janitor, R. Shaft
							Jamaah dan Area Taman Rumput.</p>
						<p>Lantai Dua : 24 Unit Hunian T-24, R. Janitor, Shaft Panel dan R. Bersama</p>
						<p>Lantai Tiga : 24 Unit Hunian T-24, R. Janitor, Shaft Panel dan R. Bersama</p>
						<p>Lantai Empat : 24 Unit Hunian T-24, R. Janitor, Shaft Panel dan R. Bersama</p>
						<p>Lantai Lima : 24 Unit Hunian T-24, R. Janitor, Shaft Panel dan R. Bersama</p>
						<p>Lantai Atap : R. Tangki Air</p>
					</div>
				</div>

				<!-- <div class="z-0 space-y-1">
					<p class=" text-lg font-semibold text-slate-700">Siteplan</p>
					<hr>
					<div class="">
						<img src="~/assets/images/site.jpg" class="w-full h-auto border" alt="">
					</div>
				</div> -->

			</div>
		</div>
		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
	<div v-if="show" class="absolute top-0 w-full flex items-center justify-center h-screen bg-black/50 z-50">
		<div class="w-[90%] bg-white rounded-md h-auto p-4">
			<form action="" class="space-y-2">
				<div class="text-slate-600">
					<p class="text-lg">Formulir</p>
					<p class="text-base">Isi formulir untuk melanjutkan</p>
				</div>
				<hr>
				<input type="text" class="w-full bg-slate-100 p-1 py-2 outline-none" placeholder="Nama">
				<input type="text" class="w-full bg-slate-100 p-1 py-2 outline-none" placeholder="Nomor telpon">
				<div class="w-full flex gap-2 pt-4">
					<button @click="show = !show" class="bg-white ring-1 flex-1 rounded-full ring-amber-600">Tutup</button>
					<a href="https://wa.me/081266558625" target="_blank"
						class="flex-1 flex space-x-2 justify-center items-center bg-green-600 text-white py-2 rounded-full">
						<span>Lanjutkan di WA</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
							<path
								d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
						</svg>
					</a>
				</div>
			</form>
		</div>
	</div>
</template>
