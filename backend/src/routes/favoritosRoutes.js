import express from "express";
import {
  adicionarFavorito,
  removerFavorito,
  listarFavoritos,
  listarFavoritosPorUsuario
} from "../controllers/favoritosController.js";

const router = express.Router();

router.get("/", listarFavoritos);
router.post("/", adicionarFavorito);
router.get("/usuario/:id", listarFavoritosPorUsuario);
router.delete("/:id", removerFavorito);

export default router;
