import React from "react"; // Importa React para criar componentes
import { TouchableOpacity, Text } from "react-native"; // Importa componentes básicos do React Native

import globalStyles from "@/theme/globalStyles"; // Importa estilos globais definidos no projeto
import { useTheme } from "@/hooks/useTheme"; // Importa o hook personalizado useTheme, que fornece tema e tipografia globalmente

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
            fontSize: fontSizes.title,
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
