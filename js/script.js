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
document.getElementsByName('conheceAgressor').forEach((elem) => {
    elem.addEventListener('change', function() {
        const especificarAgressor = document.getElementById('especificarAgressor');
        if (document.getElementById('conheceSim').checked) {
            especificarAgressor.disabled = false;
        } else {
            especificarAgressor.disabled = true;
            especificarAgressor.value = ""; 
        }
    });
});

function validarFormularioDenuncia() {
    const tipoAbuso = document.getElementById('tipoAbuso').value;
    const dataHora = document.getElementById('dataHora').value;
    const localIncidente = document.getElementById('localIncidente').value;
    const conheceAgressor = document.querySelector('input[name="conheceAgressor"]:checked');
    const descricaoIncidente = document.getElementById('descricaoIncidente').value;
    const contatoPreferido = document.getElementById('contatoPreferido').value;

    if (!tipoAbuso || !dataHora || !localIncidente || !conheceAgressor || !descricaoIncidente || !contatoPreferido) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }


    const denuncia = {
        tipoAbuso: tipoAbuso,
        dataHora: dataHora,
        localIncidente: localIncidente,
        conheceAgressor: conheceAgressor.value,
        especificarAgressor: document.getElementById('especificarAgressor').value,
        descricaoIncidente: descricaoIncidente,
        perigoImediato: document.querySelector('input[name="perigo"]:checked').value,
        ajudaEspecifica: document.getElementById('ajudaEspecifica').value,
        contatoPreferido: contatoPreferido
    };


    fetch('https://api.exemplo.com/denuncias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(denuncia)
    })
    .then(response => response.json())
    .then(data => {
        alert('Denúncia enviada com sucesso!');

        document.getElementById('denuncia-form').reset();
    })
    .catch(error => {
        alert('Erro ao enviar denúncia. Tente novamente.');
        console.error(error);
    });

    return false;
}

document.getElementById("denunciaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página.

    // Coletando os dados do formulário
    const tipoAbuso = document.querySelector('input[name="tipoAbuso"]:checked').value;
    const dataIncidente = document.getElementById("dataIncidente").value;
    const localIncidente = document.getElementById("localIncidente").value;
    const conheceAgressor = document.querySelector('input[name="conheceAgressor"]:checked').value;
    const especificacaoAgressor = document.getElementById("especificacaoAgressor").value;
    const descricaoIncidente = document.getElementById("descricaoIncidente").value;
    const perigoImediato = document.querySelector('input[name="perigoImediato"]:checked').value;
    const ajudaBuscada = document.getElementById("ajudaBuscada").value;
    const contato = document.getElementById("contato").value;

    // Criando um objeto com os dados da denúncia
    const denuncia = {
        tipoAbuso,
        dataIncidente,
        localIncidente,
        conheceAgressor,
        especificacaoAgressor,
        descricaoIncidente,
        perigoImediato,
        ajudaBuscada,
        contato
    };

    // Armazenando os dados no localStorage
    let denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];
    denuncias.push(denuncia);
    localStorage.setItem("denuncias", JSON.stringify(denuncias));

    alert("Denúncia enviada com sucesso!");

    // Redirecionando para a página de administração (ou outra página)
    window.location.href = "Perfil_adm.html"; // Redirecionar para a página de administração
});


function editarPerfil() {
    document.getElementById('editProfileSection').style.display = 'block';
}

function salvarAlteracoes() {
    const newName = document.getElementById('newName').value.trim();
    const newPhone = document.getElementById('newPhone').value.trim();
    const newImg = document.getElementById('newImg').files[0];

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

