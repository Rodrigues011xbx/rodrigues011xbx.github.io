const card = document.getElementById("card-teste"); // card de

const nome = document.getElementById("exampleFormControlInput1"); // input de nome
const peso = document.getElementById("exampleFormControlInput2"); // input de peso
const altura = document.getElementById("exampleFormControlInput3"); // input de altura

function mostrarCard() {
    if (card.style.display === "none") {
        card.style.display = "block";
    }
    atualizarCard();
}

function fecharCard() {
    card.style.display = "none";
}

function atualizarCard() {
    let pesoValue = peso.value.replace(",", ".");
    let alturaValue = altura.value.replace(",", ".");

    if (isNaN(pesoValue) || isNaN(alturaValue)) {
        alert("Você não colocou números em um campo de peso ou altura")
        fecharCard();
        return
    }
    const imc = calcularIMC(pesoValue, alturaValue);
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Detalhes</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Olá, ${nome.value}.</h6>
            <p class="card-text">O seu IMC é de : ${imc}</p>
            <a href="https://indicedemassacorporal.com/tabela-imc.html" class="card-link">Verifique seu status (média social)</a>
        </div>
    </div>
    `;
}

function calcularIMC(peso_calc, altura_calc) {
    const imc = peso_calc / (altura_calc ** 2);
    return imc.toFixed(2);
}

