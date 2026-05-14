//aqui é aonde vamos importar todas as bibliotecas e componentes que utilizaremos
import { StatusBar } from 'expo-status-bar';
//todo componente em react native tem que ser importado, para que possa ser utilizado em outros arquivos, e o componente principal é o App, que é onde vamos colocar todo o nosso código
import { StyleSheet, Text, View } from 'react-native';
//componente tradicional
export default function Aula01() {
  return (
    //o componente view corresponde ao div, main section, header, do html
    <View style={estilos.container}>

      {/*O componente Text corresponde ao p, h1, h2, etc. do html */}
      <Text style={estilos.titulo}>🗺️Hello, World!</Text>
      <Text style={{ fontSize: 13, color: '#b01065', fontWeight: 'bold' }}>Ola Mundo, esse é meu primeiro React Native!</Text>
      {/*O componente StatusBar é utilizado para controlar a barra de status do dispositivo, como a hora, bateria, etc. */}
      <StatusBar style="auto" />
        <View style={{ backgroundColor: '#f297d7', padding: 20, borderRadius: 10, width: '100%', marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: '#7b00ff', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}> Exercicio com React Native</Text>
        <Text style={{ fontSize: 16, color: '#d43b15', fontWeight: 'bold', textAlign: 'right' }}> Direita</Text>
        <Text style={{ fontSize: 16, color: '#7e40bf', fontWeight: 'bold', textAlign: 'left' }}> Esquerda</Text>
        <Text style={{ fontSize: 16, color: '#007379', fontWeight: 'bold', textAlign: 'center' }}> Centro</Text>
        </View>
    </View>
  );
}
  {/*O componente StyleSheet é utilizado para criar estilos para os componentes, ele é parecido com o CSS, mas tem algumas diferenças, como a forma de escrever as propriedades, e a forma de importar os estilos */}
const estilos = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titulo: {
    fontSize: 30,
    color: '#7b00ff',
    fontWeight: 'bold',
    marginTop: 20,
  }
});
