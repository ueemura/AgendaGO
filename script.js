document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'main.html';
});

document.getElementById('buttonLoginGoogle').addEventListener('click', function() {
    window.location.href = 'main.html';
});