// Importa React para criar componentes
import React from "react";
// Importa componentes básicos do React Native
import { View, Text, TouchableOpacity } from "react-native";
// Importa tipos para tipagem de navegação com React Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";
// Importa estilos globais definidos no projeto
import globalStyles from "@global";
// Importa o hook personalizado useTheme, que fornece tema e tipografia globalmente
import { useTheme } from "@useTheme";

type Props = NativeStackScreenProps<RootStackParamList, "TestScreen">;

// Componente TestScreen (Tela de Testes)
export default function TestScreen({ navigation }: Props) {
  // Usa o hook personalizado useTheme para obter cores, fontes e tamanhos de texto configurados globalmente
  const { colors, fontFamily, fontSizes } = useTheme();

  return (
    // Container principal da tela com estilo global e cor de fundo definida pelo tema atual
    <View
      style={[
        globalStyles.container,
        { backgroundColor: colors.backgroundBase },
      ]}
    >
      {/* Texto gigante com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{
          fontFamily,
          fontSize: fontSizes.giant,
          color: colors.textOnBase,
        }}
      >
        Texto Gigante
      </Text>

      {/* Texto grande com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{
          fontFamily,
          fontSize: fontSizes.large,
          color: colors.textOnBase,
        }}
      >
        Texto Grande
      </Text>

      {/* Texto padrão com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{
          fontFamily,
          fontSize: fontSizes.base,
          color: colors.textOnBase,
        }}
      >
        Texto Padrão
      </Text>

      {/* Texto pequeno com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{
          fontFamily,
          fontSize: fontSizes.small,
          color: colors.textOnBase,
        }}
      >
        Texto Pequeno
      </Text>

      {/* Botão para navegar até a tela de configurações */}
      <TouchableOpacity
        // Estilo do botão inclui estilos globais e cor de fundo definida pelo tema atual
        style={[
          globalStyles.button,
          { backgroundColor: colors.backgroundHighlight },
        ]}
        onPress={() => navigation.navigate("SettingsScreen")} // Navega para a tela "SettingsScreen"
      >
        {/* Texto do botão com fonte, tamanho e cor definidos pelo tema */}
        <Text
          style={{
            fontFamily,
            fontSize: fontSizes.large,
            color: colors.textOnHighlight,
          }}
        >
          Configurações
        </Text>
      </TouchableOpacity>
    </View>
  );
}
