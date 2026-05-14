import { View, Text, Button } from 'react-native'

function Home ({navigation}){
    return(
        //recebemos como props o navigation, para podermos navegar entre as telas
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(156, 192, 192)'}}>
            <Text style={{fontSize: 30}}>TELA PRINCIPAL</Text>
            {/*Nos botões, no onPress dizemos para qual tela queremos navegar*/}
            {/*Navegar para a pagina de Cadastro*/}
            <Button title='Tela de Cadastro' onPress={() => navigation.navigate('Cadastro')}></Button>
            {/*Nos botões, no onPress dizemos para qual tela queremos navegar*/}
            {/*Navegar para a pagina de Cadastro*/}
            <Button title='Tela de Relatorio' onPress={() => navigation.navigate('Relatorio')}></Button>
            <Button title='Tela de Grafico' onPress={() => navigation.navigate('Grafico')}></Button>
        </View>
    )
}

export default Home