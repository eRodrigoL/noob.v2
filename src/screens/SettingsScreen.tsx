import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import globalStyles from "@/theme/globalStyles";
import { SelectList } from "react-native-dropdown-select-list";

type Props = NativeStackScreenProps<RootStackParamList, "SettingsScreen">;

// Componente Settings (Tela de configurações)
export default function SettingsScreen({ navigation }: Props) {
  // Estados locais (serão substituídos futuramente por Zustand)
  const [selectedFont, setSelectedFont] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  // Opções para SelectList de fonte
  const fontOptions = [
    { key: "arial", value: "Arial" },
    { key: "times", value: "Times New Roman" },
    { key: "openSans", value: "Open Sans" },
  ];

  // Opções para SelectList de tema
  const themeOptions = [
    { key: "light", value: "Claro" },
    { key: "dark", value: "Escuro" },
    { key: "daltonic", value: "Daltônico" },
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.bodyText}>Fonte do corpo:</Text>
      <SelectList
        setSelected={setSelectedFont}
        data={fontOptions}
        placeholder="Selecione a fonte"
        search={false}
        boxStyles={{ marginBottom: 20 }}
      />

      <Text style={globalStyles.bodyText}>Tamanho da fonte:</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>A-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>A+</Text>
        </TouchableOpacity>
      </View>

      <Text style={globalStyles.bodyText}>Tema de cores:</Text>
      <SelectList
        setSelected={setSelectedTheme}
        data={themeOptions}
        placeholder="Selecione o tema"
        search={false}
        boxStyles={{ marginBottom: 20 }}
      />

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
