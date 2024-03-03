<script setup>
const show = ref(false)
</script>

<template>
	<div class="h-full bg-white border overflow-auto h-screen space-y-2 scrollbar-hide">
		<!-- image -->
		<div class="h-auto w-full relative">
			<PropertyImages />
		</div>
		<!-- Info -->
		<div class="p-2 space-y-2">
			<div>
				<p class="text-xl font-semibold text-slate-700">Rumah Type 32 - 4 Kamar 2 Kamar Mandi</p>
				<div class="flex-1 flex items-center gap-1 text-slate-600">
					<IconsLocation class="h-5 w-5 mt-0.5 stroke-1.7 text-amber-600" />
					<div class="">
						<p class="text-sm font-light text-slate-600 line-clamp-1">Payung Sekaki, Jalan Sukajadi Perum Segar Sari
						</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="flex items-top py-2 justify-center">
				<p class="text-xl font-light text-slate-500">Rp.</p>
				<p class="text-4xl line-clamp-1 font-bold text-amber-600">790.000.000,00</p>
			</div>
			<div class="border p-2 flex flex-row  items-center justify-between rounded-lg">
				<div class="flex items-center gap-2">
					<img src="~/assets/images/user.jpg" class="w-12 border object-cover rounded-full h-12" alt="">
					<div class="flex-1 -space-y-1">
						<p class="text-lg font-medium text-slate-600">Jhon F. Kennedy</p>
						<p class="text-sm  text-slate-500">
							Makmur Property
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
				<div class="z-0 space-y-2 pb-6 w-full h-60">
					<p class="text-slate-700 text-xl font-medium">Lokasi</p>
					<ClientOnly fallback="Loading maps...">
						<MapView class="w-full h-full" />
					</ClientOnly>
				</div>

				<div class="z-0 space-y-2">
					<p class="text-slate-700 text-xl font-medium">Informasi Unit</p>
					<hr>
					<div class="grid grid-cols-2 gap-4">
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsHomeMark class="h-6 w-6 text-amber-600" />
							</div>
							<p class="text-lg font-normal text-slate-600">4 Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsBath class="h-6 w-6 text-amber-600" />
							</div>
							<p class="text-lg font-normal text-slate-600">2 Kamar Mandi</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-1 rounded bg-amber-100">
								<IconsToolsKitchen class="h-6 w-6 text-amber-600" />
							</div>
							<p class="text-lg font-normal text-slate-600">1 Dapur</p>
						</div>
					</div>
				</div>

				<div class="z-0 space-y-2">
					<p class="text-slate-700 text-xl font-medium">Deskripsi</p>
					<hr>
					<p class="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium mollitia
						atque
						deserunt sit illum in sequi harum, nostrum recusandae dolor quae libero nemo a minus ipsam iusto vitae
						placeat maiores?</p>
				</div>

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
					<button class="flex-1 flex space-x-2 justify-center items-center bg-green-600 text-white py-2 rounded-full">
						<span>Lanjutkan di WA</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
							<path
								d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
						</svg>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>