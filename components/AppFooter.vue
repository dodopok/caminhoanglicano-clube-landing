<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p>
        <strong>Clube do Livro — O Caminho Anglicano</strong><br />
        Com Rev. Douglas Araujo e Rev. Cynthia Muniz
      </p>
      <p class="footer__small">
        "O Caminho Anglicano", de Thomas McKenzie · Tradução: Douglas Araujo<br />
        Pagamento e acesso via Hotmart · © {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--cream-soft);
  padding: 44px 0;
}

.footer__inner {
  text-align: center;
}

.footer p {
  margin: 0 0 14px;
}

.footer__small {
  font-size: 0.85rem;
  opacity: 0.7;
}
</style>
