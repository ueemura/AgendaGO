document.getElementById('buttonVoltar').addEventListener('click', function() {
    window.location.href = 'anotacoes.html';
});

document.getElementById('buttonSair').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('formAnotacao').addEventListener('submit', function(event) {
    event.preventDefault();
    // Obtenha o texto da anotação
    let textoAnotacao = document.getElementById('textAnotacao').value;
    // Salve o texto no cache do navegador
    localStorage.setItem('textoAnotacao', textoAnotacao);
});

// Recupere o texto do cache e preencha o textarea ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    let textoSalvo = localStorage.getItem('textoAnotacao');
    if (textoSalvo) {
        document.getElementById('textAnotacao').value = textoSalvo;
    }
});
