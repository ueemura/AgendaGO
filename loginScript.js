// Validação de Email e Senha

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(formEntrar.email().value, formEntrar.password().value).then(response => {
        setTimeout(() => {
            hideLoading();
            window.location.href = "main.html";
        }, 3000);
    }).catch(error => {
        setTimeout(() => {
            hideLoading();
            alert(getErrorMessage(error));
        }, 3000)
    })
}

function getErrorMessage(error) {
    /*if (error.code == "auth/invalid-login-credentials") {
        return "Usuário ou senha inválidos!";
    } else if (error.code == "auth/email-already-in-use"){
        return "Este email já está cadastrado!";
    }*/
    return error.message;
}

function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(formEntrar.email().value).then(() => {
        setTimeout(() => { 
            hideLoading();
            alert("Email para recuperação de senha enviado com sucesso!");
         }, 3000);}).catch(error => {
        setTimeout(() => { 
            hideLoading();
            alert(getErrorMessage(error));
         }, 3000);        
    });
}

function isEmailValid() {
    const email = formEntrar.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = formEntrar.email().value;
    formEntrar.emailRequiredError().style.color = email ? "transparent" : "red";
    formEntrar.emailInvalidError().style.color = validateEmail(email) ? "transparent" : "red";
}

function togglePasswordErrors() {
    const password = formEntrar.password().value;
    formEntrar.passwordRequiredError().style.color = !password ? "red" : "transparent";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    formEntrar.recoverPassword().disabled = !emailValid;    
    formEntrar.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = formEntrar.password().value;
    return password.length > 0;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const formEntrar = {
    email: () => document.getElementById("campoEmail"),
    emailInvalidError: () => document.getElementById("pInvalidEmail"),
    emailRequiredError: () => document.getElementById("pEmailRequired"), 
    loginButton: () => document.getElementById("buttonEntrar"),
    password: () => document.getElementById("campoSenha"),
    passwordRequiredError: () => document.getElementById("pInvalidPassword"),
    recoverPassword: () => document.getElementById("buttonEsqueci")
}

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

// Validação de Email, Senha e Confirmação da Senha de Cadastro
function onChangeEmailCadastro() {
    toggleButtonsDisableCadastro();
    toggleEmailErrorsCadastro();
}

function onChangePasswordCadastro() {
    toggleButtonsDisableCadastro();
    togglePasswordErrorsCadastro();
    toggleConfirmPasswordErrorsCadastro();
}

function onChangeConfirmPasswordCadastro() {
    toggleButtonsDisableCadastro();
    toggleConfirmPasswordErrorsCadastro();
}

function register() {
    showLoading();
    const email = formCadastrar.email().value;
    const password = formCadastrar.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        setTimeout(() => {
            hideLoading();
            window.location.href = "main.html";
        }, 3000);
    }).catch(error => {
        setTimeout(() => {
            hideLoading();
            alert(getErrorMessage(error));
        }, 3000)
    })
}

function isEmailCadastroValid() {
    const emailCadastro = formCadastrar.email().value;
    return !emailCadastro ? false : validateEmail(emailCadastro);
}

function toggleEmailErrorsCadastro() {
    const emailCadastro = formCadastrar.email().value;
    formCadastrar.emailRequiredError().style.color = !emailCadastro ? "red" : "transparent";
    formCadastrar.emailInvalidError().style.color = validateEmail(emailCadastro) ? "transparent" : "red";
}

function togglePasswordErrorsCadastro () {
    const passwordCadastro = formCadastrar.password().value;
    formCadastrar.passwordRequiredError().style.color = !passwordCadastro ? "red" : "transparent";
    formCadastrar.passwordMinLengthError().style.color = passwordCadastro.length >= 6 ? "transparent" : "red";
}

function toggleConfirmPasswordErrorsCadastro() {
    const passwordCadastro = formCadastrar.password().value;
    const confirmPassword = formCadastrar.confirmPassword().value;
    formCadastrar.dissimilarPassword().style.color = (passwordCadastro === confirmPassword) ? "transparent" : "red";    
}

function toggleButtonsDisableCadastro() {    
    const emailValid = isEmailCadastroValid();
    const passwordValid = isPasswordCadastroValid();
    const confirmPasswordValid = isConfirmPasswordValid();
    formCadastrar.registerButton().disabled = !emailValid || !passwordValid || !confirmPasswordValid;
}

function isPasswordCadastroValid() {
    const passwordCadastro = formCadastrar.password().value;
    return passwordCadastro.length > 0;
}

function isConfirmPasswordValid() {
    const passwordCadastro = formCadastrar.password().value;
    const confirmPassword = formCadastrar.confirmPassword().value;
    return passwordCadastro === confirmPassword;
}

const formCadastrar = {
    email: () => document.getElementById("campoEmailCadastro"),
    emailInvalidError: () => document.getElementById("pInvalidEmailCadastro"),
    emailRequiredError: () => document.getElementById("pEmailRequiredCadastro"),
    registerButton: () => document.getElementById("buttonSalvarCadastro"),
    password: () => document.getElementById("campoSenhaCadastro"),
    passwordRequiredError: () => document.getElementById("pInvalidPasswordCadastro"),
    passwordMinLengthError: () => document.getElementById("pMinLengthError"),
    confirmPassword: () => document.getElementById("campoConfirmacaoSenha"),
    dissimilarPassword: () => document.getElementById("pDissimilarPasswordCadastro")
}

// Função para transferir valores do login para o cadastro
function transferirValoresDoLoginParaCadastro() {
    const emailLogin = formEntrar.email().value;
    const senhaLogin = formEntrar.password().value;

    formCadastrar.email().value = emailLogin;
    formCadastrar.password().value = senhaLogin;
}
