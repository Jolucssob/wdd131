// 1. Obter o ano atual dinamicamente e injetar no primeiro parágrafo
const anoAtual = new Date().getFullYear();
document.getElementById("ano-atual").textContent = anoAtual;

// 2. Obter a data/hora da última modificação do arquivo e injetar no segundo parágrafo
const ultimaModif = document.lastModified;
document.getElementById("ultima-modificacao").textContent = `Última modificação: ${ultimaModif}`;
