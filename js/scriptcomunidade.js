// Feedbacks iniciais
const feedbacksIniciais = [
    "Usuário Anônimo: Me ajudou quando eu mais precisei",
    "Usuário Anônimo: Nos momentos de urgência eu tive onde recorrer de maneira sutil e discreta graças a esse site",
    "Usuário Anônimo: Consegui que meu agressor fosse descoberto e condenado com a ajuda e suporte do site e da comunidade",
    "Regina da Silva: Ótimas informações, recomendei no meu grupo de amigas",
    "Marco Aurélio: Top!!!",
    "Ana Silva: Este é um ótimo site!",
    "Carlos Pereira: A experiência do usuário é fantástica.",
    "Mariana Costa: Adorei o design e a usabilidade.",
    "Rafael Souza: Muito fácil de navegar e encontrar informações.",
    "Bianca Oliveira: Recomendo a todos!",
    "João Almeida: Plataforma incrível e muito útil.",
    "Fernanda Mendes: Atendimento rápido e eficiente.",
    "Lucas Rocha: Interface amigável e intuitiva.",
    "Camila Ferreira: Achei tudo o que precisava com facilidade.",
    "Pedro Santos: Excelente para denúncias anônimas.",
    "Juliana Lima: Muito bom para encontrar apoio.",
    "Gustavo Ramos: Site seguro e confiável.",
    "Larissa Duarte: Adorei a iniciativa e a execução.",
    "Tiago Batista: Fácil de usar e muito informativo.",
    "Patrícia Gomes: Ferramenta essencial para denúncias."
];

let feedbacks = [...feedbacksIniciais]; // Inicializa com feedbacks iniciais
let currentFeedbackIndex = 0;

// Função para mostrar o próximo feedback
function showNextFeedback() {
    const feedbackText = document.getElementById("feedback-text");
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
    feedbackText.textContent = feedbacks[currentFeedbackIndex];
}

// Trocar feedback a cada 3 segundos
setInterval(showNextFeedback, 3000);

// Carregar feedbacks do localStorage e adicioná-los ao array de feedbacks
function loadStoredFeedbacks() {
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks = [...feedbacksIniciais, ...storedFeedbacks]; // Combina feedbacks iniciais com os armazenados
}

// Função para enviar novo feedback
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const feedbackInput = document.getElementById("feedback-input");
    const usuarioLogado = localStorage.getItem('usuarioLogado'); // Verifica se o usuário está logado

    // Se o usuário estiver logado, usa o nome dele, caso contrário, usa "Usuário Anônimo"
    const nomeUsuario = usuarioLogado || "Usuário Anônimo";
    const newFeedback = `${nomeUsuario}: ${feedbackInput.value.trim()}`;

    if (newFeedback) {
        // Salva o novo feedback no localStorage
        const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        storedFeedbacks.push(newFeedback);
        localStorage.setItem('feedbacks', JSON.stringify(storedFeedbacks)); // Atualiza o localStorage

        feedbackInput.value = ""; // Limpa o campo de feedback

        // Atualiza a lista de feedbacks rotacionados
        feedbacks.push(newFeedback);
        alert("Obrigado pelo seu feedback!");
    }
});

// Verificar se o usuário está logado e mostrar o nome dele no feedback
window.onload = function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado'); // Obtém o nome de usuário logado
    const feedbackUsuario = document.getElementById("feedback-usuario");

    if (usuarioLogado) {
        feedbackUsuario.textContent = `Olá, ${usuarioLogado}! Deixe seu feedback.`;
    } else {
        feedbackUsuario.textContent = "Deixe seu feedback de forma anônima.";
    }

    // Carregar feedbacks armazenados
    loadStoredFeedbacks();
    showNextFeedback(); // Mostra o primeiro feedback ao carregar a página
};
