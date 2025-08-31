import { Router } from "express";
import OngController from "../controller/ongs.controller.js"; 

const router = Router();

// A rota para '/api/ongs' agora é simplesmente '/'
router.get('/', OngController.listarOngs);

// A rota para '/api/ongs/:id' agora é '/:id'
router.get('/:id', OngController.buscarOngID);

// A rota para '/api/ongs/estado/:uf' agora é '/estado/:uf'
router.get('/estado/:uf', OngController.getOngsPorEstado);

// A rota para '/api/ongs/servico/:tipo' agora é '/servico/:tipo'
router.get('/servico/:tipo', OngController.servicoOferecidos);

// Rotas para criar, atualizar e deletar
router.post('/', OngController.criarOng);
router.put('/:id', OngController.atualizarOng);
router.delete('/:id', OngController.deletarOng);

export default router;
