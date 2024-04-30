import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react';


export default function entradaDados({ navigation }) {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');


  const calcular = () => {
    const inicial = parseFloat(valor1);
    const final = parseFloat(valor2);
    const dividendo = parseFloat(valor3);

    const dados = {
        inicial: inicial,
        final: final,
        dividendo: dividendo
    };
    navigation.navigate('saidaDados', { dados: dados });
};

    return (
       <View style={styles.container}>
            <Text>Página para cálculo do retorno</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o Preco inicial"
                onChangeText={text => setValor1(text)}
                value={valor1}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o preco final"
                onChangeText={text => setValor2(text)}
                value={valor2}
            />
              <TextInput
                style={styles.input}
                placeholder="Digite os dividendos"
                onChangeText={text => setValor3(text)}
                value={valor3}
            />

            <Button
                title="Calcular"
                onPress={calcular}
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
  input: {
      height: 40,
      width: '80%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
  },
  button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  });