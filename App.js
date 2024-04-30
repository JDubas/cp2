import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import entradaDados from './screens/entradaDados';
import saidaDados from './screens/saidaDados';
import inicial from './screens/inicial';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="inicial" component={inicial} />
      <Stack.Screen name="entradaDados" component={entradaDados} />
      <Stack.Screen name="saidaDados" component={saidaDados} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
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
