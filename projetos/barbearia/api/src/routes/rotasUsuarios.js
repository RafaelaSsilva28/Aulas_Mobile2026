import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const SECRET_KEY = "sua_chave_secreta";


// ======================================
// 1. LISTAR USUÁRIOS
// ======================================

router.get('/usuarios', async (req, res) => {

    try {

        const query = `
            SELECT
                id_cliente,
                nome,
                email,
                tipo
            FROM usuarios
            ORDER BY id_cliente
        `;

        const usuarios = await BD.query(query);

        return res.status(200).json(usuarios.rows);

    } catch (error) {

        console.error('Erro ao listar usuários:', error.message);

        return res.status(500).json({
            error: 'Erro ao listar usuários'
        });
    }
});



// ======================================
// 2. CADASTRAR USUÁRIO
// ======================================

router.post('/usuarios', async (req, res) => {

    const {
        nome,
        email,
        senha,
        tipo = 'comum'
    } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            error: "Nome, email e senha são obrigatórios."
        });
    }

    try {

        // Verifica email existente
        const verificarEmail = await BD.query(
            `SELECT * FROM usuarios WHERE email = $1`,
            [email]
        );

        if (verificarEmail.rows.length > 0) {
            return res.status(400).json({
                error: "Email já cadastrado."
            });
        }

        // Criptografia
        const saltRounds = 10;

        const senhaCriptografada = await bcrypt.hash(
            senha,
            saltRounds
        );

        const comando = `
            INSERT INTO usuarios
            (nome, email, senha, tipo)
            VALUES ($1, $2, $3, $4)
        `;

        const valores = [
            nome,
            email,
            senhaCriptografada,
            tipo
        ];

        await BD.query(comando, valores);

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso."
        });

    } catch (error) {

        console.error('Erro ao cadastrar usuário:', error.message);

        return res.status(500).json({
            error: 'Erro ao cadastrar usuário'
        });
    }
});



// ======================================
// 3. ATUALIZAR USUÁRIO
// ======================================

router.put('/usuarios/:id_cliente', async (req, res) => {

    const { id_cliente } = req.params;

    const {
        nome,
        email,
        senha,
        tipo
    } = req.body;

    if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios."
        });
    }

    try {

        // Verifica usuário
        const verificarUsuario = await BD.query(
            `SELECT * FROM usuarios WHERE id_cliente = $1`,
            [id_cliente]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({
                message: 'Usuário não encontrado'
            });
        }

        // Criptografar senha
        const saltRounds = 10;

        const senhaCriptografada = await bcrypt.hash(
            senha,
            saltRounds
        );

        const comando = `
            UPDATE usuarios
            SET
                nome = $1,
                email = $2,
                senha = $3,
                tipo = $4
            WHERE id_cliente = $5
        `;

        const valores = [
            nome,
            email,
            senhaCriptografada,
            tipo,
            id_cliente
        ];

        await BD.query(comando, valores);

        return res.status(200).json({
            message: 'Usuário atualizado com sucesso!'
        });

    } catch (error) {

        console.error('ERRO DETALHADO:', error);

        return res.status(500).json({
            error: 'Erro ao atualizar usuário'
        });
    }
});



// ======================================
// 4. DELETAR USUÁRIO
// ======================================

router.delete('/usuarios/:id_cliente', async (req, res) => {

    const { id_cliente } = req.params;

    try {

        // Verifica usuário
        const verificarUsuario = await BD.query(
            `SELECT * FROM usuarios WHERE id_cliente = $1`,
            [id_cliente]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({
                message: 'Usuário não encontrado'
            });
        }

        const comando = `
            DELETE FROM usuarios
            WHERE id_cliente = $1
        `;

        await BD.query(comando, [id_cliente]);

        return res.status(200).json({
            message: "Usuário removido com sucesso"
        });

    } catch (error) {

        console.error('Erro ao deletar usuário:', error.message);

        return res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
});



// ======================================
// 5. LOGIN
// ======================================

router.post('/login', async (req, res) => {

    const {
        email,
        senha
    } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            message: 'Email e senha são obrigatórios'
        });
    }

    try {

        const comando = `
            SELECT *
            FROM usuarios
            WHERE email = $1
        `;

        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({
                message: 'Usuário não encontrado'
            });
        }

        const usuario = resultado.rows[0];

        // Verifica senha
        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                message: 'Senha inválida'
            });
        }

        // Gera token
        const token = jwt.sign(
            {
                id: usuario.id_cliente,
                email: usuario.email
            },
            SECRET_KEY,
            {
                expiresIn: '1d'
            }
        );

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token,

            usuario: {
                id: usuario.id_cliente,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }
        });

    } catch (error) {

        console.error('Erro no login:', error.message);

        return res.status(500).json({
            message: 'Erro interno no servidor'
        });
    }
});

export default router;