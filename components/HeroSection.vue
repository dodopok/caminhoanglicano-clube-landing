<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <span class="eyebrow">Turma única · 05/08 a 02/09</span>
        <h1 class="hero__title">
          Leia <span class="hero__title-red">O Caminho Anglicano</span> junto com quem
          <span class="hero__title-blue">traduziu o livro</span>
        </h1>
        <p class="hero__lead">
          O livro que já apresentou o anglicanismo a milhares de cristãos, lido em
          <strong>5 encontros ao vivo</strong> com o <strong>Rev. Douglas Araujo</strong>,
          tradutor da obra, e a <strong>Revda. Cynthia Muniz</strong>, presidente da Comissão
          de Teologia da REB. Toda quarta-feira, às 20h, de 05/08 a 02/09.
        </p>
        <ul class="hero__bullets">
          <li>📖 Você termina o livro entendendo a tradição anglicana de verdade</li>
          <li>🎥 Assiste em primeira mão a uma entrevista inédita com o autor</li>
          <li>🔁 Perdeu um encontro? A gravação fica disponível para você</li>
        </ul>
        <div class="hero__actions">
          <a href="#planos" class="btn btn--primary btn--lg">Quero participar do clube</a>
          <a href="#como-funciona" class="btn btn--ghost">Como funciona</a>
        </div>
        <p class="hero__trust">
          Pagamento seguro via Hotmart · Parcele no cartão · 7 dias de garantia
        </p>
      </div>
      <div class="hero__book">
        <img
          src="/images/capa-livro.jpeg"
          alt="Capa do livro O Caminho Anglicano, de Thomas McKenzie, traduzido por Douglas Araujo"
          width="440"
          height="660"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  padding: 72px 0 88px;
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 56px;
  align-items: center;
}

.hero__inner > * {
  min-width: 0;
}

.hero__title {
  font-size: clamp(2rem, 4.6vw, 3.2rem);
  font-weight: 800;
}

.hero__title-red {
  color: var(--red);
}

.hero__title-blue {
  color: var(--blue);
}

.hero__lead {
  font-size: 1.16rem;
  max-width: 560px;
}

.hero__bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 8px;
  font-size: 1.03rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 16px;
}

.hero__trust {
  font-size: 0.88rem;
  opacity: 0.75;
  font-family: var(--font-heading);
  font-weight: 600;
}

.hero__book img {
  width: 100%;
  height: auto;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: var(--shadow-lg);
  transform: rotate(2.5deg);
}

@media (max-width: 900px) {
  .hero {
    padding: 48px 0 64px;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero__book {
    order: -1;
  }

  .hero__book img {
    max-width: 250px;
  }
}
</style>
