// SALVAR LIVRO
function salvarLivro() {
    const titulo = document.getElementById("titulo").value;
    const imagem = document.getElementById("imagem").value;

    if (!titulo || !imagem) {
        alert("Preencha todos os campos.");
        return;
    }

    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    livros.push({ titulo, imagem });

    localStorage.setItem("livros", JSON.stringify(livros));

    document.getElementById("titulo").value = "";
    document.getElementById("imagem").value = "";

    listarLivros();
    alert("Livro cadastrado com sucesso!");
}

// LISTAR LIVROS
function listarLivros() {
    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    livros.forEach(livro => {
        lista.innerHTML += `
            <div class="card">
                <img src="${livro.imagem}">
                <p>${livro.titulo}</p>
            </div>
        `;
    });
}

// Executa ao abrir a página
listarLivros();
