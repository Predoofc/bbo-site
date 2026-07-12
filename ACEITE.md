# ACEITE — site BBO v1.0

Data do aceite: 12/07/2026 (versão v1.0 de 11/07/2026)
Método: verificação item a item com testes reais (servidor http local, motor WebKit/Safari
para `file://`) e revisão cruzada por 4 agentes independentes contra a especificação.

## Checklist

- [x] **Textos 100% idênticos à especificação** — conferidos um a um, caractere por
  caractere (inclusive travessões "–"/"—" e ponto mediano "·"), em `docs/content.js` e
  nos textos estáticos do `docs/index.html` (title, meta description, Open Graph,
  JSON-LD, noscript). Nenhuma divergência encontrada.
- [x] **CNPJ 19.866.770/0001-40 e OABs corretos** — OAB/AL 6.920 · OAB/SP 312.154
  (Bernardo) e OAB/AL 6.603 (Daniella) conferidos no conteúdo, no JSON-LD e no rodapé.
- [x] **Nenhuma promessa de resultado ou superlativo** — auditoria dedicada ao
  Provimento 205/2021 (promessa de resultado, superlativos, captação agressiva,
  mercantilização) em todos os textos visíveis do site, do 404 e do painel: nada
  encontrado. Sem telefone e sem formulário de contato, conforme especificado.
- [x] **Funciona via file:// e via http** — http testado em `http://localhost:4173`
  (renderização completa, zero erros de console); `file://` testado com o motor
  WebKit (o mesmo do Safari, cenário do duplo clique neste Mac): hero, menu (5 itens),
  3 cards, 2 sócios, rodapé com ano corrente e links mailto/mapa corretos.
