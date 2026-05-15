import { View, Text, Button } from 'react-native'

function Login ({navigation}){
    return(
        //recebemos como props o navigation, para podermos navegar entre as telas
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(185, 39, 242)'}}>
            <Text style={{fontSize: 30}}>TELA DE LOGIN</Text>
            <Button title='ENTRAR' onPress={() => navigation.navigate('MenuPrincipal')}></Button>

            </View> 
    )
}

export default Login





