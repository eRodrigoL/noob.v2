// Importa a função StyleSheet do React Native para criar estilos
import { StyleSheet } from "react-native";

// Define um objeto de estilos globais usando StyleSheet.create
const globalStyles = StyleSheet.create({
  // Estilo para o container principal
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    padding: 20, // Adiciona um preenchimento interno de 20 unidades em todos os lados
  },

  // Estilo para botões
  button: {
    padding: 10, // Adiciona um preenchimento interno de 10 unidades em todos os lados
    alignItems: "center", // Centraliza o conteúdo do botão horizontalmente
    borderRadius: 5, // Adiciona cantos arredondados com raio de 5 unidades
    marginVertical: 5, // Adiciona uma margem vertical de 5 unidades acima e abaixo do botão
  },

  // Estilos para botões primários
  buttonPrimary: {
    minWidth: "80%", // Define a largura do botão primário
    padding: 10,
    justifyContent: "center", // Centraliza o conteúdo verticalmente dentro do botão
    alignItems: "center", // Centraliza o conteúdo horizontalmente dentro do botão
    borderRadius: 5, // Define o raio da borda para cantos arredondados
    margin: 20,
    // backgroundColor: Theme.light.backgroundButton, // Define a cor de fundo do botão primário com base no tema
  },
});

// Exporta o objeto de estilos globais para ser usado em outros componentes
export default globalStyles;
