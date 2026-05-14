import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

const SECRET_KEY = 'sua_chave_secreta';



// ======================================
// 1. LISTAR AGENDAMENTOS
// ======================================

router.get('/agendamentos', async (req, res) => {

    try {

        const query = `
            SELECT
                id_agendamento,
                nome_cliente,
                nome_servico,
                data_agendamento,
                horario,
                status
            FROM agendamentos
            ORDER BY id_agendamento
        `;

        const agendamentos = await BD.query(query);

        return res.status(200).json(agendamentos.rows);

    } catch (error) {

        console.error('Erro ao listar agendamentos:', error.message);

        return res.status(500).json({
            error: 'Erro ao listar agendamentos'
        });
    }
});



// ======================================
// 2. CADASTRAR AGENDAMENTO
// ======================================

router.post('/agendamentos', async (req, res) => {

    const {
        nome_cliente,
        nome_servico,
        data_agendamento,
        horario,
        status = 'Pendente'
    } = req.body;

    if (
        !nome_cliente ||
        !nome_servico ||
        !data_agendamento ||
        !horario
    ) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios."
        });
    }

    try {

        const comando = `
            INSERT INTO agendamentos
            (
                nome_cliente,
                nome_servico,
                data_agendamento,
                horario,
                status
            )
            VALUES ($1, $2, $3, $4, $5)
        `;

        const valores = [
            nome_cliente,
            nome_servico,
            data_agendamento,
            horario,
            status
        ];

        await BD.query(comando, valores);

        return res.status(201).json({
            message: "Agendamento cadastrado com sucesso."
        });

    } catch (error) {

        console.error('Erro ao cadastrar agendamento:', error.message);

        return res.status(500).json({
            error: 'Erro ao cadastrar agendamento'
        });
    }
});



// ======================================
// 3. ATUALIZAR AGENDAMENTO
// ======================================

router.put('/agendamentos/:id_agendamento', async (req, res) => {

    const { id_agendamento } = req.params;

    const {
        nome_cliente,
        nome_servico,
        data_agendamento,
        horario,
        status
    } = req.body;

    if (
        !nome_cliente ||
        !nome_servico ||
        !data_agendamento ||
        !horario ||
        !status
    ) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios."
        });
    }

    try {

        // Verifica se existe
        const verificarAgendamento = await BD.query(
            `SELECT * FROM agendamentos WHERE id_agendamento = $1`,
            [id_agendamento]
        );

        if (verificarAgendamento.rows.length === 0) {
            return res.status(404).json({
                message: 'Agendamento não encontrado'
            });
        }

        const comando = `
            UPDATE agendamentos
            SET
                nome_cliente = $1,
                nome_servico = $2,
                data_agendamento = $3,
                horario = $4,
                status = $5
            WHERE id_agendamento = $6
        `;

        const valores = [
            nome_cliente,
            nome_servico,
            data_agendamento,
            horario,
            status,
            id_agendamento
        ];

        await BD.query(comando, valores);

        return res.status(200).json({
            message: 'Agendamento atualizado com sucesso!'
        });

    } catch (error) {

        console.error('ERRO DETALHADO:', error);

        return res.status(500).json({
            error: 'Erro ao atualizar agendamento'
        });
    }
});



// ======================================
// 4. DELETAR AGENDAMENTO
// ======================================

router.delete('/agendamentos/:id_agendamento', async (req, res) => {

    const { id_agendamento } = req.params;

    try {

        // Verifica se existe
        const verificarAgendamento = await BD.query(
            `SELECT * FROM agendamentos WHERE id_agendamento = $1`,
            [id_agendamento]
        );

        if (verificarAgendamento.rows.length === 0) {
            return res.status(404).json({
                message: 'Agendamento não encontrado'
            });
        }

        const comando = `
            DELETE FROM agendamentos
            WHERE id_agendamento = $1
        `;

        await BD.query(comando, [id_agendamento]);

        return res.status(200).json({
            message: "Agendamento removido com sucesso"
        });

    } catch (error) {

        console.error('Erro ao deletar agendamento:', error.message);

        return res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
});

export default router;