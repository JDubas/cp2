import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function inicial({ navigation }) {
    return (
        <View style={styles.container}>

<Text style={styles.heading}>
                Joao Dubas rm76153
            </Text>

            <Image
                source={require('../assets/calculo.png')} // Caminho para a imagem
                style={styles.imagem}
            />
            <Text style={styles.text}>
                O cálculo de retorno sobre investimento é uma forma simples e direta para saber quanto você ganhou após um certo, entre comprar e vender “algo” que pode ser um bem material ou mesmo um investimento em dinheiro. Isso pode ser feito ao comprar dólar, ouro, imóvel, ações, projetos como de uma startup por exemplo.
            </Text>
            <Button
                title="Vamos Calcular?"
                onPress={() => navigation.navigate('entradaDados')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, 
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20, 
    },
    imagem: {
        width: 400,
        height: 400, 
        marginBottom: 20,
    },    heading: {
        fontSize: 32,
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 20, 
    },
});
