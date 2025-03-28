// Importa a função registerRootComponent do pacote "expo"
import { registerRootComponent } from "expo";

// Importa o componente App do arquivo "@/App"
import App from "@/App";

// A função registerRootComponent é usada para registrar o componente raiz do aplicativo
// Ela internamente chama AppRegistry.registerComponent('main', () => App)
// Isso garante que o ambiente seja configurado adequadamente,
// independentemente de o app ser carregado no Expo Go ou em uma compilação nativa

// Registra o componente App como o componente raiz do aplicativo
registerRootComponent(App);
