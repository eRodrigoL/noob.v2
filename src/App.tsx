// Importa o React para criar componentes
import React, { useEffect } from "react";
// Importa hook para carregamento de fontes
import { useFonts } from "expo-font";
// Importa o componente RootNavigator do arquivo localizado em "@/navigation/RootNavigator"
// O "@" indica um alias de caminho configurado no projeto
import RootNavigator from "@/navigation/RootNavigator";
// Importa o cliente Axios com a base da API
import api from "@/api/apiClient";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Define e exporta o componente principal do aplicativo chamado App
export default function App() {
  // Carrega fontes personalizadas (registradas com os mesmos nomes usados em typography.ts)
  const [fontsLoaded] = useFonts({
    Arial: require("../assets/fonts/Arial.ttf"),
    Roboto: require("../assets/fonts/Roboto.ttf"),
    "Times New Roman": require("../assets/fonts/TimesNewRoman.ttf"),
  });

  // 🔁 UseEffect para despertar e manter a API acordada
  useEffect(() => {
    // Primeira chamada: "acorda" a API assim que o app abre
    api.get("usuarios").catch(() => {
      console.log("❌ Falha ao despertar API");
    });

    // Intervalo para manter a API acordada a cada 4 minutos (240000ms)
    const interval = setInterval(() => {
      api.get("usuarios").catch(() => {});
    }, 240000);

    // Limpa o intervalo quando o app for encerrado
    return () => clearInterval(interval);
  }, []);

  // Enquanto as fontes não estiverem carregadas, não renderiza a tela
  if (!fontsLoaded) return null;

  // A função App retorna o componente RootNavigator
  // O RootNavigator provavelmente contém a lógica de navegação principal do aplicativo
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
