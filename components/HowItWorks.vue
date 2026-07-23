<template>
  <section id="como-funciona" class="section how">
    <div class="container">
      <span class="eyebrow">Como funciona</span>
      <h2 class="section-title">
        Ler sozinho, todo mundo começa.
        <span class="accent-red">Terminar é outra história.</span>
      </h2>
      <p class="section-lead">
        No clube você lê no ritmo certo, discute cada parte ao vivo com quem entende do
        assunto e chega à última página com suas perguntas respondidas. Funciona assim:
      </p>
      <div class="how__grid">
        <article v-for="item in items" :key="item.titulo" class="how__card">
          <div class="how__icon">{{ item.icone }}</div>
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descricao }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    icone: '🗓️',
    titulo: '5 encontros ao vivo',
    descricao:
      'Toda quarta-feira, às 20h, de 05/08 a 02/09. Encontro online, com espaço para suas perguntas e conversa de verdade.',
  },
  {
    icone: '🎥',
    titulo: 'Gravações incluídas',
    descricao:
      'A vida acontece. Se você perder uma quarta, a gravação estará lá esperando por você.',
  },
  {
    icone: '📚',
    titulo: 'Materiais exclusivos',
    descricao:
      'Conteúdos digitais preparados para o clube, que acompanham a leitura de cada semana e aprofundam o que o livro apresenta.',
  },
  {
    icone: '🧭',
    titulo: 'Guias experientes',
    descricao:
      'O tradutor do livro e uma teóloga especialista em Novo Testamento lendo com você. Contexto, bastidores e aplicação prática.',
  },
]
</script>

<style scoped>
.how {
  background: var(--white);
}

.how__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 44px;
}

.how__card {
  background: var(--cream-soft);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 26px 22px;
}

.how__icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.how__card h3 {
  font-size: 1.08rem;
  font-weight: 700;
}

.how__card p {
  font-size: 0.96rem;
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 980px) {
  .how__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .how__grid {
    grid-template-columns: 1fr;
  }
}
</style>
