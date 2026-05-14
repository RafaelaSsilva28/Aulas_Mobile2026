import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from './Home'
import Relatorio from './Relatorio'
import Cadastro from './Cadastro'
import Grafico from './Grafico'

// criando nossa constante que cria o estilo de navegação Stack
const Drawer = createDrawerNavigator()

function NavDrawer (){
    return(
        <NavigationContainer>  
            <Drawer.Navigator
            initialRouteName='Home'  //define qual é a tela inicial
            screenOptions={{drawerStyle: {
                backgroundColor: 'rgb(192, 210, 210)',
                width: 300,
            },
            drawerLabelStyle:{
                fontSize: 18
            },
            drawerActiveBackgroundColor: 'rgb(61, 61, 181)', //propriedade da cor de fundo da lateral quando abre o nome ativo
            drawerActiveTintColor: 'rgb(165, 165, 205)'  //propriedade de cor do texto
            
        }}
            > 
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='Cadastro' component={Cadastro}/>
                <Drawer.Screen name='Relatorio' component={Relatorio}/>
                <Drawer.Screen name='Grafico' component={Grafico}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default NavDrawer