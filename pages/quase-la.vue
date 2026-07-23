<template>
  <div class="pend">
    <div class="container pend__inner">
      <div class="pend__badge">⏳</div>
      <span class="eyebrow">Pedido recebido</span>
      <h1 class="pend__title">
        Estamos <span class="accent-red">quase lá!</span>
      </h1>
      <p class="pend__lead">
        Recebemos seu pedido, mas o pagamento ainda não foi confirmado. Assim que ele for
        aprovado, sua vaga no clube estará garantida — e você recebe tudo por e-mail.
      </p>

      <div class="pend__box">
        <h3>Se você pagou com Pix</h3>
        <p>
          A confirmação costuma ser quase imediata. Se você ainda não finalizou, conclua o
          pagamento pelo código que a Hotmart gerou para você.
        </p>
      </div>

      <div class="pend__box">
        <h3>Se você pagou com boleto</h3>
        <p>
          O boleto pode levar até <strong>2 dias úteis</strong> para ser compensado. Depois
          que o banco confirmar, liberamos seu acesso automaticamente.
        </p>
      </div>

      <div class="pend__box">
        <h3>Se você pagou com cartão</h3>
        <p>
          Sua compra está passando por uma rápida análise de segurança. É só aguardar: assim
          que for aprovada, você recebe o e-mail de acesso.
        </p>
      </div>

      <div class="pend__note">
        <p>
          📩 <strong>O que fazer agora?</strong> Fique de olho no seu e-mail (inclusive spam e
          promoções). No instante em que o pagamento for confirmado, a Hotmart envia seus
          dados de acesso e o convite para o nosso grupo. Nosso primeiro encontro é
          <strong>05/08, às 20h</strong> — dá tempo de sobra.
        </p>
      </div>

      <p class="pend__help">
        Ficou com dúvida sobre o pagamento? Acesse a
        <a href="https://consumidor.hotmart.com/" rel="noopener">área do comprador na Hotmart</a>
        ou responda o e-mail que você recebeu.
      </p>

      <NuxtLink to="/" class="pend__back">← Voltar para a página do clube</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Pagamento em processamento | Clube do Livro O Caminho Anglicano',
  robots: 'noindex, nofollow',
})
</script>

<style scoped>
.pend {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.pend__inner {
  max-width: 660px;
}

.pend__badge {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 24px;
  box-shadow: 0 10px 26px rgba(201, 143, 46, 0.4);
}

.pend__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
}

.pend__lead {
  font-size: 1.15rem;
  max-width: 560px;
  margin-bottom: 36px;
}

.pend__box {
  background: var(--white);
  border: 1px solid var(--cream-dark);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 16px;
}

.pend__box h3 {
  font-size: 1.08rem;
  margin-bottom: 6px;
}

.pend__box p {
  margin: 0;
  font-size: 0.98rem;
}

.pend__note {
  background: var(--cream-soft);
  border: 1px dashed var(--olive);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 24px 0 20px;
}

.pend__note p {
  margin: 0;
  font-size: 0.98rem;
}

.pend__help {
  font-size: 0.95rem;
  margin-bottom: 28px;
}

.pend__back {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--red);
  text-decoration: none;
}

.pend__back:hover {
  text-decoration: underline;
}
</style>
