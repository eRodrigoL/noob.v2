import React from "react"; // Importa o React, necessário para criar componentes
// Importa a função para criar um navegador de pilha nativo (Native Stack Navigator)
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importa o componente NavigationContainer, que fornece o contexto de navegação para o aplicativo
import { NavigationContainer } from "@react-navigation/native";
// Importa as telas que serão usadas no navegador
import SettingsScreen from "@screens/SettingsScreen";
import TestScreen from "@screens/TestScreen";

// Define o tipo RootStackParamList, que descreve as rotas disponíveis no navegador e seus parâmetros
export type RootStackParamList = {
  TestScreen: undefined; // A rota "TestScreen" não aceita parâmetros (undefined)
  SettingsScreen: undefined; // A rota "SettingsScreen" também não aceita parâmetros (undefined)
};

// Cria uma instância do navegador de pilha, associando-o ao tipo RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

// Define e exporta o componente RootNavigator, que gerencia a navegação principal do aplicativo
export default function RootNavigator() {
  return (
    // O NavigationContainer envolve todo o navegador e fornece o contexto de navegação
    <NavigationContainer>
      {/* Configura o navegador de pilha */}
      <Stack.Navigator
        // Define a rota inicial como "TestScreen"
        initialRouteName="TestScreen"
        // Define opções padrão para as telas (neste caso, oculta os cabeçalhos das telas)
        screenOptions={{ headerShown: false }}
      >
        {/* Definição das telas como rotas no navegador */}
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
