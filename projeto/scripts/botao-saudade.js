const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navegacao");
const currentYear = document.querySelector("#anoAtual");
const lastModified = document.querySelector("#ultimaModificacao");

function toggleMenu() {
    navigation.classList.toggle("aberto");

    if (navigation.classList.contains("aberto")) {
        menuButton.setAttribute("aria-label", "Fechar menu de navegação");
        menuButton.classList.add("aberto");
    } else {
        menuButton.setAttribute("aria-label", "Abrir menu de navegação");
        menuButton.classList.remove("aberto");
    }
}

function updateFooter() {
    if (currentYear) {
        currentYear.textContent = `${new Date().getFullYear()}`;
    }

    if (lastModified) {
        lastModified.textContent = `Última modificação: ${document.lastModified}`;
    }
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
}

updateFooter();
const memorias = [
{
    tipo: "foto",
    icone: "📷",
    imagem: "imagens/familia-memorias.webp",
    alt: "Família reunida observando fotografias de um álbum",
    titulo: "Um dia especial em família",
    descricao: "Uma fotografia pode guardar encontros, sorrisos e momentos que permanecem na memória."
}, 

    {

        tipo: "audio",
        icone: "🎵",
        titulo: "Uma voz que permanece",
        descricao: "Áudios podem preservar histórias, mensagens e lembranças contadas com a própria voz."
    },
    {
        tipo: "video",
        icone: "🎬",
        titulo: "Momentos em movimento",
        descricao: "Vídeos ajudam a recordar celebrações, encontros e acontecimentos importantes."
    },
    {
        tipo: "mensagem",
        icone: "💌",
        titulo: "Palavras de carinho",
        descricao: "Mensagens permitem compartilhar histórias e lembranças especiais entre familiares e amigos."
    }
];

const listaMemorias = document.querySelector("#lista-memorias");
const botoesFiltro = document.querySelectorAll(".filtros button");

function exibirMemorias(lista) {
    if (!listaMemorias) {
        return;
    }

    listaMemorias.innerHTML = "";

    lista.forEach((memoria) => {
        const imagemMemoria = memoria.imagem
            ? `
                <img
                    class="memoria-imagem"
                    src="${memoria.imagem}"
                    alt="${memoria.alt}"
                    width="800"
                    height="533"
                    loading="lazy"
                >
            `
            : `<span class="memoria-icone" aria-hidden="true">${memoria.icone}</span>`;

        listaMemorias.innerHTML += `
            <article class="memoria-card">
                ${imagemMemoria}
                <p class="memoria-tipo">${memoria.tipo}</p>
                <h2>${memoria.titulo}</h2>
                <p>${memoria.descricao}</p>
            </article>
        `;
    });
}

function filtrarMemorias(event) {
    const filtroSelecionado = event.target.dataset.filtro;

    botoesFiltro.forEach((botao) => {
        botao.classList.remove("filtro-ativo");
    });

    event.target.classList.add("filtro-ativo");

    if (filtroSelecionado === "todos") {
        exibirMemorias(memorias);
    } else {
        const memoriasFiltradas = memorias.filter(
            (memoria) => memoria.tipo === filtroSelecionado
        );

        exibirMemorias(memoriasFiltradas);
    }
}

if (listaMemorias) {
    exibirMemorias(memorias);
}

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", filtrarMemorias);
});
const formularioMemoria = document.querySelector("#form-memoria");
const mensagemFormulario = document.querySelector("#mensagem-formulario");

function obterQuantidadeRegistros() {
    return Number(localStorage.getItem("quantidadeMemorias")) || 0;
}

function registrarEnvioFormulario(event) {
    event.preventDefault();

    const quantidadeAtual = obterQuantidadeRegistros();
    const novaQuantidade = quantidadeAtual + 1;

    localStorage.setItem("quantidadeMemorias", `${novaQuantidade}`);

    if (mensagemFormulario) {
        mensagemFormulario.textContent =
            `Lembrança registrada para demonstração. Total de registros neste navegador: ${novaQuantidade}.`;
    }

    formularioMemoria.reset();
}

if (formularioMemoria) {
    formularioMemoria.addEventListener("submit", registrarEnvioFormulario);
}