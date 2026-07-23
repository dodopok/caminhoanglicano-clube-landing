<template>
  <section id="mentores" class="section mentors">
    <div class="container">
      <span class="eyebrow">Quem guia o clube</span>
      <h2 class="section-title">
        Quem vai <span class="accent-blue">ler com você</span>
      </h2>
      <div class="mentors__grid">
        <article class="mentors__card">
          <img
            class="mentors__avatar mentors__avatar--red"
            src="/images/douglas.avif"
            alt="Foto do Rev. Douglas Araujo"
            loading="lazy"
            width="120"
            height="120"
          />
          <h3>Rev. Douglas Araujo</h3>
          <p class="mentors__role">Tradutor de "O Caminho Anglicano"</p>
          <p>
            Presbítero anglicano e criador do canal <strong>Teologueiros</strong>, com mais de
            7 anos produzindo conteúdo teológico no YouTube. Formado pelo Seminário Anglicano
            de Teologia, é especialista em Anglicanismo e Liturgia. Traduziu a obra de Thomas
            McKenzie para o português e entrevistou o autor pessoalmente.
          </p>
        </article>
        <article class="mentors__card">
          <img
            class="mentors__avatar mentors__avatar--blue"
            src="/images/cynthia.avif"
            alt="Foto da Revda. Cynthia Muniz"
            loading="lazy"
            width="120"
            height="120"
          />
          <h3>Revda. Cynthia Muniz</h3>
          <p class="mentors__role">Teóloga e professora</p>
          <p>
            Presbítera anglicana, bacharel em Teologia pela FTSA e especialista em Novo
            Testamento, com mestrado pela FSP-USP. Atua como professora, preletora e autora,
            escrevendo para revistas e integrando o time do <strong>BTCast</strong>, um dos
            maiores podcasts de teologia do Brasil.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.mentors__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  margin-top: 44px;
}

.mentors__card {
  background: var(--white);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 34px 30px;
  box-shadow: var(--shadow);
}

.mentors__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 18px;
  border: 4px solid var(--cream-dark);
}

.mentors__avatar--red {
  border-color: var(--red);
}

.mentors__avatar--blue {
  border-color: var(--blue);
}

.mentors__card h3 {
  font-size: 1.25rem;
  margin-bottom: 2px;
}

.mentors__role {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold);
  margin-bottom: 14px;
}

.mentors__card p:last-child {
  margin: 0;
  font-size: 0.98rem;
}

@media (max-width: 800px) {
  .mentors__grid {
    grid-template-columns: 1fr;
  }
}
</style>
