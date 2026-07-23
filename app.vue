<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { SITE } from '~/utils/site'

// Meta Pixel: carregado apenas quando SITE.metaPixelId estiver preenchido.
// Fica no app.vue para valer em todas as páginas (landing e obrigado).
if (SITE.metaPixelId) {
  useHead({
    script: [
      {
        innerHTML: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${SITE.metaPixelId}');fbq('track','PageView');`,
      },
    ],
  })
}

// Google Analytics 4: carregado apenas quando SITE.ga4Id estiver preenchido
if (SITE.ga4Id) {
  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`, async: true },
      {
        innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${SITE.ga4Id}');`,
      },
    ],
  })
}
</script>
