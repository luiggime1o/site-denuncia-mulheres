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