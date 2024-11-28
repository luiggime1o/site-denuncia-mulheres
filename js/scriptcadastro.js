function cadastrarUsuario() {
    const email = document.getElementById('email').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    // Verifica se o email contém "@"
    if (!email.includes('@')) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    // Verifica se o nome de usuário contém apenas caracteres alfanuméricos
    const usuarioValido = /^[a-zA-Z0-9]+$/.test(usuario);
    if (!usuarioValido) {
        alert("O nome de usuário deve conter apenas caracteres alfanuméricos!");
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Armazena os dados no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senha', senha);

    alert("Cadastro realizado com sucesso!");
    window.location.href = 'login.html'; 
}
