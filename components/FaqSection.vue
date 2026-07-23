<template>
  <section id="faq" class="section faq">
    <div class="container faq__inner">
      <div>
        <span class="eyebrow">Perguntas frequentes</span>
        <h2 class="section-title">Ainda com <span class="accent-blue">dúvidas?</span></h2>
        <p class="section-lead">
          Se a sua pergunta não estiver aqui, fale com a gente — o livro responde centenas de
          perguntas, e nós respondemos as suas também. 😉
        </p>
      </div>
      <div class="faq__list">
        <details v-for="item in FAQ" :key="item.pergunta" class="faq__item">
          <summary>{{ item.pergunta }}</summary>
          <p>{{ item.resposta }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FAQ } from '~/utils/site'
</script>

<style scoped>
.faq {
  background: var(--white);
}

.faq__inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 56px;
  align-items: start;
}

.faq__list {
  display: grid;
  gap: 12px;
}

.faq__item {
  background: var(--cream-soft);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 0 22px;
}

.faq__item summary {
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  padding: 18px 0;
  list-style: none;
  position: relative;
  padding-right: 32px;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary::after {
  content: '+';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: var(--red);
  transition: transform 0.2s ease;
}

.faq__item[open] summary::after {
  content: '−';
}

.faq__item p {
  margin: 0;
  padding: 0 0 20px;
  font-size: 0.97rem;
}

@media (max-width: 900px) {
  .faq__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
