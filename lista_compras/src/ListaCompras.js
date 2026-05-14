import { cloneElement, useState, useEffect } from "react";
import { Text, View, TextInput, Touchable, FlatList, Image, StatusBar, TouchableOpacity, RefreshControl } from "react-native";
import Estilos, { corPrincipal, corPlaceholder } from './Estilos'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//importando configuração do firebase e do firestore
import { firestore } from "../firebase.config";
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, where } from 'firebase/firestore';

const ListaCompras = () => {
    //variavel de estado que recebera o input do item
    const [item, setItem] = useState('')
     //criando vetor da lista de compras
    //const sera uma use state para quando atualizar ele renderizar a tela
        const [listaCompras, setListaCompras] = useState([])  //função que é a mesma coisa q esta comentada so q sem dados fixos 
    // const [listaCompras, setListaCompras] = useState([
    //     {id: 1, produto: '1 cartela de ovos 🥚', comprado: false},
    //     {id: 2, produto: 'Pringles 🥔', comprado: true},
    const [atualizando, setAtualizando] = useState(false)

    // ])

    async function buscarDados (){
        //representa um select * from compras
    const comando = query(collection(firestore, 'compras')) //criação de um query
    const dadosBD = await getDocs(comando)  //buscando os dados la na firebase executando o const comando
    const novaLista = dadosBD.docs.map((doc) => ( //pegando todos os documentos para gerar a nova lista de compras
        {id: doc.id, ...doc.data()} //todos os dados do banco de dados
    ))
    setListaCompras(novaLista)                               
    }

    useEffect( () => {
        buscarDados()   //chamando a function buscarDados
    }, [])

    async function botaoExcluir(id) {
        await deleteDoc(doc(firestore, 'compras', id))
        buscarDados()
    }

    async function botaoAtualizar(item) {
        const docRef = doc(firestore, 'compras', item.id)
             {/*         QUERO COMPRAR QUANDO FOR DIFERENTE DE ITEM COMPRADO          */}
        await updateDoc(docRef, {comprado: !item.comprado})
        buscarDados()
    }

    function exibirItens ( {item} ) {
        return(                                                             //mandando tudo que esta no parametro 
            <TouchableOpacity style={Estilos.botaoItem} onPress={() => botaoAtualizar(item)}>
                {/*              CONDIÇÃO        ENTÃO    ESTILO NORMAL   SENÃO    ESTILO COMPRADO                                                                                  */}
                <Text style={item.comprado==false ? Estilos.textoBotaoItem : Estilos.textoBotaoItemComprado}> {item.produto} </Text>                     {/*ONPRESS EXCLUINDO PARA FALAR QUEM SERA EXCLUIDO  */}
                <MaterialCommunityIcons name="delete-sweep" size={24} color="#697eda"  onPress={() => botaoExcluir(item.id)}/>

            </TouchableOpacity>
        )
    }
    //função para sempre que atualizar a pagina os dados adicionados ainda ficar na tela sem sumir
    async function botaoAdicionar () {
        
        // Bloqueia a execução se o campo estiver vazio ou apenas com espaços
        if (item.trim() === '') {
            return;
        }

        const novoItem = {produto: item, comprado: false}

        //ADICIONAR DOCUMENTO NO FIREBASE
        const docRef = await addDoc(collection(firestore, 'compras'), novoItem)
        console.log('Documento inserido', docRef);
        
        buscarDados()
        setItem('')
    }
    return(
        <View style={Estilos.conteudo}>
            <StatusBar backgroundColor={corPrincipal} barStyle='light-content'/>
            <View style={Estilos.header}>
                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')}/>
            </View>

            <View style={Estilos.corpo}>
                {/*INSERINDO INPUT E O BOTÃO DE ADICIONAR */}
                <View style={Estilos.inputContainer}>
                    <TextInput
                    placeholder="Adicione um novo item na lista"
                    placeholderTextColor={corPlaceholder}
                    style={Estilos.input}
                    value={item} onChangeText={setItem}
                    />
                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar}>
                        <Text style={Estilos.textoBotao}>+</Text>
                    </TouchableOpacity>
                </View>
                {/* TOTALIZADORES PARA FALAR QUANTOS ITENS TEM */}
                <View style={Estilos.viewContadores}>
                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador1}>Total de Itens:</Text>
                        <Text style={Estilos.numero}>{listaCompras.length}</Text>
                    </View>
                    
                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador2}>Comprados:</Text>
                        <Text style={Estilos.numero}>{listaCompras.filter(i => i.comprado === true).length}</Text>
                    </View>
                </View>
                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={atualizando} onRefresh={buscarDados}/>
                    }
                />

            </View>
        </View>
    )
}
export default ListaCompras;
