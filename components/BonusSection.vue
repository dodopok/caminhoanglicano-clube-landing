<template>
  <section id="bonus" class="section bonus">
    <div class="container">
      <div class="bonus__card">
        <span class="eyebrow eyebrow--light">Bônus exclusivo</span>
        <h2 class="bonus__title">
          Existe uma entrevista com Thomas McKenzie que
          <span>ninguém nunca assistiu</span>
        </h2>
        <p class="bonus__text">
          O Rev. Douglas Araujo gravou uma conversa com o autor para o canal
          <strong>Teologueiros</strong>. O vídeo nunca foi ao ar. Com o falecimento de
          Thomas, a gravação ficou guardada. Até agora.
        </p>
        <p class="bonus__text">
          No clube, você assiste a esse registro histórico
          <strong>antes de qualquer outra pessoa</strong>: o próprio autor falando sobre o
          Caminho que você estará trilhando na leitura.
        </p>
        <div class="bonus__video">
          <iframe
            v-if="SITE.youtubeTeaserId"
            :src="`https://www.youtube-nocookie.com/embed/${SITE.youtubeTeaserId}`"
            title="Trecho da entrevista inédita com Thomas McKenzie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <div v-else class="bonus__video-placeholder">
            <span class="bonus__play">▶</span>
            <p>Trecho da entrevista em breve</p>
          </div>
        </div>
        <ul class="bonus__list">
          <li>🎬 Vídeo inédito e exclusivo da entrevista com Thomas McKenzie</li>
          <li>📂 Materiais digitais exclusivos de apoio à leitura</li>
          <li>⛪ Conversas com quem vive o anglicanismo no Brasil hoje</li>
        </ul>
        <a href="#planos" class="btn btn--light btn--lg">Quero acesso ao bônus</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE } from '~/utils/site'
</script>

<style scoped>
.bonus {
  background: var(--blue);
}

.bonus__card {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: var(--cream-soft);
}

.bonus__title {
  color: var(--cream-soft);
  font-size: clamp(1.6rem, 3.4vw, 2.3rem);
  font-weight: 800;
}

.bonus__title span {
  color: var(--gold);
}

.bonus__text {
  font-size: 1.1rem;
  opacity: 0.95;
}

.bonus__video {
  max-width: 640px;
  margin: 32px auto 0;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(255, 253, 249, 0.25);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.35);
}

.bonus__video iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.bonus__video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(160deg, var(--blue-dark), #1f3038);
}

.bonus__play {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding-left: 5px;
}

.bonus__video-placeholder p {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.85;
}

.bonus__list {
  list-style: none;
  padding: 24px 28px;
  margin: 28px auto;
  max-width: 540px;
  display: grid;
  gap: 12px;
  text-align: left;
  background: rgba(255, 253, 249, 0.08);
  border: 1px solid rgba(255, 253, 249, 0.2);
  border-radius: var(--radius);
  font-size: 1.02rem;
}

@media (max-width: 560px) {
  .bonus__list {
    padding: 18px 20px;
  }
}
</style>
