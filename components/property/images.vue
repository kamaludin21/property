<script setup>
const props = defineProps({
  path: String
})

</script>

<template>
	<!-- <img src="https://source.unsplash.com/2d4lAQAlbDA" class="w-full h-full object-cover" alt=""> -->
	<div>
		<Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :loop="true" :effect="'creative'"
			:pagination="true" :autoplay="{
			delay: 8000,
			disableOnInteraction: true,
		}" :creative-effect="{
			prev: {
				shadow: false,
				translate: ['-20%', 0, -1],
			},
			next: {
				translate: ['100%', 0, 0],
			},
		}">
			<SwiperSlide v-for="n in 6" :key="n">
				<div class="relative">
					<img class="w-full h-56 object-cover bg-cover" loading="lazy" :src="`/images/${path}/${n}.png`" />
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style>
.swiper-pagination-bullet {
    background-color: #d97706 !important;
}
</style>