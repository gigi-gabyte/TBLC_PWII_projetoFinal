const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => 
{
    icon.addEventListener('click', function ()
    {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    })
})


const form = document.getElementById('form')
const senha = document.getElementById('password')
const confirmarSenha = document.getElementById('confirm_password')
const mensagem = document.getElementById('password-error')

form.addEventListener('submit', function(event) {

    if (senha.value !== confirmarSenha.value) {

        event.preventDefault()

        mensagem.textContent = 'As senhas não são iguais.'
        mensagem.style.display = 'block'

        confirmarSenha.focus()

        setTimeout(function() 
        {
            mensagem.style.display = 'none'
        }, 3000)

        return
    }

    mensagem.style.display = 'none'
})