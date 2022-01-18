function fazPost(url, body) {
    console.log(body);
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }
}

function cadastroCliente() {

    event.preventDefault()
    let url = "http://localhost:8080/clientes/"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let cnpj = document.getElementById("cnpj").value
    let tipo = document.getElementById("tipo").value


    console.log(nome)
    console.log(email)
    console.log(cpf)
    console.log(cnpj)
    console.log(tipo)


    body = {
        "nome": nome,
        "email": email,
        "cpf": cpf,
        "cnpj": cnpj,
        "tipo": tipo

    }

    fazPost(url, body)
}