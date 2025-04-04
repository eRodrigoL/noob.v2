import React from "react"; // Importa React para criar componentes
import { TouchableOpacity, Text } from "react-native"; // Importa componentes básicos do React Native

import globalStyles from "@/theme/globalStyles"; // Importa estilos globais definidos no projeto
import { useTheme } from "@/hooks/useTheme"; // Importa o hook personalizado useTheme, que fornece tema e tipografia globalmente

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, onPress }) => {
  // Usa o hook useTheme para obter a estilização dinânica configurada globalmente
  const { colors, fontFamily, fontSizes } = useTheme();

  return (
    <TouchableOpacity
      style={[
        globalStyles.buttonPrimary,
        { backgroundColor: colors.backgroundHighlight },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily,
          fontSize: fontSizes.title,
          color: colors.textOnHighlight,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
