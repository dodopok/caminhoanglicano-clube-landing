<template>
  <div class="urgency">
    <div class="container urgency__inner">
      <p>
        ⏳ <strong>Inscrições abertas até 04/08.</strong> O primeiro encontro é dia
        05/08, às 20h. <a href="#planos">Garanta sua vaga</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.urgency {
  background: var(--red);
  color: var(--cream-soft);
}

.urgency__inner {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.urgency p {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 600;
}

.urgency a {
  color: var(--cream-soft);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
