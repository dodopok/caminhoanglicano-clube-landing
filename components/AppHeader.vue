<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#" class="header__brand">
        <span class="header__brand-o">O</span>
        <span>
          <strong class="header__brand-red">Caminho</strong>
          <strong class="header__brand-blue">Anglicano</strong>
        </span>
        <span class="header__brand-tag">Clube do Livro</span>
      </a>
      <a href="#planos" class="btn btn--primary header__cta">Garantir minha vaga</a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(244, 231, 215, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--cream-dark);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 1.02rem;
  line-height: 1.1;
}

.header__brand-o {
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--ink);
}

.header__brand-red {
  display: block;
  color: var(--red);
  letter-spacing: 0.04em;
}

.header__brand-blue {
  display: block;
  color: var(--blue);
  letter-spacing: 0.04em;
}

.header__brand-tag {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--cream-soft);
  background: var(--ink);
  padding: 4px 10px;
  border-radius: 4px;
}

.header__cta {
  padding: 11px 22px;
  font-size: 0.92rem;
}

@media (max-width: 560px) {
  .header__brand-tag {
    display: none;
  }

  .header__cta {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
}
</style>
