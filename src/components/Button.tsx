import React from "react"; // Importa React para criar componentes
import { TouchableOpacity, Text } from "react-native"; // Importa componentes básicos do React Native

import { useTheme, globalStyles } from "@theme"; // Importa temas e estilos

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  // Usa o hook useTheme para obter a estilização dinânica configurada globalmente
  const { colors, fontFamily, fontSizes } = useTheme();

  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        { backgroundColor: colors.backgroundSemiHighlight },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          globalStyles.textCentered,
          {
            fontFamily,
            fontSize: fontSizes.large,
            color: colors.textOnHighlight,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
