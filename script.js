const cep = document.getElementById('cep')
const endereco = document.getElementById('endereco')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')
const form = document.querySelector('form')
const submit = document.getElementById('submit')

async function buscaCEP(cep) {
    try {
        const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var urlConvertida = await url.json()
        console.log(url)
        console.log(urlConvertida)
        
        endereco.value = urlConvertida.logradouro;
        bairro.value = urlConvertida.bairro;
        cidade.value = urlConvertida.localidade;
        uf.value = urlConvertida.uf
    } catch (erro) {
        console.log(erro)
    }
}

// Validação com RegExp
const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
function validaCep(cep) {
    // 'test()' é um método js usado em regExp. Ele retorna true caso a validação esteja correta.
    if (cepRegex.test(cep)) {
        event.preventDefault()
        buscaCEP(cep)
    } else {
        event.preventDefault()
        alert("Padrão inválido. Utilize o formato: XXXXX-XXX, onde cada X representa um digito de 0 a 9")
        form.reset()
    }
}

//cep.addEventListener('focusout', () => {buscaCEP(cep.value)})

submit.addEventListener("click", () => {validaCep(cep.value)})

