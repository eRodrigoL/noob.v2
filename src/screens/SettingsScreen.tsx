import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import globalStyles from "@/theme/globalStyles";

type Props = NativeStackScreenProps<RootStackParamList, "SettingsScreen">;

// Componente Settings (Tela de configurações)
export default function SettingsScreen({ navigation }: Props) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.bodyText}>Fonte do corpo:</Text>
      {/* TODO: Substituir por componente SelectList real */}
      <Text style={globalStyles.bodyText}>
        [ Arial | Times New Roman | Open Sans ]
      </Text>

      <Text style={globalStyles.bodyText}>Tamanho da fonte:</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>A-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>A+</Text>
        </TouchableOpacity>
      </View>

      <Text style={globalStyles.bodyText}>Tema de cores:</Text>
      {/* TODO: Substituir por componente SelectList real */}
      <Text style={globalStyles.bodyText}>[ Claro | Escuro | Daltônico ]</Text>

      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Restaurar padrão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.goBack()} // Funcionalidade do botão Voltar
      >
        <Text style={globalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
