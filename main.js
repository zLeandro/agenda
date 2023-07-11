const form = document.getElementById("agenda");
const nomes = [];
const numeros = []

let linhas = "";
form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById("nome");
    const inputNumero = document.getElementById ("contato");

    if (nomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} ja foi inserido`);
    }
    else {
        nomes.push(inputNome.value);
        numeros.push(parseFloat(inputNumero.value));
    
        let linha = "<tr>";
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += "</tr>";
    
        linhas += linha;
    }

    inputNome.value = "";
    inputNumero.value = "";
}

function atualizaTabela() {
    const corpotabela = document.querySelector("tbody");
    corpotabela.innerHTML = linhas;
}
