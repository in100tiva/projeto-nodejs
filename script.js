// Este arquivo pode conter funcionalidades JavaScript, como validação de e-mail.
document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
    var emailInput = document.querySelector('.newsletter-input');
    if (!emailInput.value.includes('@')) {
        alert('Por favor, insira um endereço de e-mail válido.');
        event.preventDefault();  // Impede o envio do formulário
    }
});

