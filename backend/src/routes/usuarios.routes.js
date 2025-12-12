import 
{ CriarUsuario,
     listaUsuario,
      obterUsuario,
      deletarUsuario, 
      atualizaUsuario} from "../controllers/usuarios.controller.js";


      import express from "express";

      const router = express.Router();
      
router.get("/", listaUsuario);
router.post("/", CriarUsuario);
router.get("/:id", obterUsuario);
router.put("/:id", atualizaUsuario);
router.delete("/:id", deletarUsuario);

export default router;

