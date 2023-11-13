const muteSoundButton = document.getElementById('muteSoundButton');

// Recupera o estado atual do som do armazenamento local
const isSoundMuted = localStorage.getItem('isSoundMuted') === 'true';

// Atualiza a aparência do botão com base no estado recuperado
updateSoundButtonAppearance(isSoundMuted);

muteSoundButton.addEventListener('click', function () {
    // Inverte o estado do som
    const isSoundMuted = !muteSoundButton.classList.contains('muted');

    // Atualiza a aparência do botão
    updateSoundButtonAppearance(isSoundMuted);

    // Armazena o estado do som no localStorage
    localStorage.setItem('isSoundMuted', isSoundMuted.toString());
});

function updateSoundButtonAppearance(isSoundMuted) {
    if (isSoundMuted) {
        muteSoundButton.src = 'assets/images/soundOff.svg';
        muteSoundButton.classList.add('muted');
    } else {
        muteSoundButton.src = 'assets/images/soundOn.svg';
        muteSoundButton.classList.remove('muted');
    }
}
