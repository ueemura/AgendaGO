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

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function isEmailValid() {
    const email = document.getElementById("campoEmail").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = document.getElementById("campoEmail").value;
    if (!email) {
        document.getElementById("pEmailRequired").style.color = "red";
    } else {
        document.getElementById("pEmailRequired").style.color = "transparent";
    }

    if (validateEmail(email)) {
        document.getElementById("pInvalidEmail").style.color = "transparent";
    } else {
        document.getElementById("pInvalidEmail").style.color = "red";
    }
}

function togglePasswordErrors() {
    const password = document.getElementById("campoSenha").value;
    if (!password) {
        document.getElementById("pInvalidPassword").style.color = "red";
    } else {
        document.getElementById("pInvalidPassword").style.color = "transparent";
    }
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById("buttonEsqueci").disabled = !emailValid;    
    document.getElementById("buttonEntrar").disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = document.getElementById("campoSenha").value;
    return password.length > 0;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Validação de Email, Senha e Confirmação da Senha de Cadastro
function onChangeEmailCadastro() {
    toggleButtonsDisableCadastro();
    toggleEmailErrorsCadastro();
}

function onChangePasswordCadastro() {
    toggleButtonsDisableCadastro();
    togglePasswordErrorsCadastro();
}

function onChangeConfirmPasswordCadastro() {
    toggleButtonsDisableCadastro();
    toggleConfirmPasswordErrorsCadastro();
}

function isEmailCadastroValid() {
    const emailCadastro = document.getElementById("campoEmailCadastro").value;
    if (!emailCadastro) {
        return false;
    }
    return validateEmail(emailCadastro);
}

function toggleEmailErrorsCadastro() {
    const emailCadastro = document.getElementById("campoEmailCadastro").value;
    if (!emailCadastro) {
        document.getElementById("pEmailRequiredCadastro").style.color = "red";
    } else {
        document.getElementById("pEmailRequiredCadastro").style.color = "transparent";
    }

    if (validateEmail(emailCadastro)) {
        document.getElementById("pInvalidEmailCadastro").style.color = "transparent";
    } else {
        document.getElementById("pInvalidEmailCadastro").style.color = "red";
    }
}

function togglePasswordErrorsCadastro () {
    const passwordCadastro = document.getElementById("campoSenhaCadastro").value;
    if (!passwordCadastro) {
        document.getElementById("pInvalidPasswordCadastro").style.color = "red";
    } else {
        document.getElementById("pInvalidPasswordCadastro").style.color = "transparent";
    }
}

function toggleConfirmPasswordErrorsCadastro() {
    const passwordCadastro = document.getElementById("campoSenhaCadastro").value;
    const confirmPassword = document.getElementById("campoConfirmacaoSenha").value;
    if (passwordCadastro === confirmPassword) {
        document.getElementById("pDissimilarPasswordCadastro").style.color = "transparent";
    } else {
        document.getElementById("pDissimilarPasswordCadastro").style.color = "red";
    }
}

function toggleButtonsDisableCadastro() {    
    const emailValid = isEmailCadastroValid();
    const passwordValid = isPasswordCadastroValid();
    const confirmPasswordValid = isConfirmPasswordValid();
    document.getElementById("buttonSalvarCadastro").disabled = !emailValid || !passwordValid || !confirmPasswordValid;
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
