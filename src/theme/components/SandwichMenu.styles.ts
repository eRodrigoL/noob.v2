import { StyleSheet } from "react-native";

// Estilos específicos para o menu lateral (não dependem de tema)
export const headerMenuStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
  },
  modalView: {
    width: "60%",
    height: "100%",
    padding: 20,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
