import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './Home'
import Relatorio from './Relatorio'
import Cadastro from './Cadastro'
import Grafico from './Grafico'
import Login from './Login'
import NavDrawer from './NavDrawer'

// criando nossa constante que cria o estilo de navegação Stack
const Stack = createNativeStackNavigator()

function NavStack (){
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Cadastro' component={Cadastro}/>
                <Stack.Screen name='Relatorio' component={Relatorio}/>
                <Stack.Screen name='Grafico' component={Grafico}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='MenuPrincipal' component={NavDrawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavStack