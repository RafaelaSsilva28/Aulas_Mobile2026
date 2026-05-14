import { View, Text, FlatList, Image } from "react-native";
import Hr from './Hr'

const Aula03_Exercicio02 = () => {
    const turmas = [   //vetor de listas com objetos
        {id: 1, foto: 'https://i.pinimg.com/736x/3f/ac/2f/3fac2fd32bf710d04cba38cad069705d.jpg',  nome: 'Notebook', categoria: 'eletronico', preco: 200, estoque: 12 },
        {id: 2, foto: 'https://i.pinimg.com/736x/6c/a9/fa/6ca9fa9601c0c333e37754d8844b79cb.jpg',  nome: 'Unicornio', categoria: 'pelucia', preco: 5.34, estoque: 30},
        {id: 3, foto: 'https://i.pinimg.com/736x/fe/ae/7b/feae7b66a803a4eb2200e9a78f470601.jpg',  nome: 'Celular', categoria: 'eletronico', preco: 2000, estoque: 122},
        {id: 4, foto: 'https://i.pinimg.com/webp70/736x/06/e2/7b/06e27ba9960249bf3acb2be9c2412eff.webp', nome: 'Cupcake', categoria: 'doce', preco: 6.99, estoque: 400},
    ]
    function exibirLista ( {item} ){
        //renderizando cada item da lista de forma personalizada
        return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
    
    {/* Coluna ID */}
    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>ID:</Text>
        <Text>{item.id}°</Text>
    </View>

    {/* Coluna foto */}
    <View style={{ flex: 2, alignItems: 'center' }}> 
    <Text style={{ fontWeight: 'bold' }}>Foto:</Text>
    <Image 
        source={{ uri: item.foto }} 
        style={{ width: 50, height: 50, borderRadius: 8 }} 
    />
</View>

    {/* Coluna nome */}
    <View style={{ flex: 2 }}> 
        <Text style={{ fontWeight: 'bold' }}>Nome:</Text>
        <Text>{item.nome}</Text>
    </View>

    {/* Coluna categoria */}
    <View style={{ flex: 2 }}>
        <Text style={{ fontWeight: 'bold' }}>Categoria:</Text>
        <Text>{item.categoria}</Text>
    </View>

    {/* Coluna preço */}
    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>Preço:</Text>
        <Text>{item.preco}</Text>
    </View>

    {/* Coluna estoque */}
    <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>Estoque:</Text>
        <Text>{item.estoque}</Text>
    </View>

</View>
        )
    } 
    return(
        <View>
            <Hr/>
             {/*Criando listas utilizando componente FlatList */}
            <Text style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}>Lista com FlatList</Text>
            <Text style={{textAlign: 'center'}}>Aula03 - Listas com Flatlist EXERCICIO 02</Text>
                {/*Mesma coisa para fazer cabeçario nos VIEW */}
            {/* <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 1, textAlign: "left"}}>ID: </Text>
                <Text style={{flex: 1, textAlign: "left"}}>Nome: </Text>
                <Text style={{flex: 1, textAlign: "left"}}>Categoria: </Text>
                <Text style={{flex: 1, textAlign: "left"}}>Preço: </Text>
                <Text style={{flex: 1, textAlign: "left"}}>Estoque: </Text>
            </View> */}
            <FlatList
            data={ turmas }  //passar vetor com os dados a serem exibidos
            renderItem={ exibirLista } //passar a função para exibir os itens
            keyExtractor={ item => item.id } //passar a função para extrair as chaves
            />
        </View>
    )
}
export default Aula03_Exercicio02