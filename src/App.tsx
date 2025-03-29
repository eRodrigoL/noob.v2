// Importa o React, necessário para criar componentes
import React from "react";
//importa...
import { useFonts } from "expo-font";
// Importa o componente RootNavigator do arquivo localizado em "@/navigation/RootNavigator"
// O "@" indica um alias de caminho configurado no projeto
import RootNavigator from "@/navigation/RootNavigator";

// Define e exporta o componente principal do aplicativo chamado App
export default function App() {
  // Carrega fontes personalizadas (registradas com os mesmos nomes usados em typography.ts)
  const [fontsLoaded] = useFonts({
    Arial: require("../assets/fonts/Arial.ttf"),
    Roboto: require("../assets/fonts/Roboto.ttf"),
    "Times New Roman": require("../assets/fonts/TimesNewRoman.ttf"),
  });

  // Só renderiza a navegação quando as fontes estiverem carregadas
  if (!fontsLoaded) return null;

  // A função App retorna o componente RootNavigator
  // O RootNavigator provavelmente contém a lógica de navegação principal do aplicativo
  return <RootNavigator />;
}
