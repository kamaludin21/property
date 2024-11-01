<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.include()
const activeTab = ref(0);
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
				<p class="text-center text-xl font-light text-amber-600">Pengajuan</p>
			</div>
		</div>

		<!-- Result card -->
		<div class="h-screen space-y-2 overflow-y-auto scrollbar-hide p-2 bg-white rounded-lg ring-1 ring-slate-200">
			<div class="flex bg-slate-200 border border-gray-200 rounded-lg p-1">
				<button @click="activeTab = 0" :class="[
					'flex-1 p-2 rounded-md',
					activeTab === 0
						? 'bg-white border text-amber-600'
						: 'text-slate-400 hover:text-slate-600 hover:underline'
				]">
					Alur
				</button>
				<button @click="activeTab = 1" :class="[
					'flex-1 p-2 rounded-md',
					activeTab === 1
						? 'bg-white border text-amber-600'
						: 'text-slate-400 hover:text-slate-600 hover:underline'
				]">
					Persyaratan
				</button>
			</div>

			<div class="">
				<div v-if="activeTab == 0">
					<img src="/images/alur/alur-head.jpg" class="w-full h-auto" alt="">
					<img src="/images/alur/alur-bagan.jpg" class="w-full h-auto" alt="">
					<img src="/images/alur/alur-ket.jpg" class="w-full h-auto" alt="">
					<div class="h-44">
					</div>
				</div>
				<div v-if="activeTab == 1">
					<img src="/images/syarat/syarat-head.jpg" class="w-full h-auto" alt="">
					<img src="/images/syarat/syarat-bagan.jpg" class="w-full h-auto" alt="">
					<img src="/images/syarat/syarat-syarat1.jpg" class="w-full h-auto" alt="">
					<img src="/images/syarat/syarat-syarat2.jpg" class="w-full h-auto" alt="">
					<img src="/images/syarat/syarat-syarat3.jpg" class="w-full h-auto" alt="">
					<div class="h-44">
					</div>
				</div>
			</div>
		</div>

		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
</template>