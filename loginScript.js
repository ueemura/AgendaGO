document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'main.html';
});

document.getElementById('buttonLoginGoogle').addEventListener('click', function() {
    window.location.href = 'main.html';
});

// Modal Cadastrar Engine
var modalCadastro = document.getElementById('formCadastro'); 
var openModalCadastro = document.getElementById('buttonCadastrar'); 
var buttonCloseCadastro = document.getElementById('fecharCadastro');

openModalCadastro.onclick = function() {
    modalCadastro.showModal();
}

buttonCloseCadastro.onclick = function() {
    modalCadastro.close();
};

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalCadastro.classList.add('show'); // Adiciona a classe show ao abrir
});

buttonCloseCadastro.onclick = function() {
    modalCadastro.classList.remove('show'); // Remove a classe show ao fechar
};

document.getElementById('fecharCadastro').addEventListener('click', function() {
    modalCadastro.close();
});

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalCadastro.showModal();
});
