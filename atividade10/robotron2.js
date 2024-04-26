const buttons = Array.from(document.getElementsByClassName("controle-ajuste"));
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

const listaRobotron = document.getElementById("robotron-container").children;

// Troca de cor
let lastIndex = listaRobotron.length - 1;
let indexRobo = 0;
botaoAnterior.addEventListener("click", () => {
    esconder(indexRobo);
    indexRobo = (indexRobo === 0) ? lastIndex : indexRobo - 1;
    mostrar(indexRobo);
});

botaoProximo.addEventListener("click", () => {
    esconder(indexRobo);
    indexRobo = (indexRobo === lastIndex) ? 0 : indexRobo + 1;
    mostrar(indexRobo);
});

function esconder(index) {
    listaRobotron[index].style.display = "none";
}

function mostrar(index) {
    listaRobotron[index].style.display = "block";
}

// Mudar Valores do Input
buttons.forEach(botao => {
    botao.addEventListener("click", mudarValor);
});

function mudarValor(event) {
    const botao = event.srcElement;
    const input = botao.parentNode.children[1];
    if (botao.innerText === "+") {
        if (input.value === "10") return;
        valor = Number(input.value) + 1;
        input.value = valor !== 10 ? "0"+valor : valor;
    }
    else if (botao.innerText === "-") {
        if (input.value === "00") return;
        valor = Number(input.value) - 1;
        input.value = "0"+valor;
    }
}