import { db } from "../config/db.js";

export async function obterAvaliacoes(req, res){
    try {
        const [avaliacoes] = await db.query("SELECT * FROM avaliacoes");
        res.status(200).json(avaliacoes);
    } catch (erro){
        res.status(500).json({msg: "Sem Avaliações"});
    }
}

export async function criarAvaliacao (req, res){
    try {
        const {usuario_id, livro_id, nota, comentario} = req.body;
        await db.query(
            "INSERT INTO avaliacoes (usuario_id, livro_id, nota, comentario) VALUES (?, ?, ?, ?)",
            [usuario_id, livro_id, nota, comentario]
        );
        res.status(201).json({msg: "Avaliação criada com sucesso"});
    } catch (erro){
        res.status(500).json({msg: "Erro ao criar avaliação"});
    }
}

export async function atualizarAvaliacao (req, res){
    try {
        const {id} = req.params;
        const {nota, comentario} = req.body;
        await db.query(
            "UPDATE avaliacoes SET nota = ?, comentario = ? WHERE id = ?",
            [nota, comentario, id]
        );
        res.status(200).json({msg: "Avaliação atualizada com sucesso"});
    } catch (erro){
        res.status(500).json({msg: "Erro ao atualizar avaliação"});
    }
}

export async function deletarAvaliacao (req, res){
    try {
        const {id} = req.params;
        await db.query("DELETE FROM avaliacoes WHERE id = ?", [id]);
        res.status(200).json({msg: "Avaliação deletada com sucesso"});
    } catch (erro){
        res.status(500).json({msg: "Erro ao deletar avaliação"});
    }
}
