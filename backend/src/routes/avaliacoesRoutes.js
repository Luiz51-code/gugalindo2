import express from 'express';

import { obterAvaliacoes, criarAvaliacao, atualizarAvaliacao, deletarAvaliacao } from '../controllers/avaliacoesController.js'


const router = express.Router();

router.get('/', obterAvaliacoes);
router.post('/', criarAvaliacao);
router.put('/:id', atualizarAvaliacao);
router.delete('/:id', deletarAvaliacao);

export default router;
