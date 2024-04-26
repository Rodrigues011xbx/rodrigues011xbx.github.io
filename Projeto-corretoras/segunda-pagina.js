const urlParametros = new URLSearchParams(window.location.search);
const cnpj = urlParametros.get('cnpj');

const imgCorretora = document.querySelector('img');
const titulo = document.querySelector("#titulo");
const tbody = document.querySelector("tbody");

const imgsURL = [
    {
        cnpj: "76621457000185",
        src: "./imagens-projeto/imagens-corretoras/4um.jpeg"
    },
    {
        cnpj: "33817677000176",
        src: "./imagens-projeto/imagens-corretoras/abc-brasil.jpeg"
    },
    {
        cnpj: "10664027000132",
        src: "./imagens-projeto/imagens-corretoras/cvm.jpeg"
    },
    {
        cnpj: "44527444000155",
        src: "./imagens-projeto/imagens-corretoras/ABN-Ambro.jpeg"
    },
    {
        cnpj: "33819590000138",
        src: "./imagens-projeto/imagens-corretoras/cvc.jpeg"
    },
    {
        cnpj: "92856905000186",
        src: "./imagens-projeto/imagens-corretoras/action-corretora.jpeg"
    },
    {
        cnpj: "24159923000159",
        src: "./imagens-projeto/imagens-corretoras/action-distribuidora.jpeg"
    },
    {
        cnpj: "43050917000103",
        src: "./imagens-projeto/imagens-corretoras/active-trades.jpeg"
    },
    {
        cnpj: "09259391000138",
        src: "./imagens-projeto/imagens-corretoras/Ademar.jpeg"
    },
    {
        cnpj: "35937283000187",
        src: "./imagens-projeto/imagens-corretoras/cvc-sa.jpeg"
    }
];


fetch(`https://brasilapi.com.br/api/cvm/corretoras/v1/${cnpj}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        titulo.innerHTML = `
            ${
                imgsURL.some(obj => obj.cnpj === cnpj) ?
                `<img src="${imgsURL.find(obj => obj.cnpj === cnpj).src}">` :
                ""
            }
            <h1>${response.nome_social ?? response?.message}</h1>
        `;
        for (const propriedade in response) {
            if (propriedade === "type") continue;
            if (propriedade === "nome_social") continue;
            const label = deixarNomeDaPropriedadeMaisBonito(propriedade);
            tbody.innerHTML += `
                <tr>
                    <th>${label}:</th>
                    <td>${response[propriedade]}</td>
                </tr>
            `;
        }
    });

function deixarNomeDaPropriedadeMaisBonito(nomePropriedade) {
    const nomesSeparados = nomePropriedade.split("_").map(palavra => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });
    const novoNome = nomesSeparados.join(" ");
    return novoNome;
}