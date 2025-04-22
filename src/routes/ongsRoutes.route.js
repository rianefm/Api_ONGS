import { Router } from "express";
import OngController from "../controller/ongs.controller.js";

//inicializando as rotas a serem usadas
const router = Router();

//rota para listar as ongs por estado
router.get('/ongs/estado/:uf', OngController.getOngsPorEstado);

// rota para listar as ongs por tipo de serviço
router.get('/ongs/servico/:tipo', OngController.servicoOferecidos);

//rota para buscar as ongs pelo id
router.get('/ongs/:id', OngController.buscarOngID);

//rota para listar todas as ongs
router.get('/ongs', OngController.listarOngs);

//rota post para criar uma nova ong
router.post('/ongs/', OngController.criarOng);

export default router;
