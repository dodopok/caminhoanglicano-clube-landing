<template>
  <section id="o-livro" class="section book">
    <div class="container book__inner">
      <div class="book__photo">
        <img
          src="/images/livro-mesa.jpeg"
          alt="Exemplar físico do livro O Caminho Anglicano sobre uma mesa de madeira, ao lado de uma cruz e um cálice"
          loading="lazy"
          width="600"
          height="580"
        />
      </div>
      <div class="book__content">
        <span class="eyebrow">O livro</span>
        <h2 class="section-title">
          Um <span class="accent-blue">guia prático</span> para trilhar o Caminho Anglicano
        </h2>
        <p>
          <em>O Caminho Anglicano</em>, do Rev. Thomas McKenzie, é um guia para todos que
          desejam seguir Jesus como cristãos anglicanos. Escrito tanto para iniciantes quanto
          para quem quer se aprofundar, o livro responde a
          <strong>centenas de perguntas sobre história, teologia e adoração</strong> — tudo em
          linguagem acessível e direta.
        </p>
        <p>
          Conheça este ramo antigo, mas em rápido crescimento, do Corpo de Cristo. E leia na
          melhor companhia possível: a tradução para o português foi feita pelo
          <strong>Rev. Douglas Araujo</strong>, que vai guiar o clube compartilhando os
          bastidores e as riquezas de cada capítulo.
        </p>
        <blockquote class="book__quote">
          "Deixe que este guia o acompanhe enquanto você trilha o Caminho Anglicano."
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.book__inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;
}

.book__photo img {
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

.book__quote {
  margin: 24px 0 0;
  padding: 18px 24px;
  border-left: 4px solid var(--gold);
  background: var(--cream-soft);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-style: italic;
  font-size: 1.08rem;
}

@media (max-width: 900px) {
  .book__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .book__photo img {
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
