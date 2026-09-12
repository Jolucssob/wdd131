// Exibe o ano atual no rodapé
const anoAtual = document.querySelector("#anoAtual");
anoAtual.textContent = new Date().getFullYear();

// Exibe a data da última modificação
const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent =
    `Last Modification: ${document.lastModified}`;

// Seleciona o botão e o menu
const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector(".navegacao");

// Define o estado inicial
botaoMenu.setAttribute("aria-expanded", "false");

// Abre e fecha o menu
botaoMenu.addEventListener("click", () => {
    navegacao.classList.toggle("aberta");
    botaoMenu.classList.toggle("aberto");

    const menuEstaAberto =
        navegacao.classList.contains("aberta");

    botaoMenu.setAttribute(
        "aria-expanded",
        menuEstaAberto.toString()
    );

    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto
            ? "Close navigation menu"
            : "Open navigation menu"
    );
})