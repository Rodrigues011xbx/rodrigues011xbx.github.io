// Variaveis globais
const icon = document.getElementById('icon-theme');
const table = document.getElementById('table');
const tableBody = document.getElementById('table-corretoras');
const inputPesquisa = document.getElementById('input-pesquisa');


// Corretoras na Tabela
fetch("https://brasilapi.com.br/api/cvm/corretoras/v1")
    .then(response => response.json())
    .then(lista => {
        lista.forEach(corretora => {
            let nome = corretora.nome_comercial;
            if (nome.replace(/[-\s]+/g, "") === "") {
                nome = corretora.nome_social;
            }
            tableBody.innerHTML += `
            <tr>
                <td>${corretora.cnpj}</td>
                <td>
                    <a target="_blank" href="./dados.html?cnpj=${corretora.cnpj}">
                        ${nome}
                    </a
                </td>
                <td>${corretora.email}</td>
                <td>${corretora.data_registro}</td>
            </tr>`;
        });
    });


// Mudança de Tema
icon.addEventListener('click', () => {
    table.classList.toggle('table-dark');
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.innerHTML = "sunny";
    }
    else {
        icon.innerHTML = "dark_mode";
    }
});


// Ação de Pesquisa
inputPesquisa.addEventListener("input", pesquisar);

function pesquisar() {
    const pesquisa = inputPesquisa.value.toLowerCase().trim().replace(/ +/g, " ");
    const linhas = Array.from(tableBody.children);
    linhas.forEach(corretora => corretora.style.display = "table-row");

    const listaNaoPesquisados = linhas.filter(corretora => {
        let nomeCorretora = Array.from(corretora.children)[1];
        nomeCorretora = nomeCorretora.innerText.toLowerCase();
        return !nomeCorretora.includes(pesquisa);
    });
    listaNaoPesquisados.forEach(corretora => corretora.style.display = "none");
}