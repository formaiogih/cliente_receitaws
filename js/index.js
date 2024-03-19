(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

function chamarServicoReceitaWS() {
    
    const cnpj_digitado = document.getElementById("cnpj").value;

    const urlReceitaWS = 'https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/'  + cnpj_digitado;
    const config = { method: 'GET', headers: {Accept: 'aplication.json'}}

    fetch(urlReceitaWS, config)

    .then(response => {

        if(response.ok){
            alert("Resposta OK");

            return response.json();

        } else {
            alert("Resposta não OK");
        }
     })

    .then((data) => {
        // alert(JSON.stringify(data));
        console.log(`Informações sobre o CNPJ ${cnpj_digitado}`);
        console.log(`Nome: ${data.nome}`);
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Número: ${data.numero}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.municipio}`);
        console.log(`Estado: ${data.uf}`);
        console.log(`E-mail: ${data.email}`);
        console.log(`Telefone: ${data.telefone}`);
        console.log(`Natureza jurídica: ${data.natureza_juridica}`);
        console.log(`Tipo: ${data.tipo}`);
        console.log(`Porte: ${data.porte}`);
        console.log(`Abertura: ${data.abertura}`);
        console.log(`Estado: ${data.uf}`);
        console.log(`Última atualização: ${data.ultima_atualizacao}`);

        const nome = data.nome
        const logradouro = data.logradouro
        const numero = data.numero
        const bairro = data.bairro
        const cidade = data.municipio
        const estado = data.uf
        const email = data.email
        const telefone = data.telefone
        const natureza = data.natureza_juridica
        const tipo = data.tipo
        const porte = data.porte
        const abertura = data.abertura
        const atualizacao = data.ultima_atualizacao

        resultado.textContent = "Informações sobre o CNPJ: " + cnpj_digitado + "; Nome: " + nome + "; Logradouro: " + logradouro + "; Número: " + numero + "; Bairro: " + bairro + "; Cidade: " + cidade + "; Estado: " + estado + "; E-mail: " + email + "; Telefone: " + telefone + "; Natureza jurídica: " + natureza + "; Tipo: " + tipo + "; Porte: " + porte + "; Abertura: " + abertura + "; Última atualização: " + atualizacao;
    })

    .catch(error => {
        alert("ALERT: Erro ao requisitar o serviço na nuvem!")

        console.error("Erro ao requisitar o serviço na nuvem")
    })

}

// document.getElementById('botao').addEventListener('click', chamarServicoReceitaWS);