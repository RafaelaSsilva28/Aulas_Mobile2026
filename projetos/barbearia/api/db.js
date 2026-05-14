import { Pool } from 'pg';

const BD = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'barbearia_3b',
    port: 5432
})

const testarConexao = async () => {
    try{
        const cliente = await BD.connect();  //realizando conexão
        console.log('Conexão Estabelecida');
        cliente.release(); //libera conexão
    }catch(error){
        console.error('Erro ao conectar com o banco', error.message);
    }
}
export {BD, testarConexao}