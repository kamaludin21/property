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
				<p class="text-center text-xl font-light text-amber-600">Message</p>
			</div>
		</div>

		<!-- Result card -->
		<div class="h-screen space-y-2 overflow-y-auto scrollbar-hide p-2 bg-white rounded-lg ring-1 ring-slate-200">
			<div class="flex items-center gap-x-2 p-2 ring-1 rounded-md ring-slate-100">
				<img src="https://source.unsplash.com/cIEb4UJ4ruk" class="w-12 h-12 object-cover rounded-md" alt="">
				<div class="w-full">
					<div class="flex w-full items-center justify-between">
						<p class="text-sm font-medium text-slate-600">Hannah Greyson</p>
						<p class="text-xs text-slate-400">1 Januari 2024</p>
					</div>
					<p class="text-xs text-slate-600 font-normal line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Eos dolores eum minus labore iure laudantium et cupiditate rem reiciendis, voluptatum commodi magnam
						sed. Dolorem maxime fugit dolorum nihil nam dicta.</p>
				</div>
			</div>
			<div class="flex items-center gap-x-2 p-2 ring-1 rounded-md ring-slate-100">
				<img src="https://source.unsplash.com/RiDxDgHg7pw" class="w-12 h-12 object-cover rounded-md" alt="">
				<div class="w-full">
					<div class="flex w-full items-center justify-between">
						<p class="text-sm font-medium text-slate-600">Michael Matt</p>
						<p class="text-xs text-slate-400">18 Januari 2024</p>
					</div>
					<p class="text-xs text-slate-600 font-normal line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Eos dolores eum minus labore iure laudantium et cupiditate rem reiciendis, voluptatum commodi magnam
						sed. Dolorem maxime fugit dolorum nihil nam dicta.</p>
				</div>
			</div>
				<div class="flex items-center gap-x-2 p-2 ring-1 rounded-md ring-slate-100">
					<img src="https://source.unsplash.com/-DJXxqZ7mo8" class="w-12 h-12 object-cover rounded-md" alt="">
					<div class="w-full">
						<div class="flex w-full items-center justify-between">
							<p class="text-sm font-medium text-slate-600">Jennifer Lee</p>
							<p class="text-xs text-slate-400">18 Januari 2024</p>
						</div>
						<p class="text-xs text-slate-600 font-normal line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eos dolores eum minus labore iure laudantium et cupiditate rem reiciendis, voluptatum commodi magnam
							sed. Dolorem maxime fugit dolorum nihil nam dicta.</p>
					</div>
				</div>
			<!-- Scroll helper -->
			<div class="pb-44 pt-4">
				<!-- <p class="text-sm text-center text-slate-400">End of list...</p> -->
			</div>
		</div>

		<!-- Scroll helper -->
		<div class="py-32"></div>
	</div>
</template>