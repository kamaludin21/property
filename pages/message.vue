<script setup>
import { useNavbarStore } from '@/stores/navbar'

const navbar = useNavbarStore()
navbar.include()
const router = useRouter()
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
				<p class="text-center text-xl font-light text-amber-600">Bookmark</p>
			</div>
		</div>

		<!-- Result card -->
		<div class="h-screen space-y-2 overflow-y-auto scrollbar-hide p-2 bg-white rounded-lg ring-1 ring-slate-200">
			<NuxtLink to="/property-detail" class="flex gap-x-2 p-2 bg-white shadow rounded-lg" v-for="n in 10">
				<img :src="`/images/${n}.jpg`" class="w-1/3 h-28 object-cover rounded-md" alt="">
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

		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
</template>