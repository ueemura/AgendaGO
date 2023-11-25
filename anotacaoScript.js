document.getElementById('buttonVoltar').addEventListener('click', function() {
    window.location.href = 'anotacoes.html';
});

document.getElementById('formAnotacao').addEventListener('submit', function(event) {
    event.preventDefault();
    //Obtem o texto da anotação
    let textoAnotacao = document.getElementById('textAnotacao').value;
    //Salva o texto no cache do navegador
    localStorage.setItem('textoAnotacao', textoAnotacao);
});

//Recupera o texto do cache e preenche o textarea ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    let textoSalvo = localStorage.getItem('textoAnotacao');
    if (textoSalvo) {
        document.getElementById('textAnotacao').value = textoSalvo;
    }
});
