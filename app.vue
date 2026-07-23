<template>
  <div>
    <UrgencyBar />
    <AppHeader />
    <main>
      <HeroSection />
      <HowItWorks />
      <BookSection />
      <BonusSection />
      <ScheduleSection />
      <MentorsSection />
      <PricingSection />
      <FaqSection />
      <RecoverySection />
      <FinalCta />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { SITE, FAQ } from '~/utils/site'

const title = 'Clube do Livro O Caminho Anglicano | 5 encontros ao vivo com o tradutor'
const description =
  'Leia "O Caminho Anglicano" de Thomas McKenzie com o Rev. Douglas Araujo (tradutor da obra) e a Revda. Cynthia Muniz. 5 encontros ao vivo, entrevista inédita com o autor e materiais exclusivos. De 05/08 a 02/09, quartas às 20h.'
const ogImage = `${SITE.url}/images/og-clube.jpg`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Clube do Livro O Caminho Anglicano — 5 encontros ao vivo com o tradutor da obra, de 05/08 a 02/09, quartas às 20h',
  ogType: 'website',
  ogUrl: SITE.url,
  ogLocale: 'pt_BR',
  ogSiteName: SITE.nome,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: SITE.url }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'EducationEvent',
            name: SITE.nome,
            description,
            startDate: `${SITE.inicio}T20:00:00-03:00`,
            endDate: `${SITE.fim}T22:00:00-03:00`,
            eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'VirtualLocation',
              url: SITE.url,
            },
            image: [ogImage],
            organizer: [
              { '@type': 'Person', name: 'Rev. Douglas Araujo' },
              { '@type': 'Person', name: 'Revda. Cynthia Muniz' },
            ],
            offers: [
              {
                '@type': 'Offer',
                name: 'Clube do Livro',
                price: '120.00',
                priceCurrency: 'BRL',
                url: SITE.url,
                availability: 'https://schema.org/InStock',
                validThrough: `${SITE.inicio}T20:00:00-03:00`,
              },
              {
                '@type': 'Offer',
                name: 'Clube do Livro + Ebook',
                price: '130.00',
                priceCurrency: 'BRL',
                url: SITE.url,
                availability: 'https://schema.org/InStock',
                validThrough: `${SITE.inicio}T20:00:00-03:00`,
              },
            ],
            about: {
              '@type': 'Book',
              name: 'O Caminho Anglicano',
              author: { '@type': 'Person', name: 'Thomas McKenzie' },
              translator: { '@type': 'Person', name: 'Douglas Araujo' },
              inLanguage: 'pt-BR',
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: FAQ.map((item) => ({
              '@type': 'Question',
              name: item.pergunta,
              acceptedAnswer: { '@type': 'Answer', text: item.resposta },
            })),
          },
        ],
      }),
    },
  ],
})

// Meta Pixel: carregado apenas quando SITE.metaPixelId estiver preenchido
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
