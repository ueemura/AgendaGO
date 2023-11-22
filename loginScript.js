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
    transferirValoresDoLoginParaCadastro();
});

buttonCloseCadastro.onclick = function() {
    modalCadastro.classList.remove('show'); // Remove a classe show ao fechar
};

document.getElementById('fecharCadastro').addEventListener('click', function() {
    modalCadastro.close();
});

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalCadastro.showModal();
    transferirValoresDoLoginParaCadastro();
});

// Validação de Email e Senha

function validateFields() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById("buttonEsqueci").disabled = !emailValid;    
    document.getElementById("buttonEntrar").disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("campoEmail").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById("campoSenha").value;
    return password.length > 0;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Validação de Email, Senha e Confirmação da Senha de Cadastro
function validateCadastroFields() {
    const emailValid = isEmailCadastroValid();
    const passwordValid = isPasswordCadastroValid();
    const confirmPasswordValid = isConfirmPasswordValid();
    document.getElementById("buttonSalvarCadastro").disabled = !emailValid || !passwordValid || !confirmPasswordValid;
}

function isEmailCadastroValid() {
    const emailCadastro = document.getElementById("campoEmailCadastro").value;
    if (!emailCadastro) {
        return false;
    }
    return validateEmail(emailCadastro);
}

function isPasswordCadastroValid() {
    const passwordCadastro = document.getElementById("campoSenhaCadastro").value;
    return passwordCadastro.length > 0;
}

function isConfirmPasswordValid() {
    const passwordCadastro = document.getElementById("campoSenhaCadastro").value;
    const confirmPassword = document.getElementById("campoConfirmacaoSenha").value;
    return passwordCadastro === confirmPassword;
}

// Função para transferir valores do login para o cadastro
function transferirValoresDoLoginParaCadastro() {
    const emailLogin = document.getElementById("campoEmail").value;
    const senhaLogin = document.getElementById("campoSenha").value;

    document.getElementById("campoEmailCadastro").value = emailLogin;
    document.getElementById("campoSenhaCadastro").value = senhaLogin;
}
