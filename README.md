# BBO – Barretto Bastos e Omena Advocacia — site institucional

Site one-page, estático e minimalista, feito com HTML + CSS + JavaScript puros
(sem frameworks, sem build, sem npm). Funciona aberto por duplo clique
(`file://`) e servido por http, e foi pensado para publicação no GitHub Pages
a partir da pasta `docs/`.

## Mapa dos arquivos

| Caminho | Papel |
| --- | --- |
| `docs/` | Pasta publicada no GitHub Pages (branch `main`, pasta `/docs`) |
| `docs/index.html` | A página única do site: estrutura semântica e metadados (title, description, Open Graph, JSON-LD, noscript) |
| `docs/style.css` | Todo o visual: paleta, tipografia, layout, responsividade |
| `docs/site.js` | Lê `content.js` e preenche a página no carregamento |
| `docs/content.js` | **Única fonte do conteúdo editável** (`window.SITE_CONTENT`) — é o único arquivo que muda no dia a dia |
| `docs/404.html` | Página de erro minimalista, com link de volta ao início |
| `docs/robots.txt` | Libera a indexação por buscadores |
| `docs/favicon.png` | Favicon (ícone da aba) com o monograma "BBO" do logo real sobre plaqueta escura |
| `docs/apple-touch-icon.png` | Ícone para favoritos/tela inicial no iPhone e iPad |
| `docs/.nojekyll` | Arquivo vazio que desativa o processamento Jekyll do GitHub Pages |
| `docs/CNAME.exemplo` | Reserva para a fase do domínio — **não renomear para `CNAME` ainda** (ver abaixo) |
| `docs/assets/` | Imagens do site em WebP: `logo-bbo.webp` e `logo-bbo-claro.webp` (logo nas versões escura e creme), `mapa-localizacao.webp` e `fachada.webp` (seção Contato) |
| `admin/admin.html` | Painel **local** de edição de conteúdo — fica fora da pasta publicada |
| `CHANGELOG.md` | Histórico de versões |
| `ACEITE.md` | Checklist de aceite da v1.0, atualizações de versão e pendências humanas |
| `.gitignore` | Ignora lixo de sistema (`.DS_Store`, logs etc.) |

## Três formas de editar o conteúdo

1. **Pelo painel (recomendado):** abra `admin/admin.html` com duplo clique.
   Os campos já vêm preenchidos com o conteúdo atual. Edite, clique em
   "Baixar content.js atualizado", substitua `docs/content.js` pelo arquivo
   baixado, confira em `docs/index.html` e suba o arquivo novo no GitHub.
   O painel roda somente no seu computador — nada é enviado a servidor algum.
2. **À mão:** edite `docs/content.js` em qualquer editor de texto. É um
   objeto JavaScript legível; mantenha as aspas e as vírgulas como estão.
3. **Pedindo ao Claude Code:** abra o Claude Code nesta pasta e peça a
   alteração em português (ex.: "troque o texto do card Direito Empresarial
   por ..."). Ele edita o `content.js` e você confere o efeito.

## Visualização local

- **Duplo clique** em `docs/index.html` — o site abre direto no navegador
  (tudo funciona em `file://`, sem servidor).
- Ou, com servidor local: dentro da pasta `docs/`, rode
  `python3 -m http.server` e abra `http://localhost:8000`.

## Publicação no GitHub Pages (sem linha de comando)

Fluxo inteiro pela interface web do GitHub:

1. Crie (ou entre em) uma conta no [github.com](https://github.com).
2. Crie um repositório **público** chamado `bbo-site`.
3. Na página do repositório, clique em **"uploading an existing file"**
   (ou `Add file → Upload files`).
4. Arraste para a área de upload: a pasta `docs/`, a pasta `admin/` e os
   arquivos `README.md`, `CHANGELOG.md`, `ACEITE.md` e `.gitignore`.
5. Escreva uma mensagem (ex.: "site BBO v1.0") e clique em **Commit changes**.
6. Vá em **Settings → Pages**. Em "Build and deployment", escolha
   **Deploy from a branch**, branch **main**, pasta **/docs**, e salve.
7. Aguarde 1–2 minutos. O site estará em
   `https://<seu-usuario>.github.io/bbo-site/`.

Para atualizar o conteúdo depois: repita o upload apenas do
`docs/content.js` novo (o GitHub substitui o arquivo no commit).

### Alternativa para quem usa git

```bash
git remote add origin https://github.com/<seu-usuario>/bbo-site.git
git push -u origin main --tags
# e, a cada alteração:
git add -A
git commit -m "descreva a mudança"
git push
```

## Fase do domínio (www.bbo.adv.br) — executar depois, com adulto no circuito

**Importante:** enquanto o DNS não estiver configurado, **não** deve existir
arquivo `CNAME` na pasta `docs/` — um CNAME ativo faria o GitHub Pages
redirecionar para `www.bbo.adv.br` antes da hora, quebrando a URL provisória
`*.github.io`. Por isso o arquivo está guardado como `CNAME.exemplo`.

Quando chegar a hora:

1. No **Registro.br**, crie um registro **CNAME** para o subdomínio `www`
   apontando para `<seu-usuario>.github.io`.
2. Configure o redirecionamento do domínio raiz (`bbo.adv.br` →
   `www.bbo.adv.br`) no próprio Registro.br.
3. No GitHub, renomeie `docs/CNAME.exemplo` para `docs/CNAME` — ou use
   **Settings → Pages → Custom domain** e digite `www.bbo.adv.br` (o GitHub
   cria o arquivo CNAME sozinho).
4. Aguarde a propagação do DNS e ative **Enforce HTTPS** em
   Settings → Pages.
