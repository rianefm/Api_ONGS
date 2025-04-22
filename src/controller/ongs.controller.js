import { Ongs, listaOngs } from "../model/Ongs.model.js";


//função para criar a ong 
function criarOng(req, res) {

    const { id, nome, estado, servico } = req.body;

    if (!id || !nome || !estado || !servico) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios (id, nome, estado, servico)" });
    }

    const novaOng = new Ongs(id, nome, estado, servico);

    listaOngs.push(novaOng);

    res.status(201).json(novaOng);

}


//função para buscar ongs pelo id
function buscarOngID(req, res) {
    const id = parseInt(req.params.id);
    const ong = listaOngs.find(o => o.id === id);

    if (ong) {
        res.json(ong);
    } else {
        res.status(404).json({ mensagem: 'ONG não encontrada' });
    }
}


//função para listar todas as ongs 
function listarOngs(req, res) {
    res.json(listaOngs);
}

//função para listar ongs por estado 
function getOngsPorEstado(req, res) {
    const estado = req.params.uf.toLowerCase();
    const ongsFiltradas = listaOngs.filter(ong => ong.estado.toLowerCase() === estado);

    if (ongsFiltradas.length === 0) {
        return res.status(404).json({ mensagem: "Nenhuma ONG encontrada nesse estado" });
    }

    res.json(ongsFiltradas);
}

//função para buscar as ongs por serviços oferecidos 
function servicoOferecidos(req, res) {
    const tipoServico = req.params.tipo.toLowerCase();
    const ongsFiltradas = listaOngs.filter(ong => ong.servico.toLowerCase() === tipoServico);

    if (ongsFiltradas.length === 0) {
        return res.status(404).json({ mensagem: "Nenhuma ONG encontrada com esse tipo de serviço" });
    }

    res.json(ongsFiltradas);
}




//exportando as funções criadas
export default {
    
    criarOng,
    listarOngs,
    buscarOngID,
    getOngsPorEstado,
    servicoOferecidos

};






