import {
    atualizarOngService,
    buscarOngPorIdService,
    criarOngService,
    deletarOngService,
    listarEstadosService,
    listarOngsPorEstadoService,
    listarOngsPorServicoService,
    listarOngsService,
    listarServicosService
} from '../service/ong.service.js';



// Listar todos os ESTADOS únicos
export async function listarEstados(req, res) {
    try {
        const estados = await listarEstadosService();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar estados", error: error.message });
    }
}

// Listar todos os SERVIÇOS únicos
export async function listarServicos(req, res) {
    try {
        const servicos = await listarServicosService();
        res.status(200).json(servicos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar serviços", error: error.message });
    }
}



// Criar ONG 
export async function criarOng(req, res) {

    const { nome, descricao, estado, servicos, contato } = req.body;


    if (!nome || !estado || !servicos || !Array.isArray(servicos)) {
        return res.status(400).json({ mensagem: 'Campos nome, estado e serviços (como um array) são obrigatórios' });
    }

    try {
        const novaOng = await criarOngService({ nome, descricao, estado, servicos, contato });
        res.status(201).json(novaOng);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao criar ONG', error: error.message });
    }
}

// Buscar por ID 
export async function buscarOngID(req, res) {
    const id = parseInt(req.params.id);
    try {
        const ong = await buscarOngPorIdService(id);
        if (!ong) {
            return res.status(404).json({ mensagem: 'ONG não encontrada' });
        }
        res.json(ong);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar ONG', error: error.message });
    }
}

// Listar todas as ONGs 
export async function listarOngs(req, res) {
    try {
        const ongs = await listarOngsService();
        res.json(ongs);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar ONGs', error: error.message });
    }
}

// Filtrar ONGs por estado 
export async function getOngsPorEstado(req, res) {
    const estado = req.params.uf;
    try {
        const ongs = await listarOngsPorEstadoService(estado);
        if (ongs.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhuma ONG encontrada nesse estado' });
        }
        res.json(ongs);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar ONGs por estado', error: error.message });
    }
}

// Filtrar ONGs por serviço 
export async function servicoOferecidos(req, res) {
    const tipoServico = req.params.tipo;
    try {
        const ongs = await listarOngsPorServicoService(tipoServico);
        if (ongs.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhuma ONG encontrada com esse serviço' });
        }
        res.json(ongs);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar ONGs por serviço', error: error.message });
    }
}

// Atualizar ONG 
export async function atualizarOng(req, res) {
    const id = parseInt(req.params.id);

    const dadosParaAtualizar = req.body;

    try {
        const ongAtualizada = await atualizarOngService(id, dadosParaAtualizar);
        res.json(ongAtualizada);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar ONG', error: error.message });
    }
}

// Deletar ONG
export async function deletarOng(req, res) {
    const id = parseInt(req.params.id);
    try {
        await deletarOngService(id);
        res.json({ mensagem: 'ONG deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar ONG', error: error.message });
    }
}


export default {
    listarEstados,
    listarServicos,
    criarOng,
    listarOngs,
    buscarOngID,
    getOngsPorEstado,
    servicoOferecidos,
    atualizarOng,
    deletarOng
};