<template>
  <div class="urgency">
    <div class="container urgency__inner">
      <ClientOnly>
        <p v-if="encerrado">
          As inscrições desta turma foram encerradas.
          <a :href="SITE.whatsappGrupo" rel="noopener">Entre na lista de espera da próxima →</a>
        </p>
        <p v-else-if="restante">
          ⏳ <strong>As inscrições fecham em</strong>
          <span class="urgency__count">
            <span class="urgency__unit"><b>{{ restante.dias }}</b>d</span>
            <span class="urgency__unit"><b>{{ restante.horas }}</b>h</span>
            <span class="urgency__unit"><b>{{ restante.min }}</b>m</span>
            <span class="urgency__unit"><b>{{ restante.seg }}</b>s</span>
          </span>
          <a href="#planos">Garanta sua vaga</a>
        </p>
        <template #fallback>
          <p>
            ⏳ <strong>Inscrições abertas até 04/08.</strong> O primeiro encontro é dia
            05/08, às 20h. <a href="#planos">Garanta sua vaga</a>
          </p>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE } from '~/utils/site'

const deadline = new Date(SITE.inscricoesAte).getTime()
const agora = ref(Date.now())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    agora.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const encerrado = computed(() => agora.value >= deadline)

const restante = computed(() => {
  const diff = deadline - agora.value
  if (diff <= 0) return null
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    min: Math.floor((diff % 3600000) / 60000),
    seg: Math.floor((diff % 60000) / 1000),
  }
})
</script>

<style scoped>
.urgency {
  background: var(--red);
  color: var(--cream-soft);
}

.urgency__inner {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  min-height: 42px;
}

.urgency p {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.urgency a {
  color: var(--cream-soft);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.urgency__count {
  display: inline-flex;
  gap: 6px;
}

.urgency__unit {
  background: rgba(0, 0, 0, 0.22);
  border-radius: 6px;
  padding: 2px 8px;
  font-variant-numeric: tabular-nums;
}

.urgency__unit b {
  font-weight: 800;
}

@media (max-width: 560px) {
  .urgency p {
    font-size: 0.82rem;
    gap: 6px;
  }

  .urgency__unit {
    padding: 2px 6px;
  }
}
</style>
