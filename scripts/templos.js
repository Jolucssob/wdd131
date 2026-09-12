// ano atual no rodapé
const anoAtual = document.querySelector("#anoAtual");
anoAtual.textContent = new Date().getFullYear();

// última modificação
const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

// menu de navegação
const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector(".navegacao");

// Estado inicial do botão
botaoMenu.setAttribute("aria-expanded", "false");

// Abre e fecha o menu 
botaoMenu.addEventListener("click", () => {
    navegacao.classList.toggle("aberta");
    botaoMenu.classList.toggle("aberto");

    const menuEstaAberto = navegacao.classList.contains("aberta");

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );
});