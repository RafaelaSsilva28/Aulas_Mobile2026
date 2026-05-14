import { StyleSheet } from "react-native";

//toda as estilizações serão aquii e exportação de cores
export const corPrincipal = '#1a5c8e'
export const corSecundaria = '#52186a'
export const corTextos = '#9fccdc'
export const corFundo = '#0b0836'
export const corFundo2 = '#1a2550'
export const corPlaceholder = '#808080'

const Estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: corFundo
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20
    },
    logo: {
        width: 300,
        height: 40
    },
    inputContainer:{
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: corFundo2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: corPrincipal,
        marginRight: 6,
        paddingHorizontal: 10,
        color: corTextos,
        fontSize: 16
    },
    botao: {
        width: 50,
        borderRadius: 6,
        backgroundColor: corSecundaria,
        justifyContent: 'center',
        alignItems: 'center',
    

    },
    textoBotao: {
        color: corTextos,
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 5
    },
    corpo: {
        flex: 1,
        paddingHorizontal: 20
    },
    botaoItem: {
        backgroundColor: corSecundaria,
        borderRadius: 8,
        borderColor: '#8b3688',
        marginBottom: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        boxShadow: '0 1px 16px 0 rgba(113, 50, 128, 0.6)',
        marginTop: 10

    },
    textoBotaoItem: {
        fontSize: 16,
        color: corTextos,

    },
    textoBotaoItemComprado: {
        fontSize: 16,
        color: '#a884a3',
        textDecorationLine: 'line-through',
        
    },
    viewContadores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    contador1: {
        fontWeight: 'bold',
        color: '#8c85e7'
    },
    contador2: {
        fontWeight: 'bold',
        color: '#8c85e7'
    },
    numero: {
        color: corTextos,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        borderRadius: 50
    }
});
export default Estilos