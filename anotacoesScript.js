document.getElementById('buttonAnotacaoOne').addEventListener('click', function() {
    window.location.href = 'anotacao.html';
});

document.getElementById('buttonVoltar').addEventListener('click', function() {
    window.location.href = 'main.html';
});

document.getElementById('buttonSair').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Modal Título do Novo Doc Engine
var modalCadastro = document.getElementById('setarTituloNovoDoc'); 
var openModalCadastro = document.getElementById('anotacaoPlus'); 
var buttonCloseCadastro = document.getElementById('fecharTituloNovoDoc');

openModalCadastro.onclick = function() {
    modalCadastro.showModal();
}

buttonCloseCadastro.onclick = function() {
    modalCadastro.close();
};

document.getElementById('anotacaoPlus').addEventListener('click', function() {
    modalCadastro.classList.add('show'); // Adiciona a classe show ao abrir
});

buttonCloseCadastro.onclick = function() {
    modalCadastro.classList.remove('show'); // Remove a classe show ao fechar
};

document.getElementById('fecharTituloNovoDoc').addEventListener('click', function() {
    modalCadastro.close();
});

document.getElementById('anotacaoPlus').addEventListener('click', function() {
    modalCadastro.showModal();
});
