import { db } from "../config/db.js";

export async function obterLivros(req, res) {
    try {
        const [livros] = await db.query("SELECT * FROM livros");
        res.status(200).json(livros);
    } catch (erro) {
        res.status(500).json({ msg: "Sem Livros" });
    }
}

export async function criarLivro(req, res) {
    try {
        const { titulo, autor, ano_publicacao, genero } = req.body;
        await db.query(
            "INSERT INTO livros (titulo, autor, ano_publicacao, genero) VALUES (?, ?, ?, ?)",
            [titulo, autor, ano_publicacao, genero]
        );
        res.status(201).json({ msg: "Livro criado com sucesso" });
    } catch (erro) {
        res.status(500).json({ msg: "Erro ao criar Livro" });
    }
}

export async function atualizarLivro(req, res) {
    try {
        const { id } = req.params;
        const { titulo, autor, ano_publicacao, genero } = req.body;
        await db.query(
            "UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, genero = ? WHERE id = ?",
            [titulo, autor, ano_publicacao, genero, id]
        );
        res.status(200).json({ msg: "Livro atualizado com sucesso" });
    } catch (erro) {
        res.status(500).json({ msg: "Erro ao atualizar Livro" });
    }
}

export async function deletarLivro(req, res) {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM livros WHERE id = ?", [id]);
        res.status(200).json({ msg: "Livro deletado com sucesso" });
    } catch (erro) {
        res.status(500).json({ msg: "Erro ao deletar Livro" });
    }
}
