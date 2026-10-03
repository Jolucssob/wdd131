// Recupera a quantidade de avaliações já armazenada
let quantidadeAvaliacoes =
    Number(localStorage.getItem("quantidadeAvaliacoes")) || 0;

// Acrescenta uma nova avaliação
quantidadeAvaliacoes++;

// Salva novamente no localStorage
localStorage.setItem(
    "quantidadeAvaliacoes",
    quantidadeAvaliacoes
);

// Exibe a quantidade na página
const contador = document.querySelector("#contadorAvaliacoes");
contador.textContent = quantidadeAvaliacoes;

// Ano atual
const anoAtual = document.querySelector("#anoAtual");
anoAtual.textContent = new Date().getFullYear();

// Última modificação
const ultimaModificacao =
    document.querySelector("#ultimaModificacao");

ultimaModificacao.textContent =
    `Última Modificação: ${document.lastModified}`;