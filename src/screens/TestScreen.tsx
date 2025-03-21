import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "TestScreen">;

export default function TestScreen({ navigation }: Props) {
  return (
    <View>
      {/* titulo */}
      <Text>Título</Text>

      {/* subtítulo */}
      <Text>Subtítulo</Text>
      {/* texto */}
      <Text>Texto</Text>

      {/* Botão voltar */}
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
