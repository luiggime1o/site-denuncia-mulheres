function Login() {
    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;

    const usuarioCadastrado = localStorage.getItem('usuario');
    const senhaCadastrada = localStorage.getItem('senha');


    if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
        alert("Login bem-sucedido!");

        localStorage.setItem('usuarioLogado', usuario); 
        window.location.href = 'perfil-user.html';  

    } else {
        alert("Usuário ou senha incorretos!");
    }
}
