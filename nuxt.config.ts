// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: [
		'@nuxtjs/tailwindcss',
    'nuxt3-leaflet',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
		'@pinia/nuxt',
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Inter: true,
      Roboto: true,
      Raleway: true,
      'Madimi+One': true,
      'Playfair+Display': true
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter'],
            roboto: ['Roboto'],
            raleway: ['Raleway'],
          }
        }
      }
    }
  }
})
