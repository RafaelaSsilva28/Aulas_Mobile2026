import { View, Text, Button } from 'react-native'

function Cadastro ({navigation}){
    return(
        //recebemos como props o navigation, para podermos navegar entre as telas
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(82, 129, 216)'}}>
            <Text style={{fontSize: 30}}>TELA DE CADASTRO</Text>
            {/*Nos botões, no onPress dizemos para qual tela queremos navegar*/}
            {/*Navegar para a pagina de Cadastro*/}
            <Button title='Tela de Relatorio' onPress={() => navigation.navigate('Relatorio')}></Button>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>

            </View>
    )
}

export default Cadastro