<template>
  <section id="historia" class="section story">
    <div class="container">
      <div class="story__card">
        <span class="eyebrow">Uma palavra do tradutor</span>
        <h2 class="story__title">
          Eu conheci o autor deste livro.
          <span class="accent-red">Foi ele quem me autorizou a traduzi-lo.</span>
        </h2>

        <div class="story__body">
          <p>
            Cheguei ao anglicanismo no fim de 2020, e essa tradição me fascinou desde o
            primeiro dia. Mas estudar sobre ela era quase impossível: não havia material em
            português. Tomei como missão mudar isso.
          </p>
          <p>
            Conheci o livro do Rev. Thomas McKenzie logo no início da jornada. Mandei um
            e-mail e ele respondeu com todo carinho. Convidei-o para uma conversa no
            <strong>Teologueiros</strong> e ele aceitou na hora, alegre e generoso, disposto a
            falar da tradição por horas. Pedi para traduzir seu livro. Ele amou a ideia e, de
            forma generosíssima, abriu mão de todos os direitos, me autorizando pessoalmente,
            em vídeo.
          </p>
          <p>
            Duas semanas depois, veio a notícia: um acidente de carro. O Rev. McKenzie e sua
            filha não sobreviveram. Meu coração se despedaçou. Até hoje aquele vídeo
            permanece inédito. Cada vez que tento editá-lo, a dor me impede de continuar.
          </p>
          <p>
            Meses depois, comecei o árduo trabalho de tradução. Com a ajuda de amigos e
            irmãos, revisamos, corrigimos e enfim publicamos. É este livro que vamos ler
            juntos.
          </p>

          <blockquote class="story__quote">
            De um jeito curioso, acredito que não me tornei anglicano. Eu me descobri
            anglicano.
          </blockquote>

          <p>
            Quero seguir o exemplo do Rev. McKenzie, que atendeu de braços abertos ao jovem
            recém-chegado à tradição. É por isso que criei este clube: para caminhar com você
            do mesmo jeito que ele caminhou comigo.
          </p>
        </div>

        <div class="story__sign">
          <img src="/images/douglas.avif" alt="Rev. Douglas Araujo" width="64" height="64" />
          <div>
            <strong>Rev. Douglas Araujo</strong>
            <span>Sacerdote anglicano e tradutor de "O Caminho Anglicano"</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.story {
  background: var(--white);
}

.story__card {
  max-width: 760px;
  margin: 0 auto;
}

.story__title {
  font-size: clamp(1.6rem, 3.4vw, 2.3rem);
  font-weight: 800;
}

.story__body {
  font-size: 1.08rem;
}

.story__quote {
  margin: 28px 0;
  padding: 22px 28px;
  border-left: 4px solid var(--gold);
  background: var(--cream-soft);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.35;
  color: var(--red);
}

.story__sign {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--cream-dark);
}

.story__sign img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--red);
}

.story__sign strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.05rem;
}

.story__sign span {
  font-size: 0.9rem;
  opacity: 0.75;
}

@media (max-width: 560px) {
  .story__quote {
    font-size: 1.1rem;
    padding: 18px 20px;
  }
}
</style>
