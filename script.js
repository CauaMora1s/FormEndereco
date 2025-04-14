document.getElementById("cep").addEventListener("blur", (event) => {
    const element = event.target;
    const informedCEP = element.value;

    if (informedCEP.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${informedCEP}/json/`).then(response => response.json().then(data => {
        if (!data.erro) {
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
            document.getElementById("numero").focus();
        } else {
            alert("CEP inválido.");
        }
    }).catch(error => console.error(`Falha na requisição: ${error}`)))
})
document.getElementById("btn");addEventListener("click", () => {
    const endereco = {
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        numero: document.getElementById("numero").value
    }
    localStorage.setItem("endereco", JSON.stringify(endereco));
})
window.onload = function() {
    const endereco = JSON.parse(localStorage.getItem('endereco'));
    document.getElementById("cep").value = endereco.cep;
    document.getElementById("logradouro").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("estado").value = endereco.estado;
    document.getElementById("numero").value = endereco.numero;
}