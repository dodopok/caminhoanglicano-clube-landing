<template>
  <section class="section final">
    <div class="container text-center">
      <h2 class="final__title">
        O Caminho é antigo.<br />
        <span>A caminhada começa dia 05/08.</span>
      </h2>
      <p class="final__text">
        5 encontros ao vivo · entrevista inédita com o autor · materiais exclusivos ·
        gravações incluídas · 7 dias de garantia
      </p>
      <a href="#planos" class="btn btn--light btn--lg">Garantir minha vaga agora</a>
      <p class="final__small">Inscrições encerram em 04/08 — não deixe para a última hora.</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.final {
  background: var(--red);
  color: var(--cream-soft);
}

.final__title {
  color: var(--cream-soft);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
}

.final__title span {
  color: var(--gold);
}

.final__text {
  max-width: 620px;
  margin: 0 auto 32px;
  font-size: 1.08rem;
  opacity: 0.95;
}

.final__small {
  margin-top: 18px;
  font-size: 0.88rem;
  opacity: 0.8;
  font-family: var(--font-heading);
  font-weight: 600;
}
</style>
