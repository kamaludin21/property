<template>
  <div class="p-2 border bg-slate-100 overflow-hidden h-screen space-y-2">
		<div class="flex relative items-center">
			<button class="absolute left-0 p-1 hover:bg-amber-400/20 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
			</button>
			<div class="w-full">
				<p class="text-center text-xl font-light text-amber-600">Profil</p>
			</div>
		</div>

		<!-- Result card -->
		<div class="h-screen space-y-2 overflow-y-auto scrollbar-hide p-4 bg-white rounded-lg ring-1 ring-slate-200">

			<div class="flex space-x-2 ">
				<img src="https://source.unsplash.com/GpeCY_OxtdY" class="w-16 h-16 object-cover rounded-full" alt="">
				<div class="flex-1 text-2xl -space-y-1 font-light">
					<p>Safiya</p>
					<p>Amani</p>
				</div>
			</div>

			<div class="pt-4 space-y-2">
				<a href="" class="flex items-center gap-x-4 ">
					<div class="p-1 bg-slate-100 rounded-md">
						<IconsUserCircle class="h-5 h-5 text-slate-500" />
					</div>
					<p class="text-lg font-light text-slate-700">Profil</p>
				</a>
				<hr>
				<a href="" class="flex items-center gap-x-4 ">
					<div class="p-1 bg-slate-100 rounded-md">
						<IconsNotification class="h-5 h-5 text-slate-500" />
					</div>
					<p class="text-lg font-light text-slate-700">Notifikasi</p>
				</a>
				<hr>
				<a href="" class="flex items-center gap-x-4 ">
					<div class="p-1 bg-slate-100 rounded-md">
						<IconsLockSquare class="h-5 h-5 text-slate-500" />
					</div>
					<p class="text-lg font-light text-slate-700">Keamanan</p>
				</a>
				<hr>
				<a href="" class="flex items-center gap-x-4 ">
					<div class="p-1 bg-slate-100 rounded-md">
						<IconsTransferOut class="h-5 h-5 text-slate-500" />
					</div>
					<p class="text-lg font-light text-slate-700">Keluar</p>
				</a>
				<hr>
			</div>
			
			<!-- Scroll helper -->
			<div class="pb-44 pt-4">
			</div>
		</div>

		<!-- Scroll helper -->
		<div class="py-32"></div>
  </div>
</template>

<script setup>
const filter = ref(false)
</script>