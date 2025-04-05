const ongs = require('../data/ongs');


// função para listar todas as ongs
function listarOngs(req,res){
    res.json(ongs);
}


//função para buscar ongs pelo id
function buscarOngID(req,res){
    const id = parseInt(req.params.id);
    const ong = ongs.find(o => o.id === id);
    if(ong){
        res.json(ong);
    }else {
        res.status(404).json({mensagem:'ONG não encontrada'});
    }
}

module.exports = { listarOngs, buscarOngID};