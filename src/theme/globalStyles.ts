import { StyleSheet } from "react-native";
import theme from "@/theme/theme";
import typography from "@/theme/typography";

// Aqui usamos temporariamente o tema "light" e fonte Arial como padrão
const colors = theme.light;
const currentFont = typography.fonts.arial;
const fontSize = typography.sizes.body;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: currentFont,
    fontSize: fontSize * typography.sizes.titleMultiplier,
    color: colors.text,
  },
  subtitle: {
    fontFamily: currentFont,
    fontSize: fontSize * typography.sizes.subtitleMultiplier,
    color: colors.text,
  },
  bodyText: {
    fontFamily: currentFont,
    fontSize: fontSize,
    color: colors.text,
  },
  button: {
    padding: 10,
    backgroundColor: colors.button,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.text,
    fontSize: fontSize,
  },
});

export default globalStyles;
