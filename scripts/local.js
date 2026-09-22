// ==============================
// RODAPÉ
// ==============================

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;


// ==============================
// DADOS ESTÁTICOS DO CLIMA
// ==============================

const temperatura = 10;
const velocidadeVento = 5;


// ==============================
// SENSAÇÃO TÉRMICA
// ==============================

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12
        + (0.6215 * temperatura)
        - (11.37 * Math.pow(velocidadeVento, 0.16))
        + (0.3965
            * temperatura
            * Math.pow(velocidadeVento, 0.16));
}


// ==============================
// EXIBIR RESULTADO
// ==============================

const sensacaoTermica =
    document.querySelector("#wind-chill");

if (temperatura <= 10 && velocidadeVento > 4.8) {

    const resultado =
        calcularSensacaoTermica(
            temperatura,
            velocidadeVento
        );

    sensacaoTermica.textContent =
        `${resultado.toFixed(1)} °C`;

} else {

    sensacaoTermica.textContent = "N/A";
}