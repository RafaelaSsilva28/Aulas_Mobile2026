import { View, Text, FlatList } from "react-native";
import Hr from './Hr'
import Aula03_Exercicio01 from "./Aula03_Exercicio01";

const Aula03 = () => {
    const turmas = [   //vetor de listas com objetos
        {id: 1, turma: '3° B', pontos: 1345},
        {id: 2, turma: '3° A', pontos: 132},
        {id: 3, turma: '2° A', pontos: 133},
        {id: 4, turma: '2° B',pontos: 30},
    ]
    function exibirItensLista ( {item} ){
        //renderizando cada item da lista de forma personalizada
        return(
            <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
                <Text>{item.id}°</Text>
                <Text>{item.turma}</Text>
            </View>
        )
    } function exibirItensListaInterclasse ( {item} ){
        //renderizando cada item da lista de forma personalizada
        return(
            <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
                <Text>ID: {item.id}°</Text>
                <Text>Turmas: {item.turma}</Text>
                <Text>Pontuação: {item.pontos}</Text>
            </View>
        )
    }
    return(
        <View>
            <Hr/>
            <Text>Aula03 - Listas com Flatlist</Text>
            <Text>Aprendendo a manipular listas em React Native</Text>
            <Hr/>
            {
                turmas.map( (item) => (  //parametro item recebendo cada parametro passado da const turmas
                    <Text key={item.id}> Turma: {item.turma} </Text>
                ) )  
            }
            <Hr/>
            {/*Criando listas utilizando componente FlatList */}
            <Text style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}>Lista com FlatList</Text>
            <FlatList
            data={ turmas }  //passar vetor com os dados a serem exibidos
            renderItem={ exibirItensLista } //passar a função para exibir os itens
            keyExtractor={ item => item.id } //passar a função para extrair as chaves
            />
            {/*Criando classificação do interclasse SESI */}
            <Text style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}>interclasse do SESI</Text>
            <FlatList
            data={ turmas }  //passar vetor com os dados a serem exibidos
            renderItem={ exibirItensListaInterclasse } //passar a função para exibir os itens
            keyExtractor={ item => item.id } //passar a função para extrair as chaves
            />
            <Hr/>
            <Aula03_Exercicio01/>
        </View>
        
    )
}
export default Aula03