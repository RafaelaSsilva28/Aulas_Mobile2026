import { View, Text, FlatList } from "react-native";
import Hr from './Hr'
import Aula03_Exercicio02 from "./Aula03_Exercicio02";


const Aula03_Exercicio01 = () => {
    const turmas = [   //vetor de listas com objetos
        {id: 1, aluno: 'Rafaela',  materia: 'Quimica', media: 9.5, faltas: 2},
        {id: 2, aluno: 'Guilherme',  materia: 'Ingles', media: 8, faltas: 5},
        {id: 3, aluno: 'Vanessa',  materia: 'Linguagens', media: 10, faltas: 2},
        {id: 4, aluno: 'Paulo', materia: 'Matematica', media: 7, faltas: 4},
    ]
    function exibirLista ( {item} ){
        //renderizando cada item da lista de forma personalizada
        return(
            <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 1, textAlign: "left"}}>ID: {item.id}°</Text>
                <Text style={{flex: 1, textAlign: "left"}}>Aluno: {item.aluno}</Text>
                <Text style={{flex: 1, textAlign: "left"}}>Materia: {item.materia}</Text>
                <Text style={{flex: 1, textAlign: "left"}}>Media: {item.media}</Text>
                <Text style={{flex: 1, textAlign: "left"}}>Faltas: {item.faltas}</Text>
            </View>
        )
    } 
    return(
        <View>
            <Hr/>
             {/*Criando listas utilizando componente FlatList */}
            <Text style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}>Lista com FlatList</Text>
            <Text style={{textAlign: 'center'}}>Aula03 - Listas com Flatlist EXERCICIO 01</Text>
            <FlatList
            data={ turmas }  //passar vetor com os dados a serem exibidos
            renderItem={ exibirLista } //passar a função para exibir os itens
            keyExtractor={ item => item.id } //passar a função para extrair as chaves
            />
            <Aula03_Exercicio02/>
        </View>
    )
}
export default Aula03_Exercicio01