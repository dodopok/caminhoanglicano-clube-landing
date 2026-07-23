/**
 * Configuração central do site.
 * TODO: troque os valores marcados antes de publicar.
 */
export const SITE = {
  // TODO: coloque aqui o domínio final do site (usado em SEO/Open Graph)
  url: 'https://clubedolivro.caminhoanglicano.com.br',

  // Links de checkout da Hotmart (produto W106849662K, ofertas por ?off=)
  checkoutClube: 'https://pay.hotmart.com/W106849662K?off=x38ny3lg', // R$ 120 — só o clube
  checkoutClubeComLivro: 'https://pay.hotmart.com/W106849662K?off=7gcuuxen', // R$ 130 — clube + ebook

  nome: 'Clube do Livro — O Caminho Anglicano',
  inicio: '2026-08-05',
  fim: '2026-09-02',
  horario: '20h (horário de Brasília)',

  // Fim das inscrições (horário de Brasília). A contagem regressiva e a troca
  // para "inscrições encerradas" usam esta data automaticamente.
  inscricoesAte: '2026-08-04T23:59:59-03:00',

  // TODO: cole o ID do vídeo do YouTube com o trecho da entrevista
  // (ex.: para youtube.com/watch?v=abc123, o ID é "abc123")
  youtubeTeaserId: '',

  // TODO: cole o link do grupo/canal do Telegram para lembretes
  telegramGrupo: 'https://t.me/SEU-LINK-AQUI',

  // TODO: cole o ID do Pixel da Meta (só números). Enquanto vazio, nada é carregado.
  metaPixelId: '',

  // TODO (opcional): ID do Google Analytics 4, formato "G-XXXXXXX"
  ga4Id: '',
}

export const ENCONTROS = [
  {
    data: '05/08',
    titulo: 'Bem-vindos ao Caminho',
    descricao: 'Abertura do clube, apresentação da turma e as raízes da tradição anglicana.',
  },
  {
    data: '12/08',
    titulo: 'O que os anglicanos creem',
    descricao: 'Um mergulho na teologia anglicana: Escritura, tradição, razão e os fundamentos da fé.',
  },
  {
    data: '19/08',
    titulo: 'Adoração e liturgia',
    descricao: 'O Livro de Oração Comum, os sacramentos e o coração da espiritualidade anglicana.',
  },
  {
    data: '26/08',
    titulo: 'A vida no Caminho',
    descricao: 'Como viver a fé anglicana no dia a dia: prática, disciplina espiritual e comunidade.',
  },
  {
    data: '02/09',
    titulo: 'Encerramento + entrevista inédita',
    descricao: 'Conclusão da jornada e acesso em primeira mão ao vídeo nunca publicado com o Rev. Thomas McKenzie.',
  },
]

export const FAQ = [
  {
    pergunta: 'Preciso ser anglicano para participar?',
    resposta:
      'Não! O clube é para qualquer pessoa interessada em conhecer a tradição anglicana: curiosos, iniciantes ou quem já caminha na tradição e quer se aprofundar. O livro foi escrito exatamente para esses públicos.',
  },
  {
    pergunta: 'Preciso ter lido o livro antes de começar?',
    resposta:
      'Não. Vamos ler juntos ao longo dos encontros, com um ritmo de leitura sugerido a cada semana. Se preferir, escolha o plano com o ebook incluso e receba o livro digital via Amazon.',
  },
  {
    pergunta: 'E se eu não puder participar ao vivo?',
    resposta:
      'Sem problema: todos os encontros serão gravados e as gravações ficarão disponíveis para os participantes. Mas recomendamos participar ao vivo para aproveitar as conversas e tirar dúvidas em tempo real.',
  },
  {
    pergunta: 'Como recebo o acesso depois da compra?',
    resposta:
      'A compra e o acesso são feitos pela Hotmart, uma das maiores plataformas de produtos digitais do Brasil. Logo após a confirmação do pagamento, você recebe por e-mail as instruções de acesso.',
  },
  {
    pergunta: 'Como funciona o plano com o livro incluso?',
    resposta:
      'No plano de R$ 130, além de tudo que o clube oferece, você recebe o ebook de "O Caminho Anglicano" enviado diretamente para o seu e-mail da Amazon (Kindle). Você pode ler no aplicativo Kindle em qualquer celular, tablet ou computador.',
  },
  {
    pergunta: 'Posso parcelar o pagamento?',
    resposta:
      'Sim! O pagamento é processado pela Hotmart e pode ser parcelado no cartão de crédito. Também há outras formas de pagamento disponíveis no checkout, como Pix.',
  },
  {
    pergunta: 'E se eu me arrepender da compra?',
    resposta:
      'Você tem 7 dias de garantia incondicional, conforme o Código de Defesa do Consumidor. Se dentro desse prazo você achar que o clube não é para você, basta pedir o reembolso pela Hotmart e devolvemos 100% do valor.',
  },
  {
    pergunta: 'O que é o vídeo inédito com o autor?',
    resposta:
      'É uma entrevista com o Rev. Thomas McKenzie gravada pelo Rev. Douglas Araujo para o canal Teologueiros, e que nunca foi publicada. Os participantes do clube terão acesso em primeira mão a esse material histórico.',
  },
]
