import { Router } from "express";
import { obterLivros, criarLivro, atualizarLivro, deletarLivro } from "../controllers/livrosController.js";

const router = Router();

router.get("/", obterLivros);
router.post("/", criarLivro);
router.put("/:id", atualizarLivro);
router.delete("/:id", deletarLivro);

export default router;
