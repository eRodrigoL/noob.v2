import React from "react"; // Importa React para criar componentes
import { TouchableOpacity, Text } from "react-native"; // Importa componentes básicos do React Native

import { useTheme, globalStyles } from "@theme"; // Importa temas e estilos

interface ButtonHighlightProps {
  title: string;
  onPress: () => void;
}

const ButtonHighlight: React.FC<ButtonHighlightProps> = ({
  title,
  onPress,
}) => {
  // Usa o hook useTheme para obter a estilização dinânica configurada globalmente
  const { colors, fontFamily, fontSizes } = useTheme();

  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        { backgroundColor: colors.backgroundHighlight },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          globalStyles.textCenteredBold,
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

export default ButtonHighlight;
