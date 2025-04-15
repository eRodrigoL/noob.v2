// Importa a função StyleSheet do React Native para criar estilos
import { StyleSheet } from "react-native";

// Define um objeto de estilos globais usando StyleSheet.create
const globalStyles = StyleSheet.create({
  // Container princípal das telas
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
  },

  // Botão genérico base
  button: {
    padding: 10, // Adiciona um preenchimento interno de 10 unidades em todos os lados
    justifyContent: "center", // Centraliza o conteúdo verticalmente dentro do botão
    alignItems: "center", // Centraliza o conteúdo horizontalmente dentro do botão
    borderRadius: 5, // Define o raio da borda para cantos arredondados
    margin: 5, // Margem de 20 unidades de todos os lados
  },

  // Texto centralizado e em negrito (usado para títulos, destaque, botões principais)
  textCenteredBold: {
    textAlign: "center",
    fontWeight: "bold",
  },

  // Texto centralizado (exp.: botões secundários, descrições de imagens e gráficos, etc.)
  textCentered: {
    textAlign: "center",
    fontWeight: "normal",
  },

  // Texto justificado e em negrito (exp.: subtítulos, etc.)
  textJustifiedBoldItalic: {
    textAlign: "justify",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  // Texto justificado e normal (exp.: textos simples, descrições, textos longos, etc.)
  textJustified: {
    textAlign: "justify",
    fontWeight: "normal",
  },

  // Quadro ou card genérico com sombra leve
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

// Exporta o objeto de estilos globais para ser usado em outros componentes
export default globalStyles;
