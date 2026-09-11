// Exibe o ano atual no rodapé
const anoAtual = document.querySelector("#ano-atual");
anoAtual.textContent = new Date().getFullYear();

// Exibe a data da última modificação da página
const ultimaModificacao = document.querySelector("#ultima-modificacao");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;