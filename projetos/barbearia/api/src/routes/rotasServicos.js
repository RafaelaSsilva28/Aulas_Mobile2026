import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

const SECRET_KEY = 'sua_chave_secreta';

// 1. LISTAR SERVIÇOS
router.get('/servicos', async (req, res) => {
    try {
        const query = `
            SELECT id_servico, nome_servico, preco, descricao
            FROM servicos
            ORDER BY id_servico
        `;

        const servicos = await BD.query(query);

        return res.status(200).json(servicos.rows);

    } catch (error) {
        console.error('Erro ao listar serviços:', error.message);
        return res.status(500).json({
            error: 'Erro ao listar serviços'
        });
    }
});


// 2. CADASTRAR SERVIÇO
router.post('/servicos', async (req, res) => {

    const { nome_servico, preco, descricao } = req.body;

    if (!nome_servico || !preco) {
        return res.status(400).json({
            error: "Nome e preço são obrigatórios."
        });
    }

    try {

        const comando = `
            INSERT INTO servicos
            (nome_servico, preco, descricao)
            VALUES ($1, $2, $3)
        `;

        const valores = [
            nome_servico,
            preco,
            descricao
        ];

        await BD.query(comando, valores);

        return res.status(201).json({
            message: "Serviço cadastrado com sucesso."
        });

    } catch (error) {

        console.error('Erro ao cadastrar serviço:', error.message);

        return res.status(500).json({
            error: 'Erro ao cadastrar serviço'
        });
    }
});


// 3. ATUALIZAR SERVIÇO
router.put('/servicos/:id_servico', async (req, res) => {

    const { id_servico } = req.params;

    const {
        nome_servico,
        preco,
        descricao
    } = req.body;

    if (!nome_servico || !preco || !descricao) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios."
        });
    }

    try {

        // Verifica se existe
        const verificarServico = await BD.query(
            `SELECT * FROM servicos WHERE id_servico = $1`,
            [id_servico]
        );

        if (verificarServico.rows.length === 0) {
            return res.status(404).json({
                message: 'Serviço não encontrado'
            });
        }

        const comando = `
            UPDATE servicos
            SET
                nome_servico = $1,
                preco = $2,
                descricao = $3
            WHERE id_servico = $4
        `;

        const valores = [
            nome_servico,
            preco,
            descricao,
            id_servico
        ];

        await BD.query(comando, valores);

        return res.status(200).json({
            message: 'Serviço atualizado com sucesso!'
        });

    } catch (error) {

        console.error('ERRO DETALHADO:', error);

        return res.status(500).json({
            error: 'Erro ao atualizar serviço'
        });
    }
});


// 4. DELETAR SERVIÇO
router.delete('/servicos/:id_servico', async (req, res) => {

    const { id_servico } = req.params;

    try {

        const verificarServico = await BD.query(
            `SELECT * FROM servicos WHERE id_servico = $1`,
            [id_servico]
        );

        if (verificarServico.rows.length === 0) {
            return res.status(404).json({
                message: 'Serviço não encontrado'
            });
        }

        const comando = `
            DELETE FROM servicos
            WHERE id_servico = $1
        `;

        await BD.query(comando, [id_servico]);

        return res.status(200).json({
            message: "Serviço deletado com sucesso"
        });

    } catch (error) {

        console.error('Erro ao deletar serviço:', error.message);

        return res.status(500).json({
            message: "Erro interno ao deletar"
        });
    }
});

export default router;