- [x] **Nenhum caminho absoluto começando com /** — varredura em `docs/` e `admin/`
  sem ocorrências de `href="/` ou `src="/`.
- [x] **Nenhum script com type="module"** — varredura sem ocorrências; todos os
  scripts são clássicos.
- [x] **Responsivo de 360 a 1440 px** — testado em 360 px (marca curta "BBO Advocacia",
  menu hambúrguer abre/fecha com aria-expanded e aria-label alternando), 785 px
  (nome completo + menu em uma linha) e 1265 px (layout desktop completo); layout
  fluido com contêiner de 1040 px até 1440 px.
- [x] **admin.html abre por duplo clique, carrega os valores atuais e gera content.js
  válido** — testado em WebKit via `file://`: formulário preenchido com os valores de
  `../docs/content.js`; arquivo gerado no formato
  `window.SITE_CONTENT = <JSON.stringify(dados, null, 2)>;` faz round-trip idêntico
  (mesmas chaves, mesma ordem, nenhum campo órfão) e é consumido pelo site sem erro;
  validação bloqueia o download com e-mail/endereço/linhas do rodapé vazios e libera
  ao preencher; botões adicionar/remover integrante funcionando.
- [x] **Não existe arquivo CNAME ativo** — somente `docs/CNAME.exemplo` (contendo
  apenas `www.bbo.adv.br`), reservado para a fase do domínio.
- [x] **Página (sem fontes) abaixo de 60 KB** — total de 20,3 KB:
  index.html 5,3 KB + style.css 7,4 KB + site.js 4,0 KB + content.js 3,2 KB +
  favicon.svg 0,4 KB.

## Observações da revisão

- Dois apontamentos menores da revisão cruzada foram corrigidos antes deste aceite:
  (1) especificidade CSS que impedia a exibição do aviso de falha de carga no painel
  admin; (2) CHANGELOG.md ajustado para iniciar exatamente com a linha
  "v1.0 — data — versão inicial".
- A rolagem suave usa `scroll-behavior: smooth` com exceção automática para usuários
  com `prefers-reduced-motion` (acessibilidade).
- O painel admin edita texto livremente e **não** valida conteúdo contra a norma da
  OAB: futuras edições devem manter o tom informativo (sem promessa de resultado,
  superlativo ou expressão de urgência).

## Pendências humanas

1. **Logo real** — ~~colocar o arquivo em `docs/assets/`~~ **Resolvido na v1.1
   (12/07/2026):** logo entregue pelo cliente e aplicado no hero
   (`docs/assets/logo-bbo.png`, fundo convertido em transparência real); na
   mesma versão entraram o mapa estático e a fachada na seção Contato, e a
   tipografia passou a ser 100% sem serifa. O código continua abaixo de 60 KB
   (21,7 KB); as três imagens somam ~316 KB e as da seção Contato carregam
   com `loading="lazy"`. *(Na v1.2 as três imagens foram convertidas para
   WebP — nomes e tamanhos atuais na seção "Atualização v1.2" abaixo.)*
2. **Bios dos sócios** — os campos existem em `content.js` e no painel admin, hoje
   vazios (e por isso não aparecem no site). Preencher pelo painel quando houver texto.
3. **Fase do domínio www.bbo.adv.br** (executar depois, com adulto no circuito):
   no Registro.br, criar CNAME de "www" apontando para `<usuario>.github.io`;
   configurar redirecionamento do domínio raiz; renomear `docs/CNAME.exemplo` para
   `CNAME` (ou usar Settings → Pages → Custom domain); ativar Enforce HTTPS.
   Passo a passo completo no README.md.
4. **Publicação no GitHub Pages** — será feita manualmente pela interface web
   (fluxo detalhado no README.md); este repositório local não tem remoto e nada
   foi enviado a servidor algum.

## Atualização v1.2 — 12/07/2026

- **Proveniência do mapa** (conforme atestado pelo cliente em 12/07/2026): arte
  vetorizada encomendada a arquiteto — mesma origem do render da fachada —, com
  uso autorizado; não se trata de captura do Google Maps. O arquivo vetorial
  original não está disponível no momento (ver pendência abaixo).
- **Linha complementar de Serviços vazia** (decisão do cliente, 12/07/2026): as
  áreas "Direito do Petróleo" e "Contencioso Cível" foram absorvidas pelo card
  "Consultoria Estratégica". O campo continua existindo no `content.js` e no
  painel admin, pronto para ser reativado.
- **Imagens convertidas para WebP** — antes 316,9 KB, depois 121,4 KB (−62%):
  `logo-bbo.webp` 21,2 KB (sem perdas, alfa preservado; era PNG de 50,4 KB),
  `mapa-localizacao.webp` 63,7 KB (q70, legibilidade dos nomes de rua conferida
  visualmente; era JPEG de 178,8 KB; a meta de 60 KB foi levemente excedida para
  preservar o texto do mapa) e `fachada.webp` 36,4 KB (q82; era JPEG de 87,7 KB).
  Removido o `docs/assets/.gitkeep` (a pasta não está mais vazia).
- **favicon.svg removido** — era um invólucro SVG com PNG embutido (34 KB), sem
  ganho de escala sobre o PNG; mantidos `favicon.png` e `apple-touch-icon.png`.
- **Aviso OAB no painel admin** — lembrete fixo de aprovação prévia de textos
  (Provimento 205/2021), complementando a observação da revisão v1.0.
- **Peso atual do núcleo** (index.html + style.css + site.js + content.js):
  21,5 KB (21.496 bytes, mesma convenção decimal dos tamanhos de imagem acima). O registro do checklist v1.0 acima permanece inalterado como
  histórico fiel da época.
- **Nova pendência humana:** obter com o arquiteto o arquivo vetorial do mapa e
  substituir o WebP por SVG otimizado.

## Atualização v1.3 — 12/07/2026

- **Redesign visual aprovado pelo cliente** (referência: padrão do site SED, do
  mesmo grupo): hero escuro de tela inteira com composição centralizada e logo
  em creme; tipografia display "Archivo Expanded" + Inter (sem serifas); "Áreas
  de atuação" em lista indexada; cartões de equipe com monograma; cabeçalho
  fixo dinâmico; revelação suave no scroll (com respeito a
  prefers-reduced-motion). Paleta da marca mantida (creme, tinta, dourado).
- **Textos 100% preservados**: diff do `docs/content.js` entre v1.2 e v1.3
  vazio; numeração ornamental ("— 01"), setas e monogramas são decorativos.
- **Novo asset**: `docs/assets/logo-bbo-claro.webp` (21,2 KB, variante creme do
  logo para fundos escuros, gerada por recoloração com alfa preservado).
- **meta theme-color** alterado de #FBFAF7 para #1C1F23 (barra do navegador
  móvel acompanha o hero escuro) — decisão de design do cliente.
- **Peso do núcleo**: 31,6 KB (limite de 60 KB respeitado).
- **Arquivos a republicar no GitHub** para esta versão entrar no ar:
  `docs/index.html`, `docs/style.css`, `docs/site.js` e
  `docs/assets/logo-bbo-claro.webp` (os demais permanecem iguais).
