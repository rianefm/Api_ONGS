import prisma from '../prisma/client.js';

// Criar uma nova ONG
export async function criarOngService(data) {
    return await prisma.ong.create({
        data,
    });
}

// Buscar ONG por ID
export async function buscarOngPorIdService(id) {
    return await prisma.ong.findUnique({
        where: { id: id },
    });
}

// Listar todas as ONGs
export async function listarOngsService() {
    return await prisma.ong.findMany();
}

// Listar ONGs por estado
export async function listarOngsPorEstadoService(estado) {
    return await prisma.ong.findMany({
        where: {
            estado: {
                equals: estado,
                mode: 'insensitive',
            },
        },
    });
}

// Listar ONGs por tipo de serviço
export async function listarOngsPorServicoService(servico) {
    return await prisma.ong.findMany({
        where: {
            servico: {
                equals: servico,
                mode: 'insensitive',
            },
        },
    });
}

// Atualizar ONG por ID
export async function atualizarOngService(id, data) {
    return await prisma.ong.update({
        where: { id },
        data,
    });
}

// Deletar ONG por ID
export async function deletarOngService(id) {
    return await prisma.ong.delete({
        where: { id },
    });
}