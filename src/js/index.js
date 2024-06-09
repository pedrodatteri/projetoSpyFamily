// Seleciona os botões de avançar e voltar pelos IDs
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

// Seleciona todos os cartões com a classe 'cartao'
const cartoes = document.querySelectorAll(".cartao");

// Variável para controlar o cartão atual exibido
let cartaoAtual = 0;

// Adiciona evento de clique ao botão de avançar
if (btnAvancar) {
  btnAvancar.addEventListener("click", function () {
    console.log("Botão Avançar clicado");
    console.log("Cartão atual antes do incremento:", cartaoAtual);

    // Esconde o cartão atualmente selecionado
    esconderCartaoSelecionado();

    // Incrementa o índice do cartão atual
    cartaoAtual++;
    console.log("Cartão atual após incremento:", cartaoAtual);

    // Se chegou ao fim da lista de cartões, volta ao primeiro
    if (cartaoAtual === cartoes.length) {
      console.log("Chegou ao fim dos cartões, voltando ao primeiro");
      cartaoAtual = 0;
    }

    console.log("Cartão atual após verificação:", cartaoAtual);

    // Mostra o próximo cartão
    mostrarCartao();
  });
}

// Adiciona evento de clique ao botão de voltar
if (btnVoltar) {
  btnVoltar.addEventListener("click", function () {
    console.log("Botão Voltar clicado");
    console.log("Cartão atual antes do decremento:", cartaoAtual);

    // Esconde o cartão atualmente selecionado
    esconderCartaoSelecionado();

    // Decrementa o índice do cartão atual
    cartaoAtual--;
    console.log("Cartão atual após decremento:", cartaoAtual);

    // Se chegou ao início da lista de cartões, volta ao último
    if (cartaoAtual < 0) {
      console.log("Chegou ao início dos cartões, voltando ao último");
      cartaoAtual = cartoes.length - 1;
    }

    console.log("Cartão atual após verificação:", cartaoAtual);

    // Mostra o cartão anterior
    mostrarCartao();
  });
}

// Função para mostrar o cartão atual
function mostrarCartao() {
  console.log("Mostrando cartão:", cartaoAtual);
  cartoes[cartaoAtual].classList.add("selecionado");
}

// Função para esconder o cartão atualmente selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".cartao.selecionado");
  if (cartaoSelecionado) {
    console.log("Escondendo cartão:", cartaoSelecionado);
    cartaoSelecionado.classList.remove("selecionado");
  }
}
