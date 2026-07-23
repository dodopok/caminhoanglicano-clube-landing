<template>
  <section class="section recovery">
    <div class="container recovery__inner">
      <div>
        <h2>Ainda não decidiu?</h2>
        <p>
          Tudo bem, decisão boa se toma com calma. Entre no grupo do WhatsApp e receba um
          lembrete antes das inscrições fecharem, além de conteúdos sobre o livro e a
          tradição anglicana.
        </p>
      </div>
      <a
        :href="SITE.whatsappGrupo"
        class="btn btn--whatsapp"
        rel="noopener"
        @click="trackLead"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.5-.6c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.3-.4Z"/>
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

.btn--whatsapp {
  background: #1faa55;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(31, 170, 85, 0.35);
}

.btn--whatsapp:hover {
  background: #178a45;
}

@media (max-width: 720px) {
  .recovery__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }

  .btn--whatsapp {
    width: 100%;
  }
}
</style>
