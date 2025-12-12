// ==========================
//  CONFIGURAÇÕES INICIAIS
// ==========================

// Pega o nome do livro na URL
const urlParams = new URLSearchParams(window.location.search);
const livro = urlParams.get('livro') || 'livro-desconhecido';

// Atualiza o nome do livro na página (se houver um span com id="nome-livro")
const tituloLivro = document.getElementById('nome-livro');
if (tituloLivro) {
    tituloLivro.textContent = livro.replace(/-/g, ' ');
}

// Seleciona elementos da página
const form = document.getElementById('avaliacao-form');
const listaAvaliacoes = document.getElementById('lista-avaliacoes');

// ==========================
//  FUNÇÃO PARA CARREGAR AVALIAÇÕES
// ==========================
function carregarAvaliacoes() {
    // Pega as avaliações do localStorage
    const avaliacoes = JSON.parse(localStorage.getItem(livro)) || [];

    // Limpa a lista antes de renderizar
    if (listaAvaliacoes) listaAvaliacoes.innerHTML = '';

    avaliacoes.forEach(avaliacao => {
        const div = document.createElement('div');
        div.classList.add('avaliacao-item');
        div.innerHTML = `
            <p><strong>Nota:</strong> ${'⭐'.repeat(avaliacao.nota)}</p>
            <p><strong>Comentário:</strong> ${avaliacao.comentario}</p>
        `;
        if (listaAvaliacoes) listaAvaliacoes.prepend(div);
    });
}

// ==========================
//  FUNÇÃO PARA ADICIONAR AVALIAÇÃO
// ==========================
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nota = document.getElementById('nota').value;
        const comentario = document.getElementById('comentario').value;

        if (!nota || !comentario) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Pega avaliações existentes do localStorage
        const avaliacoes = JSON.parse(localStorage.getItem(livro)) || [];

        // Adiciona nova avaliação
        avaliacoes.push({ nota, comentario });
        localStorage.setItem(livro, JSON.stringify(avaliacoes));

        // Atualiza a lista de avaliações
        carregarAvaliacoes();

        // Limpa o formulário
        form.reset();
    });
}

// ==========================
//  CARREGA AVALIAÇÕES QUANDO A PÁGINA É ABERTA
// ==========================
carregarAvaliacoes();
