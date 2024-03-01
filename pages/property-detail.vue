<template>
	<div class="h-full bg-white border overflow-auto h-screen space-y-2 scrollbar-hide">
		<!-- image -->
		<div class="h-1/3 w-full relative">
			<div class="w-full h-full">
				<img src="https://source.unsplash.com/2d4lAQAlbDA" class="w-full h-full object-cover" alt="">
			</div>
			<div class="absolute bottom-2 flex justify-center w-full">
				<div class="px-3 pt-0.5 pb-1 rounded-full bg-black/30 backdrop-blur-md w-fit">
					<p class="text-white text-sm font-medium">1 / 1</p>
				</div>
			</div>
		</div>
		<!-- Info -->
		<div class="p-2 space-y-2">
			<div>
				<p class="text-xl font-semibold text-slate-700">Rumah Type 32 - 4 Kamar 2 Kamar Mandi</p>
				<div class="flex-1 flex items-center gap-1 text-slate-600">
					<IconsLocation class="h-5 w-5 mt-0.5 stroke-1.7 text-amber-600" />
					<div class="">
						<p class="text-sm font-light text-slate-600 line-clamp-1">Payung Sekaki, Jalan Sukajadi Perum Segar Sari</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="flex items-end py-2">
				<p class="text-base font-light leading-4 text-slate-500">Rp.</p>
				<p class="text-3xl text-baseline leading-7 font-bold text-amber-600">1.000.000.000,00</p>
			</div>
			<div class="border p-2 flex flex-row  items-center justify-between rounded-lg">
				<div class="flex gap-2">
					<img src="https://source.unsplash.com/W5lWvWaHpvs" class="w-12 object-cover rounded-full h-12" alt="">
					<div class="flex-1">
						<p class="text-bas	e text-slate-600">Jhon F. Kennedy</p>
						<p class="text-sm text-slate-500">
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
					<p class="text-slate-600 text-sm font-medium">Lokasi</p>
					<!-- <ClientOnly fallback="Loading maps..."> -->
					<MapView class="w-full h-full" />
					<!-- </ClientOnly> -->
				</div>

				<div class="z-0 space-y-2">
					<p class="text-slate-600 text-sm font-medium">Informasi Unit</p>
					<div class="grid grid-cols-2 gap-4">
						<div class="flex items-center gap-2">
							<div class="p-0.5 rounded bg-amber-100">
								<IconsHome class="h-5 w-5 text-amber-600" />
							</div>
							<p class="text-sm font-normal text-slate-600">Rumah</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-0.5 rounded bg-amber-100">

								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5z" />
									<path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
									<path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
								</svg>
							</div>
							<p class="text-sm font-normal text-slate-600">4 Kamar</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-0.5 rounded bg-amber-100">

								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
									<path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
									<path d="M4 21l1 -1.5" />
									<path d="M20 21l-1 -1.5" />
								</svg>
							</div>
							<p class="text-sm font-normal text-slate-600">2 Kamar Mandi</p>
						</div>
						<div class="flex items-center gap-2">
							<div class="p-0.5 rounded bg-amber-100">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path
										d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
								</svg>
							</div>
							<p class="text-sm font-normal text-slate-600">1 Dapur</p>
						</div>
					</div>
				</div>

				<div class="z-0 space-y-2">
					<p class="text-slate-600 text-sm font-medium">Informasi Unit</p>
					<p class="text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium mollitia
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

<script setup>
const show = ref(false)
</script>