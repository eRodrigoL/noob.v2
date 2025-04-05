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
      style={[globalStyles.container, { backgroundColor: colors.background }]}
    >
      {/* Título da tela com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{ fontFamily, fontSize: fontSizes.title, color: colors.text }}
      >
        Título da Tela
      </Text>

      {/* Subtítulo da tela com fonte, tamanho e cor definidos pelo tema */}
      <Text
        style={{ fontFamily, fontSize: fontSizes.subtitle, color: colors.text }}
      >
        Subtítulo da Tela
      </Text>

      {/* Texto explicativo exibindo estilos aplicados globalmente */}
      <Text
        style={{ fontFamily, fontSize: fontSizes.body, color: colors.text }}
      >
        Este é um exemplo de texto da tela para visualização de estilos
        aplicados globalmente.
      </Text>

      {/* Botão para navegar até a tela de configurações */}
      <TouchableOpacity
        // Estilo do botão inclui estilos globais e cor de fundo definida pelo tema atual
        style={[globalStyles.button, { backgroundColor: colors.button }]}
        onPress={() => navigation.navigate("SettingsScreen")} // Navega para a tela "SettingsScreen"
      >
        {/* Texto do botão com fonte, tamanho e cor definidos pelo tema */}
        <Text
          style={{ fontFamily, fontSize: fontSizes.body, color: colors.text }}
        >
          Configurações
        </Text>
      </TouchableOpacity>
    </View>
  );
}
