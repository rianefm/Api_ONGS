import { Router } from "express";
import OngController from "../controller/ongs.controller.js";  

const router = Router();

// Rotas para ONGs

// Listar todas as ONGs
router.get('/ongs', OngController.listarOngs);

// Buscar ONG por ID
router.get('/ongs/:id', OngController.buscarOngID);

// Listar ONGs por estado
router.get('/ongs/estado/:uf', OngController.getOngsPorEstado);

// Listar ONGs por tipo de serviço
router.get('/ongs/servico/:tipo', OngController.servicoOferecidos);

// Criar nova ONG
router.post('/ongs', OngController.criarOng);

// Atualizar ONG por ID
router.put('/ongs/:id', OngController.atualizarOng);

// Deletar ONG por ID
router.delete('/ongs/:id', OngController.deletarOng);

export default router;
