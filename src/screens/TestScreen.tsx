import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";
import globalStyles from "@/theme/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "TestScreen">;

// Componente TestScreen (Tela de Testes)
export default function TestScreen({ navigation }: Props) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Título da Tela</Text>
      <Text style={globalStyles.subtitle}>Subtítulo da Tela</Text>
      <Text style={globalStyles.bodyText}>
        Este é um exemplo de texto da tela para visualização de estilos
        aplicados globalmente.
      </Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("SettingsScreen")} // Funcionalidade do botão Configurações
      >
        <Text style={globalStyles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
