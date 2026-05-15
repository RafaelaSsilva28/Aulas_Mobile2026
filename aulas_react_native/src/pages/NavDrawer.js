import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from './Home'
import Relatorio from './Relatorio'
import Cadastro from './Cadastro'
import Grafico from './Grafico'
import Aula01 from "../components/Aula01"
import Aula02 from "../components/Aula02"
import Aula03 from "../components/Aula03"
import Aula04 from "../components/Aula04"
import Aula05 from "../components/Aula05"
import Aula06 from "../components/Aula06"
import Aula07 from "../components/Aula07"

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


// criando nossa constante que cria o estilo de navegação Stack
const Drawer = createDrawerNavigator()

function NavDrawer (){
    return(
        // <NavigationContainer>  
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
                <Drawer.Screen name='Home' component={Home}
                options={{
                    title: 'Tela Inicial de Teste',
                    drawerIcon: ( {size, color} ) => <Ionicons name="home" size={24} color="black" />
                }}/>
                <Drawer.Screen name='Cadastro' component={Cadastro}
                options={{
                    title: 'Tela de Cadastro',
                    drawerIcon: ( {size, color} ) => <Ionicons name="people-sharp" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Relatorio' component={Relatorio}
                options={{
                    title: 'Tela de Relatorio de Teste',
                    drawerIcon: ( {size, color} ) => <AntDesign name="diff" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Grafico' component={Grafico}
                options={{
                    title: 'Tela de Grafico de Teste',
                    drawerIcon: ( {size, color} ) => <FontAwesome name="pie-chart" size={size} color={color} />
                }}
                />
                <Drawer.Screen name='Aula01' component={Aula01}
                options={{
                    title: 'Aula-01 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula02' component={Aula02}
                options={{
                    title: 'Aula-02 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula03' component={Aula03}
                options={{
                    title: 'Aula-03 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula04' component={Aula04}
                options={{
                    title: 'Aula-04 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula05' component={Aula05}
                options={{
                    title: 'Aula-05 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula06' component={Aula06}
                options={{
                    title: 'Aula-06 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
                <Drawer.Screen name='Aula07' component={Aula07}
                options={{
                    title: 'Aula-07 de Mobile',
                    drawerIcon: ( {size, color} ) => <MaterialIcons name="collections-bookmark" size={24} color="black" />
                }}
                />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

export default NavDrawer