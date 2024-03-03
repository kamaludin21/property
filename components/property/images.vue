<script setup>
const data = [
	{
		'name': '1',
		'images': 'https://source.unsplash.com/2d4lAQAlbDA'
	},
	{
		'name': '1',
		'images': 'https://source.unsplash.com/R-LK3sqLiBw'
	},
	{
		'name': '1',
		'images': 'https://source.unsplash.com/bjej8BY1JYQ'
	}
];

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
			<SwiperSlide v-for="slide in data" :key="slide.id">
				<div class="relative">
					<img class="w-full h-full object-cover" loading="lazy" :alt="slide.name" :src="slide.images" />
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