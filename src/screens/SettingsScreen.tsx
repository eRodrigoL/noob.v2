import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen({ navigation }: Props) {
  return (
    <View>
      {/* titulo */}
      <Text>Configurações</Text>

      {/* subtítulo */}
      <Text>Fonte</Text>
      {/* texto */}
      <Text>Tamanho da fonte</Text>
      {/* Botões de aumentar/diminuir fonte */}
      <TouchableOpacity onPress={() => {}}>A-</TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>A+</TouchableOpacity>

      {/* subtítulo */}
      <Text>Cores</Text>
      {/* texto */}
      <Text>Modo daltônico:</Text>
      {/* Botão Alternar modo daltônico */}
      <TouchableOpacity onPress={() => {}}>
        <Text>Ligado / Desligado</Text>
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
