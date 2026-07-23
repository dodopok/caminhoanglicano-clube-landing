<template>
  <section id="bonus" class="section bonus">
    <div class="container">
      <div class="bonus__card">
        <span class="eyebrow eyebrow--light">Bônus exclusivo</span>
        <h2 class="bonus__title">
          Uma entrevista <span>inédita</span> com o autor — que você verá antes de todo mundo
        </h2>
        <p class="bonus__text">
          O Rev. Thomas McKenzie partiu deixando um legado imenso para a igreja. Antes disso, o
          Rev. Douglas Araujo gravou com ele uma entrevista para o canal
          <strong>Teologueiros</strong> — um material que <strong>nunca foi publicado</strong>,
          em nenhum lugar.
        </p>
        <p class="bonus__text">
          Os participantes do clube terão <strong>acesso em primeira mão</strong> a esse
          registro histórico: o autor falando, com suas próprias palavras, sobre o Caminho que
          você estará trilhando na leitura.
        </p>
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

<script setup lang="ts"></script>

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
