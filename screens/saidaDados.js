import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function saidaDados({ navigation, route }) {
  const dadosRecebidos = route.params.dados;


  const { inicial, final, dividendo } = dadosRecebidos;


  const calcularRetornoDubasStyle = () => {
      const retorno =(final - inicial + dividendo) / inicial * 100;
      return retorno;
  };



    return (
      <View style={styles.container}>
      <Text>Preço inicial :  R${inicial}</Text>
      <Text>Preço final :  R${final}</Text>
      <Text>Dividendos:  R${dividendo}</Text>
      <Text>Retorno: {calcularRetornoDubasStyle()}%</Text>
      <Button
          title="Fechar"
          onPress={() => navigation.goBack()}
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
    },
  });