/* Renderiza no DOM o conteúdo definido em content.js (window.SITE_CONTENT). */
(function () {
  "use strict";

  var conteudo = window.SITE_CONTENT;
  if (!conteudo) {
    return;
  }

  function texto(id, valor) {
    var no = document.getElementById(id);
    if (no && typeof valor === "string") {
      no.textContent = valor;
    }
    return no;
  }

  /* Botão com seta ornamental */
  function botaoComSeta(id, rotulo) {
    var no = document.getElementById(id);
    if (!no || typeof rotulo !== "string") {
      return no;
    }
    no.textContent = "";
    no.appendChild(document.createTextNode(rotulo + " "));
    var seta = document.createElement("span");
    seta.className = "seta";
    seta.setAttribute("aria-hidden", "true");
    seta.textContent = "→";
    no.appendChild(seta);
    return no;
  }

  /* Marca */
  texto("marca-completa", conteudo.marca.completa);
  texto("marca-curta", conteudo.marca.curta);

  /* Menu */
  var menu = document.getElementById("menu");
  conteudo.menu.forEach(function (item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = item.ancora;
    a.textContent = item.rotulo;
    li.appendChild(a);
    menu.appendChild(li);
  });

  /* Hero */
  texto("hero-subtitulo", conteudo.hero.subtitulo);
  texto("hero-titulo", conteudo.hero.titulo);
  botaoComSeta("hero-botao", conteudo.hero.botao);

  /* O escritório */
  texto("sobre-titulo", conteudo.escritorio.titulo);
  texto("sobre-paragrafo", conteudo.escritorio.paragrafo);

  /* Serviços — lista indexada */
  texto("servicos-titulo", conteudo.servicos.titulo);
  texto("servicos-introducao", conteudo.servicos.introducao);
  var cards = document.getElementById("servicos-cards");
  conteudo.servicos.cards.forEach(function (item, indice) {
    var linha = document.createElement("article");
    linha.className = "area-linha rv";
    var num = document.createElement("span");
    num.className = "num";
    num.setAttribute("aria-hidden", "true");
    num.textContent = String(indice + 1).padStart(2, "0");
    var corpo = document.createElement("div");
    var titulo = document.createElement("h3");
    titulo.textContent = item.titulo;
    var descricao = document.createElement("p");
    descricao.textContent = item.texto;
    corpo.appendChild(titulo);
    corpo.appendChild(descricao);
    linha.appendChild(num);
    linha.appendChild(corpo);
    cards.appendChild(linha);
  });
  var complemento = document.getElementById("servicos-complemento");
  if (complemento) {
    if (conteudo.servicos.complemento) {
      complemento.textContent = conteudo.servicos.complemento;
    } else {
      complemento.remove();
    }
  }

  /* Equipe — cartões com monograma */
  texto("equipe-titulo", conteudo.equipe.titulo);
  var equipe = document.getElementById("equipe-lista");
  conteudo.equipe.membros.forEach(function (membro) {
    var bloco = document.createElement("article");
    bloco.className = "membro rv";
    if (membro.nome) {
      var partes = membro.nome.trim().split(/\s+/);
      var iniciais = (partes[0].charAt(0) + (partes.length > 1 ? partes[partes.length - 1].charAt(0) : "")).toUpperCase();
      var ini = document.createElement("div");
      ini.className = "ini";
      ini.setAttribute("aria-hidden", "true");
      ini.textContent = iniciais;
      bloco.appendChild(ini);
    }
    var nome = document.createElement("h3");
    nome.textContent = membro.nome;
    bloco.appendChild(nome);
    if (membro.registros) {
      var registros = document.createElement("p");
      registros.className = "registros";
      registros.textContent = membro.registros;
      bloco.appendChild(registros);
    }
    if (membro.bio) {
      var bio = document.createElement("p");
      bio.className = "bio";
      bio.textContent = membro.bio;
      bloco.appendChild(bio);
    }
    equipe.appendChild(bloco);
  });

  /* Faixa de chamada */
  texto("chamada-texto", conteudo.chamada.texto);
  var chamadaBotao = botaoComSeta("chamada-botao", conteudo.chamada.botao);
  if (chamadaBotao) {
    chamadaBotao.href = "mailto:" + conteudo.contato.email;
    /* Nem todo computador tem aplicativo de e-mail: além de abrir o mailto,
       o clique copia o endereço e o exibe na tela. */
    chamadaBotao.addEventListener("click", function () {
      var endereco = conteudo.contato.email;
      function avisar(copiou) {
        var aviso = document.getElementById("aviso-copiado");
        if (!aviso) {
          aviso = document.createElement("span");
          aviso.id = "aviso-copiado";
          aviso.className = "aviso-copiado";
          aviso.setAttribute("role", "status");
          chamadaBotao.insertAdjacentElement("afterend", aviso);
        }
        aviso.textContent = copiou ? "E-mail copiado: " + endereco : "E-mail: " + endereco;
        aviso.classList.add("visivel");
        clearTimeout(aviso.dataset.timer);
        aviso.dataset.timer = setTimeout(function () {
          aviso.classList.remove("visivel");
        }, 5000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(endereco).then(
          function () { avisar(true); },
          function () { avisar(false); }
        );
      } else {
        avisar(false);
      }
    });
  }

  /* Contato */
  texto("contato-titulo", conteudo.contato.titulo);
  var email = texto("contato-email", conteudo.contato.email);
  if (email) {
    email.href = "mailto:" + conteudo.contato.email;
  }
  texto("contato-endereco", conteudo.contato.endereco);
  var mapa = texto("contato-mapa", conteudo.contato.mapaRotulo);
  if (mapa) {
    mapa.href = conteudo.contato.mapaUrl;
  }
  var mapaImagem = document.getElementById("contato-mapa-imagem");
  if (mapaImagem) {
    mapaImagem.href = conteudo.contato.mapaUrl;
    mapaImagem.setAttribute("aria-label", conteudo.contato.mapaRotulo);
  }
  texto("contato-cnpj", conteudo.contato.cnpj);

  /* Rodapé */
  texto("rodape-linha1", conteudo.rodape.linha1);
  texto("rodape-linha2", conteudo.rodape.linha2);
  texto("rodape-linha3", conteudo.rodape.linha3);
  texto("rodape-linha4", "© " + new Date().getFullYear() + " " + conteudo.rodape.assinatura);

  /* Menu móvel */
  var barra = document.getElementById("topo-barra");
  var botao = document.getElementById("menu-botao");
  botao.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    barra.classList.toggle("menu-aberto", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  menu.addEventListener("click", function (evento) {
    if (evento.target.tagName === "A") {
      menu.classList.remove("aberto");
      barra.classList.remove("menu-aberto");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    }
  });

  /* Header sólido ao rolar */
  function aoRolar() {
    barra.classList.toggle("solido", window.scrollY > 40);
  }
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });

  /* Revelação suave no scroll */
  var reveladores = document.querySelectorAll(".rv");
  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzMovimento || !("IntersectionObserver" in window)) {
    reveladores.forEach(function (el) {
      el.classList.add("in");
    });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("in");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });
    reveladores.forEach(function (el) {
      observador.observe(el);
    });
  }
})();
