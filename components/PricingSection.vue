<template>
  <section id="planos" class="section pricing">
    <div class="container">
      <div class="text-center pricing__head">
        <span class="eyebrow">Inscrição</span>
        <h2 class="section-title pricing__title">
          Escolha como quer <span class="accent-red">trilhar o Caminho</span>
        </h2>
        <p class="section-lead pricing__lead">
          Inscrições até <strong>04/08</strong>. Pagamento seguro pela Hotmart, com opção de
          parcelamento no cartão.
        </p>
      </div>
      <div class="pricing__grid">
        <article class="pricing__card">
          <h3>Clube do Livro</h3>
          <p class="pricing__desc">Para quem já tem o livro ou vai adquirir por conta própria.</p>
          <p class="pricing__price">
            <span class="pricing__currency">R$</span>120
            <span class="pricing__installments">ou parcelado no cartão</span>
          </p>
          <ul class="pricing__features">
            <li>✔️ 5 encontros ao vivo (quartas, 20h)</li>
            <li>✔️ Gravações de todos os encontros</li>
            <li>✔️ Materiais digitais exclusivos</li>
            <li>✔️ Entrevista inédita com Thomas McKenzie</li>
            <li class="pricing__feature-off">✖️ Ebook do livro</li>
          </ul>
          <a :href="SITE.checkoutClube" class="btn btn--ghost btn--block" rel="noopener">
            Participar do clube
          </a>
        </article>
        <article class="pricing__card pricing__card--featured">
          <span class="pricing__badge">Mais escolhido</span>
          <h3>Clube + Ebook</h3>
          <p class="pricing__desc">A experiência completa: o clube e o livro digital para ler no Kindle.</p>
          <p class="pricing__price">
            <span class="pricing__currency">R$</span>130
            <span class="pricing__installments">ou parcelado no cartão</span>
          </p>
          <ul class="pricing__features">
            <li>✔️ 5 encontros ao vivo (quartas, 20h)</li>
            <li>✔️ Gravações de todos os encontros</li>
            <li>✔️ Materiais digitais exclusivos</li>
            <li>✔️ Entrevista inédita com Thomas McKenzie</li>
            <li>
              ✔️ <strong>Ebook "O Caminho Anglicano"</strong> enviado via Amazon (Kindle)
            </li>
          </ul>
          <a :href="SITE.checkoutClubeComLivro" class="btn btn--primary btn--block" rel="noopener">
            Quero o clube + ebook
          </a>
          <p class="pricing__hint">Apenas R$ 10 a mais pelo livro completo</p>
        </article>
      </div>
      <div class="pricing__guarantee">
        <div class="pricing__guarantee-icon">🛡️</div>
        <div>
          <h3>Garantia incondicional de 7 dias</h3>
          <p>
            Entre no clube sem risco: se em até 7 dias você sentir que não é para você, é só
            pedir o reembolso pela Hotmart e devolvemos <strong>100% do valor</strong>. Sem
            perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE } from '~/utils/site'
</script>

<style scoped>
.pricing {
  background: var(--cream);
}

.pricing__head {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing__title,
.pricing__lead {
  max-width: 720px;
}

.pricing__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  max-width: 860px;
  margin: 48px auto 0;
  align-items: stretch;
}

.pricing__card {
  position: relative;
  background: var(--white);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 36px 30px 30px;
  display: flex;
  flex-direction: column;
}

.pricing__card--featured {
  border: 2px solid var(--red);
  box-shadow: var(--shadow-lg);
}

.pricing__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: var(--ink);
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 6px 16px;
  border-radius: 999px;
  white-space: nowrap;
}

.pricing__card h3 {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.pricing__desc {
  font-size: 0.94rem;
  opacity: 0.8;
  min-height: 48px;
}

.pricing__price {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: var(--ink);
  margin: 8px 0 18px;
  line-height: 1;
}

.pricing__currency {
  font-size: 1.3rem;
  vertical-align: super;
  margin-right: 2px;
}

.pricing__installments {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.65;
  margin-top: 8px;
}

.pricing__features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 10px;
  font-size: 0.97rem;
  flex-grow: 1;
}

.pricing__feature-off {
  opacity: 0.45;
}

.pricing__hint {
  text-align: center;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--red);
  margin: 12px 0 0;
}

.pricing__guarantee {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  max-width: 720px;
  margin: 48px auto 0;
  background: var(--cream-soft);
  border: 1px dashed var(--olive);
  border-radius: var(--radius);
  padding: 26px 30px;
}

.pricing__guarantee-icon {
  font-size: 2.2rem;
  line-height: 1;
}

.pricing__guarantee h3 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.pricing__guarantee p {
  margin: 0;
  font-size: 0.96rem;
}

@media (max-width: 800px) {
  .pricing__grid {
    grid-template-columns: 1fr;
  }

  .pricing__desc {
    min-height: 0;
  }

  .pricing__guarantee {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
