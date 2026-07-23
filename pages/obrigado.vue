<template>
  <div class="ty">
    <div class="container ty__inner">
      <div class="ty__badge">✓</div>
      <span class="eyebrow">Inscrição confirmada</span>
      <h1 class="ty__title">
        Bem-vindo(a) ao <span class="accent-red">Caminho</span>!
      </h1>
      <p class="ty__lead">
        Sua vaga no Clube do Livro está garantida. Que alegria ter você conosco nesta
        jornada. Agora falta pouco: siga os passos abaixo para não perder nada.
      </p>

      <ol class="ty__steps">
        <li>
          <div class="ty__step-num">1</div>
          <div>
            <h3>Confira seu e-mail</h3>
            <p>
              A Hotmart acabou de enviar seus dados de acesso para o e-mail usado na compra.
              Não achou? Verifique a caixa de spam ou promoções. Se optou pelo plano com
              ebook, o livro chega no seu e-mail da Amazon (Kindle) separadamente.
            </p>
          </div>
        </li>
        <li>
          <div class="ty__step-num">2</div>
          <div>
            <h3>Entre no grupo do Telegram</h3>
            <p>
              É por lá que enviaremos os links dos encontros, lembretes e os materiais
              exclusivos. Entre agora para não ficar de fora:
            </p>
            <a
              :href="SITE.telegramGrupo"
              class="btn btn--telegram"
              rel="noopener"
              @click="trackTelegram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M21.9 4.3 18.5 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9L17.6 6c.4-.3-.1-.5-.6-.2L6.9 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.7 2.4c.9-.3 1.6.2 1.2 1.9Z"/>
              </svg>
              Entrar no grupo do Telegram
            </a>
          </div>
        </li>
        <li>
          <div class="ty__step-num">3</div>
          <div>
            <h3>Marque na agenda</h3>
            <p>
              Nosso primeiro encontro é <strong>quarta-feira, 05/08, às 20h</strong> (horário
              de Brasília). Depois, toda quarta até 02/09. Reserve esse horário:
            </p>
            <ul class="ty__dates">
              <li v-for="e in ENCONTROS" :key="e.data">
                <strong>{{ e.data }}</strong> · {{ e.titulo }}
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <div class="ty__note">
        <p>
          Precisa de ajuda? Responda o e-mail da Hotmart ou fale com a gente no grupo do
          Telegram. Estamos por aqui. 🧭
        </p>
      </div>

      <NuxtLink to="/" class="ty__back">← Voltar para a página do clube</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE, ENCONTROS } from '~/utils/site'

useSeoMeta({
  title: 'Inscrição confirmada | Clube do Livro O Caminho Anglicano',
  robots: 'noindex, nofollow',
})

function trackTelegram() {
  const w = window as { fbq?: (a: string, b: string) => void }
  if (w.fbq) w.fbq('track', 'Contact')
}

// Dispara o evento de conversão para o Pixel (se estiver ativo).
// Obs.: a conversão oficial de venda deve ser configurada também na integração
// da Hotmart com a Meta, pois é ela quem confirma o pagamento.
onMounted(() => {
  const w = window as { fbq?: (a: string, b: string, c?: object) => void }
  if (w.fbq) w.fbq('track', 'Purchase', { currency: 'BRL', value: 120 })
})
</script>

<style scoped>
.ty {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.ty__inner {
  max-width: 680px;
}

.ty__badge {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--olive);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 24px;
  box-shadow: 0 10px 26px rgba(124, 131, 85, 0.4);
}

.ty__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
}

.ty__lead {
  font-size: 1.15rem;
  max-width: 560px;
  margin-bottom: 40px;
}

.ty__steps {
  list-style: none;
  padding: 0;
  margin: 0 0 36px;
  display: grid;
  gap: 22px;
}

.ty__steps > li {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
  background: var(--white);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 24px 26px;
}

.ty__step-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--red);
  color: var(--cream-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
}

.ty__steps h3 {
  font-size: 1.15rem;
  margin-bottom: 6px;
}

.ty__steps p {
  font-size: 0.98rem;
  margin: 0;
}

.btn--telegram {
  background: #2aabee;
  color: #fff;
  margin-top: 16px;
  box-shadow: 0 8px 24px rgba(42, 171, 238, 0.35);
}

.btn--telegram:hover {
  background: #1d8fca;
}

.ty__dates {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 6px;
  font-size: 0.95rem;
}

.ty__dates strong {
  color: var(--blue);
}

.ty__note {
  background: var(--cream-soft);
  border: 1px dashed var(--olive);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 28px;
}

.ty__note p {
  margin: 0;
  font-size: 0.98rem;
}

.ty__back {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--red);
  text-decoration: none;
}

.ty__back:hover {
  text-decoration: underline;
}

@media (max-width: 560px) {
  .ty__steps > li {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .btn--telegram {
    width: 100%;
  }
}
</style>
