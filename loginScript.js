document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'main.html';
});

document.getElementById('buttonLoginGoogle').addEventListener('click', function() {
    window.location.href = 'main.html';
});

// Modal Cadastrar Engine
var modalOne = document.getElementById('formCadastro'); 
var openModalOne = document.getElementById('buttonCadastrar'); 
var buttonCloseOne = document.getElementById('fecharCadastro');

openModalOne.onclick = function() {
  modalOne.showModal();
}

buttonCloseOne.onclick = function() {
  modalOne.close();
};
document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalOne.classList.add('show'); // Adiciona a classe show ao abrir
});

buttonCloseOne.onclick = function() {
    modalOne.classList.remove('show'); // Remove a classe show ao fechar
};

document.getElementById('fecharCadastro').addEventListener('click', function() {
    modalOne.close();
});

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalOne.showModal();
});
