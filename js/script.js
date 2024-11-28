function validarFormulario() {
    const denuncia = document.getElementById('denuncia').value;
    if (denuncia.trim() === '') {
        alert('Por favor, descreva a sua denúncia.');
        return false;
    }
    
    return true;
}
function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
    if(pontos.style.display === "none"){
       pontos.style.display="inline";
       maisTexto.style.display="none"
       btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
       maisTexto.style.display="inline"
       btnLeiaMais.innerHTML="Leia Menos";
    }

}
function leiaMais2(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
    if(pontos.style.display === "none"){
       pontos.style.display="inline";
       maisTexto.style.display="none"
       btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
       maisTexto.style.display="inline"
       btnLeiaMais.innerHTML="Leia Menos";
    }

}


function editarPerfil() {
    document.getElementById('editProfileSection').style.display = 'block';
}

function salvarAlteracoes() {
    const newName = document.getElementById('newName').value;
    const newPhone = document.getElementById('newPhone').value;
    const newImg = document.getElementById('newImg').files[0];

    // Salvando as alterações no localStorage
    if (newName) {
        localStorage.setItem('nome', newName);
        document.getElementById('user-name').textContent = newName;
    }
    if (newPhone) {
        localStorage.setItem('telefone', newPhone);
        document.getElementById('user-phone').textContent = newPhone;
    }
    if (newImg) {
        const reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem('imagemPerfil', event.target.result);
            document.getElementById('profile-img').src = event.target.result;
        };
        reader.readAsDataURL(newImg);
    }

    alert("Alterações salvas com sucesso!");
    document.getElementById('editProfileSection').style.display = 'none';
}

// Carregando os dados do usuário ao entrar no perfil
window.onload = function() {
    const nome = localStorage.getItem('nome');
    const telefone = localStorage.getItem('telefone');
    const imagemPerfil = localStorage.getItem('imagemPerfil');
    
    if (nome) {
        document.getElementById('user-name').textContent = nome;
    }
    if (telefone) {
        document.getElementById('user-phone').textContent = telefone;
    }
    if (imagemPerfil) {
        document.getElementById('profile-img').src = imagemPerfil;
    }
};

// Função de Logoff
function dlt() {
    // Exibe a caixa de confirmação
    const confirmLogoff = confirm("Você tem certeza que deseja deslogar a conta?");

    if (confirmLogoff) {
        // Se o usuário confirmar, removemos os dados do localStorage
        localStorage.removeItem('usuario');
        localStorage.removeItem('senha');
        localStorage.removeItem('nome');
        localStorage.removeItem('telefone');
        localStorage.removeItem('imagemPerfil');

        // Redireciona para a página de login
        window.location.href = 'login.html';
    } else {
        // Caso o usuário não confirme, não faz nada
        console.log("Deslogamento cancelado.");
    }
}

