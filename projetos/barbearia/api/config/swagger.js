// Esse tipo de documento consegue documentar nossa API
// Além de servir como ferramenta para testes no Swagger

const documentacao = {

    openapi: '3.0.3',

    info: {
        title: 'API Barbearia 💈',
        description: 'Documentação da API da Barbearia',
        version: '1.0.0'
    },

    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor Local'
        }
    ],

    tags: [
        {
            name: "Usuários",
            description: "Operações relacionadas aos usuários"
        },

        {
            name: "Serviços",
            description: "Operações relacionadas aos serviços"
        },

        {
            name: "Agendamentos",
            description: "Operações relacionadas aos agendamentos"
        }
    ],

    paths: {

        // =====================================================
        // USUÁRIOS
        // =====================================================

        "/usuarios": {

            get: {
                tags: ["Usuários"],
                summary: "Listar usuários",

                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",

                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Lista_Usuarios"
                                    }
                                }
                            }
                        }
                    }
                }
            },

            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário",

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                },

                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso"
                    },

                    400: {
                        description: "Erro na requisição"
                    },

                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },



        "/usuarios/{id_cliente}": {

            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário completo",

                parameters: [
                    {
                        name: "id_cliente",
                        in: "path",
                        required: true,
                        description: "ID do usuário",

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Usuario"
                            }
                        }
                    }
                },

                responses: {
                    200: {
                        description: "Usuário atualizado"
                    },

                    404: {
                        description: "Usuário não encontrado"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            },

            delete: {
                tags: ["Usuários"],
                summary: "Remover usuário",

                parameters: [
                    {
                        name: "id_cliente",
                        in: "path",
                        required: true,

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                responses: {
                    200: {
                        description: "Usuário removido"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },



        // =====================================================
        // LOGIN
        // =====================================================

        "/login": {

            post: {
                tags: ["Usuários"],
                summary: "Realizar login",

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },

                responses: {

                    200: {
                        description: "Login realizado com sucesso",

                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },

                    401: {
                        description: "Email ou senha inválidos"
                    },

                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },



        // =====================================================
        // SERVIÇOS
        // =====================================================

        "/servicos": {

            get: {
                tags: ["Serviços"],
                summary: "Listar serviços",

                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",

                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",

                                    items: {
                                        $ref: "#/components/schemas/Lista_Servicos"
                                    }
                                }
                            }
                        }
                    }
                }
            },

            post: {
                tags: ["Serviços"],
                summary: "Cadastrar novo serviço",

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Servicos"
                            }
                        }
                    }
                },

                responses: {
                    201: {
                        description: "Serviço cadastrado"
                    },

                    400: {
                        description: "Erro na requisição"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },



        "/servicos/{id_servico}": {

            put: {
                tags: ["Serviços"],
                summary: "Atualizar serviço",

                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Servicos"
                            }
                        }
                    }
                },

                responses: {
                    200: {
                        description: "Serviço atualizado"
                    },

                    404: {
                        description: "Serviço não encontrado"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            },

            delete: {
                tags: ["Serviços"],
                summary: "Remover serviço",

                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                responses: {
                    200: {
                        description: "Serviço removido"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },



        // =====================================================
        // AGENDAMENTOS
        // =====================================================

        "/agendamentos": {

            get: {
                tags: ["Agendamentos"],
                summary: "Listar agendamentos",

                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",

                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",

                                    items: {
                                        $ref: "#/components/schemas/Lista_Agendamentos"
                                    }
                                }
                            }
                        }
                    }
                }
            },

            post: {
                tags: ["Agendamentos"],
                summary: "Cadastrar novo agendamento",

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Agendamentos"
                            }
                        }
                    }
                },

                responses: {
                    201: {
                        description: "Agendamento cadastrado com sucesso"
                    },

                    400: {
                        description: "Erro na requisição"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },



        "/agendamentos/{id_agendamento}": {

            put: {
                tags: ["Agendamentos"],
                summary: "Atualizar agendamento",

                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                requestBody: {
                    required: true,

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Agendamentos"
                            }
                        }
                    }
                },

                responses: {
                    200: {
                        description: "Agendamento atualizado"
                    },

                    404: {
                        description: "Agendamento não encontrado"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            },

            delete: {
                tags: ["Agendamentos"],
                summary: "Remover agendamento",

                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,

                        schema: {
                            type: "integer"
                        },

                        example: 1
                    }
                ],

                responses: {
                    200: {
                        description: "Agendamento removido"
                    },

                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        }
    },



    // =====================================================
    // SCHEMAS
    // =====================================================

    components: {

        schemas: {

            // ============================
            // USUÁRIOS
            // ============================

            Lista_Usuarios: {
                type: "object",

                properties: {

                    id_cliente: {
                        type: "integer",
                        example: 1
                    },

                    nome: {
                        type: "string",
                        example: "Rafaela"
                    },

                    email: {
                        type: "string",
                        example: "rafaela@gmail.com"
                    },

                    tipo: {
                        type: "string",
                        example: "comum"
                    }
                }
            },



            Cadastro_Usuario: {
                type: "object",

                properties: {

                    nome: {
                        type: "string",
                        example: "Rafaela"
                    },

                    email: {
                        type: "string",
                        example: "rafaela@gmail.com"
                    },

                    senha: {
                        type: "string",
                        example: "senha123"
                    },

                    tipo: {
                        type: "string",
                        example: "comum"
                    }
                }
            },



            Atualizacao_Usuario: {
                type: "object",

                required: ["nome", "email", "senha", "tipo"],

                properties: {

                    nome: {
                        type: "string",
                        example: "Rafaela Silva"
                    },

                    email: {
                        type: "string",
                        example: "rafa@gmail.com"
                    },

                    senha: {
                        type: "string",
                        example: "novaSenha123"
                    },

                    tipo: {
                        type: "string",
                        example: "admin"
                    }
                }
            },



            Login_Usuario: {
                type: "object",

                properties: {

                    email: {
                        type: "string",
                        example: "rafa@gmail.com"
                    },

                    senha: {
                        type: "string",
                        example: "123456"
                    }
                }
            },



            Resposta_Login: {
                type: "object",

                properties: {

                    message: {
                        type: "string",
                        example: "Login realizado com sucesso"
                    },

                    token: {
                        type: "string",
                        example: "eyJhbGciOiJIUzI1NiIsInR5..."
                    },

                    usuario: {
                        type: "object",

                        properties: {

                            id_cliente: {
                                type: "integer",
                                example: 1
                            },

                            nome: {
                                type: "string",
                                example: "Rafaela"
                            }
                        }
                    }
                }
            },



            // ============================
            // SERVIÇOS
            // ============================

            Lista_Servicos: {
                type: "object",

                properties: {

                    id_servico: {
                        type: "integer",
                        example: 1
                    },

                    nome_servico: {
                        type: "string",
                        example: "Corte Americano"
                    },

                    preco: {
                        type: "number",
                        example: 35.00
                    },

                    descricao: {
                        type: "string",
                        example: "Corte degradê moderno"
                    }
                }
            },



            Cadastro_Servicos: {
                type: "object",

                properties: {

                    nome_servico: {
                        type: "string",
                        example: "Barba"
                    },

                    preco: {
                        type: "number",
                        example: 20.00
                    },

                    descricao: {
                        type: "string",
                        example: "Barba completa"
                    }
                }
            },



            Atualizacao_Servicos: {
                type: "object",

                required: ["nome_servico", "preco", "descricao"],

                properties: {

                    nome_servico: {
                        type: "string",
                        example: "Combo Corte + Barba"
                    },

                    preco: {
                        type: "number",
                        example: 50.00
                    },

                    descricao: {
                        type: "string",
                        example: "Pacote completo"
                    }
                }
            },



            // ============================
            // AGENDAMENTOS
            // ============================

            Lista_Agendamentos: {
                type: "object",

                properties: {

                    id_agendamento: {
                        type: "integer",
                        example: 1
                    },

                    nome_cliente: {
                        type: "string",
                        example: "Rafaela"
                    },

                    nome_servico: {
                        type: "string",
                        example: "Corte Americano"
                    },

                    data_agendamento: {
                        type: "string",
                        example: "2026-05-15"
                    },

                    horario: {
                        type: "string",
                        example: "14:30"
                    },

                    status: {
                        type: "string",
                        example: "Pendente"
                    }
                }
            },



            Cadastro_Agendamentos: {
                type: "object",

                properties: {

                    nome_cliente: {
                        type: "string",
                        example: "Rafaela"
                    },

                    nome_servico: {
                        type: "string",
                        example: "Barba"
                    },

                    data_agendamento: {
                        type: "string",
                        example: "2026-05-20"
                    },

                    horario: {
                        type: "string",
                        example: "15:00"
                    },

                    status: {
                        type: "string",
                        example: "Pendente"
                    }
                }
            },



            Atualizacao_Agendamentos: {
                type: "object",

                required: [
                    "nome_cliente",
                    "nome_servico",
                    "data_agendamento",
                    "horario",
                    "status"
                ],

                properties: {

                    nome_cliente: {
                        type: "string",
                        example: "Rafaela Silva"
                    },

                    nome_servico: {
                        type: "string",
                        example: "Corte + Barba"
                    },

                    data_agendamento: {
                        type: "string",
                        example: "2026-05-25"
                    },

                    horario: {
                        type: "string",
                        example: "16:00"
                    },

                    status: {
                        type: "string",
                        example: "Confirmado"
                    }
                }
            }
        }
    }
}

export default documentacao;