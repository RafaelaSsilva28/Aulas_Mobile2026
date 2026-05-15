import { View, Text, FlatList } from "react-native";
import Hr from './Hr'
import * as Animar from 'react-native-animatable'
    const Aula07 = () => {
        return(
            <View>
                <Hr />
                <Text>Aula07 - Estilos de navegação Tabs e animações</Text>
                <Text>Criação de navegação do tipo abas e aprendendo sobre animações</Text>
                <Hr/>
                <Animar.Text animation='fadeInLeft'>Texto Animadoo</Animar.Text>
                <Animar.Text animation='fadeInLeft' delay={1000}>Texto Animadoo 2 com delay</Animar.Text>
                <Animar.Text animation='flipInY' iterationCount={'infinite'}>Texto Animadoo 2 com iteration</Animar.Text>
                <Animar.Image source={require('../../assets/icon.png')}
                animation='lightSpeedIn' iterationCount={'infinite'}
                style={{width: 100, height: 100}}/>           
                </View>
        )
    }
export default Aula07