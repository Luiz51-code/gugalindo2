// Pega o parâmetro do livro na URL
const urlParams = new URLSearchParams(window.location.search);
const livro = urlParams.get('livro') || 'livro-desconhecido';

// Atualiza o título na página
const tituloLivro = document.getElementById('nome-livro');
if (tituloLivro) {
    tituloLivro.textContent = livro.replace(/-/g, ' ');
}

// Seleciona elementos
const form = document.getElementById('reserva-form');
const listaReservas = document.getElementById('lista-reservas');

// Função para carregar reservas do localStorage
function carregarReservas() {
    const reservas = JSON.parse(localStorage.getItem(livro)) || [];
    if (!listaReservas) return;

    listaReservas.innerHTML = '';
    reservas.forEach(r => {
        const div = document.createElement('div');
        div.classList.add('avaliacao-item'); // reutilizando o estilo de card
        div.innerHTML = `<p><strong>Nome:</strong> ${r.nome}</p>
                         <p><strong>E-mail:</strong> ${r.email}</p>`;
        listaReservas.prepend(div);
    });
}

// Evento para adicionar reserva
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (!nome || !email) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const reservas = JSON.parse(localStorage.getItem(livro)) || [];
        reservas.push({ nome, email });
        localStorage.setItem(livro, JSON.stringify(reservas));

        alert("Livro reservado com sucesso!");
        form.reset();
        carregarReservas();
    });
}

// Carrega reservas ao abrir a página
carregarReservas();
