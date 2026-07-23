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
const ogImage = `${SITE.url}/images/livro-mesa.jpeg`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
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
</script>
