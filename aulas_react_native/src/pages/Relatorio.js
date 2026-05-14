import { View, Text, Button } from 'react-native'

function Relatorio ({navigation}){
    return(
        //recebemos como props o navigation, para podermos navegar entre as telas
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(129, 82, 216)'}}>
            <Text style={{fontSize: 30}}>TELA DE RELATORIO</Text>
            {/*Nos botões, no onPress dizemos para qual tela queremos navegar*/}
            {/*Navegar para a pagina de Cadastro*/}
            <Button title='Tela de Cadastro' onPress={() => navigation.navigate('Cadastro')}></Button>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Relatorio