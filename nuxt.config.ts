export default defineNuxtConfig({
  compatibilityDate: '2026-07-23',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#7B3730' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/images/capa-livro.jpeg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/obrigado', '/quase-la'],
    },
  },
})
