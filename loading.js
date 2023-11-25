function showLoading() {
    // Criar div principal
    const divLoad = document.createElement('div');
    divLoad.className = 'divLoad';
    // Criar elemento h1
    const h1Element = document.createElement('h1');
    // Array com as letras
    const letters = ['l', 'o', 'a', 'd', 'i', 'n', 'g'];
    // Iterar sobre as letras e criar spans
    for (let i = 1; i <= letters.length; i++) {
        const spanElement = document.createElement('span');
        spanElement.id = 'let' + i;
        spanElement.className = 'spanLoading';
        spanElement.textContent = letters[i - 1];
        h1Element.appendChild(spanElement);
    }
    // Adicionar h1 à div
    divLoad.appendChild(h1Element);
    // Adicionar a div à página
    document.body.appendChild(divLoad);
    setTimeout(() => hideLoading(), 4000);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("divLoad");
    if (loadings.length) {
        loadings[0].remove();
    }
}
