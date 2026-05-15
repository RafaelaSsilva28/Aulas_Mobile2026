import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from './Home'
import Relatorio from './Relatorio'
import Cadastro from './Cadastro'
import Grafico from './Grafico'
import Login from './Login'
import NavDrawer from './NavDrawer'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// criando nossa constante que cria o estilo de navegação Tab
const Tab = createBottomTabNavigator ()

function NavTopTabs (){
    return(
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Login'>
                <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({size, color}) => <FontAwesome name="home" size={size} color={color} />
                }}/>
                <Tab.Screen name='Cadastro' component={Cadastro} options={{
                    tabBarIcon: ({size, color}) => <MaterialIcons name="people-alt" size={size} color={color} />
                }}/>
                <Tab.Screen name='Relatorio' component={Relatorio} options={{
                    tabBarIcon: ({size, color}) => <AntDesign name="diff" size={size} color={color}/>
                }}/>
                <Tab.Screen name='Grafico' component={Grafico}/>
                <Tab.Screen name='Login' component={Login}/>
                <Tab.Screen name='MenuPrincipal' component={NavDrawer} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavTopTabs