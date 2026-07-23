<template>
  <section class="section recovery">
    <div class="container recovery__inner">
      <div>
        <h2>Ainda não decidiu?</h2>
        <p>
          Tudo bem, decisão boa se toma com calma. Entre no grupo do Telegram e receba um
          lembrete antes das inscrições fecharem, além de conteúdos sobre o livro e a
          tradição anglicana.
        </p>
      </div>
      <a
        :href="SITE.telegramGrupo"
        class="btn btn--telegram"
        rel="noopener"
        @click="trackLead"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M21.9 4.3 18.5 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9L17.6 6c.4-.3-.1-.5-.6-.2L6.9 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.7 2.4c.9-.3 1.6.2 1.2 1.9Z"/>
        </svg>
        Quero receber o lembrete
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE } from '~/utils/site'

function trackLead() {
  const w = window as { fbq?: (a: string, b: string) => void }
  if (w.fbq) w.fbq('track', 'Lead')
}
</script>

<style scoped>
.recovery {
  background: var(--cream-dark);
  padding: 56px 0;
}

.recovery__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  max-width: 880px;
}

.recovery h2 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.recovery p {
  margin: 0;
  max-width: 520px;
  font-size: 0.98rem;
}

.btn--telegram {
  background: #2aabee;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(42, 171, 238, 0.35);
}

.btn--telegram:hover {
  background: #1d8fca;
}

@media (max-width: 720px) {
  .recovery__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }

  .btn--telegram {
    width: 100%;
  }
}
</style>
