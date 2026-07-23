<template>
  <section id="cronograma" class="section schedule">
    <div class="container">
      <span class="eyebrow">Cronograma</span>
      <h2 class="section-title">
        O percurso, <span class="accent-red">semana a semana</span>
      </h2>
      <p class="section-lead">
        Sempre às <strong>20h (horário de Brasília)</strong>, online e ao vivo, com gravação
        disponível depois.
      </p>
      <ol class="schedule__list">
        <li v-for="(encontro, i) in ENCONTROS" :key="encontro.data" class="schedule__item">
          <div class="schedule__date">
            <span class="schedule__num">{{ i + 1 }}º</span>
            <span class="schedule__day">{{ encontro.data }}</span>
          </div>
          <div class="schedule__body">
            <h3>{{ encontro.titulo }}</h3>
            <p>{{ encontro.descricao }}</p>
          </div>
        </li>
      </ol>
      <p class="schedule__note">* Os temas de cada encontro podem ser ajustados conforme o ritmo da turma.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ENCONTROS } from '~/utils/site'
</script>

<style scoped>
.schedule {
  background: var(--white);
}

.schedule__list {
  list-style: none;
  padding: 0;
  margin: 44px 0 0;
  display: grid;
  gap: 16px;
  max-width: 800px;
}

.schedule__item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 24px;
  background: var(--cream-soft);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 22px 26px;
  align-items: center;
}

.schedule__date {
  text-align: center;
  font-family: var(--font-heading);
  border-right: 2px solid var(--cream-dark);
  padding-right: 20px;
}

.schedule__num {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--red);
}

.schedule__day {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--blue);
}

.schedule__body h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.schedule__body p {
  margin: 0;
  font-size: 0.96rem;
  opacity: 0.9;
}

.schedule__note {
  margin-top: 20px;
  font-size: 0.85rem;
  opacity: 0.65;
}

@media (max-width: 560px) {
  .schedule__item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .schedule__date {
    border-right: none;
    border-bottom: 2px solid var(--cream-dark);
    padding: 0 0 10px;
    display: flex;
    gap: 12px;
    align-items: baseline;
    justify-content: flex-start;
  }
}
</style>
