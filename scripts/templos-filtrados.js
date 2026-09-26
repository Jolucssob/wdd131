const anoAtual = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

anoAtual.textContent = new Date().getFullYear();

ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;


// MENU HAMBÚRGUER

const menuButton = document.querySelector("#menu");
const navegacao = document.querySelector(".navegacao");

menuButton.addEventListener("click", () => {

    navegacao.classList.toggle("show");
    menuButton.classList.toggle("show");

    const expanded =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
        "aria-expanded",
        !expanded
    );
});


// LISTA DE TEMPLOS

const templos = [

    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-05-22",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Cidade do México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

   {
    nomeDoTemplo: "Fortaleza Brasil",
    localizacao: "Fortaleza, Ceará, Brasil",
    consagracao: "2019-06-02",
    area: 36000,
   urlDaImagem: "imagens/templo-fortaleza-reduzido.jpg"
},
{
    nomeDoTemplo: "Salvador Brasil",
    localizacao: "Salvador, Bahia, Brasil",
    consagracao: "2024-10-20",
    area: 29963,
    urlDaImagem: "imagens/templo-salvador-reduzida.jpg"
},
{
    nomeDoTemplo: "Madri Espanha",
    localizacao: "Madri, Espanha",
    consagracao: "1999-03-19",
    area: 45800,
    urlDaImagem: "imagens/madrid-reduzida.jpg"
}


];


// CRIAÇÃO DOS CARDS

function criarCards(listaDeTemplos) {

    const container = document.querySelector(".res-grid");

    container.innerHTML = "";

    listaDeTemplos.forEach((templo) => {

        const card = document.createElement("section");

        const nome = document.createElement("h3");
        const localizacao = document.createElement("p");
        const consagracao = document.createElement("p");
        const area = document.createElement("p");
        const imagem = document.createElement("img");

        nome.textContent = templo.nomeDoTemplo;

        localizacao.innerHTML =
            `<span class="label">Localização:</span> ${templo.localizacao}`;

        consagracao.innerHTML =
            `<span class="label">Consagração:</span> ${templo.consagracao}`;

        area.innerHTML =
            `<span class="label">Área:</span> ${templo.area} pés²`;

        imagem.setAttribute(
            "src",
            templo.urlDaImagem
        );

        imagem.setAttribute(
            "alt",
            `Templo de ${templo.nomeDoTemplo}`
        );

        imagem.setAttribute(
            "loading",
            "lazy"
        );

        card.appendChild(nome);
        card.appendChild(localizacao);
        card.appendChild(consagracao);
        card.appendChild(area);
        card.appendChild(imagem);

        container.appendChild(card);
    });
}


// FILTROS

function ativarLink(elemento) {

    document.querySelectorAll(".navegacao a")
        .forEach((link) => {

            link.classList.remove("active");

        });

    elemento.classList.add("active");
}


document.querySelector("#all")
    .addEventListener("click", (event) => {

        event.preventDefault();

        ativarLink(event.target);

        document.querySelector("main h2")
            .textContent = "Página Inicial";

        criarCards(templos);
    });


document.querySelector("#old")
    .addEventListener("click", (event) => {

        event.preventDefault();

        ativarLink(event.target);

        document.querySelector("main h2")
            .textContent = "Templos Antigos";

        const antigos = templos.filter(
            (templo) =>
                new Date(templo.consagracao) <
                new Date("1900-01-01")
        );

        criarCards(antigos);
    });


document.querySelector("#new")
    .addEventListener("click", (event) => {

        event.preventDefault();

        ativarLink(event.target);

        document.querySelector("main h2")
            .textContent = "Templos Novos";

        const novos = templos.filter(
            (templo) =>
                new Date(templo.consagracao) >
                new Date("2000-01-01")
        );

        criarCards(novos);
    });


document.querySelector("#large")
    .addEventListener("click", (event) => {

        event.preventDefault();

        ativarLink(event.target);

        document.querySelector("main h2")
            .textContent = "Templos Grandes";

        const grandes = templos.filter(
            (templo) => templo.area > 90000
        );

        criarCards(grandes);
    });


document.querySelector("#small")
    .addEventListener("click", (event) => {

        event.preventDefault();

        ativarLink(event.target);

        document.querySelector("main h2")
            .textContent = "Templos Pequenos";

        const pequenos = templos.filter(
            (templo) => templo.area < 10000
        );

        criarCards(pequenos);
    });


// MOSTRA TODOS AO ABRIR A PÁGINA

criarCards(templos);