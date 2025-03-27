// Importa o React, necessário para criar componentes
import React from "react";

// Importa o componente RootNavigator do arquivo localizado em "@/navigation/RootNavigator"
// O "@" indica um alias de caminho configurado no projeto
import RootNavigator from "@/navigation/RootNavigator";

// Define e exporta o componente principal do aplicativo chamado App
export default function App() {
  // A função App retorna o componente RootNavigator
  // O RootNavigator provavelmente contém a lógica de navegação principal do aplicativo
  return <RootNavigator />;
}
