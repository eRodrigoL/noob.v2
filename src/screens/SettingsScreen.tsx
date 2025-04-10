import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "@/theme/globalStyles";
import theme from "@/theme/theme";
import typography from "@/theme/typography";
import { SelectList } from "react-native-dropdown-select-list";
import { useSettingsStore } from "@/store/useSettingsStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { useTheme } from "@/hooks/useTheme";

// Define o tipo das props do componente
type Props = NativeStackScreenProps<RootStackParamList, "SettingsScreen">;

// Tela de Configurações: controla fonte, tamanho da fonte e cores
export default function SettingsScreen({ navigation }: Props) {
  // Obtém ações e estados do store global
  const {
    setFontFamily,
    setColorScheme,
    increaseFontSize,
    decreaseFontSize,
    restoreDefaults,
    fontFamily,
    colorScheme,
    fontSizeMultiplier,
  } = useSettingsStore();

  // Estados locais (evita loops infinitos)
  const [localFontFamily, setLocalFontFamily] = useState(fontFamily);
  const [localColorScheme, setLocalColorScheme] = useState(colorScheme);
  const [localFontSizeMultiplier, setLocalFontSizeMultiplier] =
    useState(fontSizeMultiplier);

  // Atualiza estados locais quando os valores globais mudam
  useEffect(() => {
    // Atualiza estados locais ao montar tela
    setLocalFontFamily(fontFamily);
    setLocalColorScheme(colorScheme);
    setLocalFontSizeMultiplier(fontSizeMultiplier);
  }, [fontFamily, colorScheme, fontSizeMultiplier]);

  // Estilos dinâmicos locais (pré-visualização imediata)
  const previewColors = theme[localColorScheme];
  const previewFontFamily =
    typography.fonts[localFontFamily as keyof typeof typography.fonts];

  // Cálculo local dos tamanhos de fonte
  const fontSizes = {
    title:
      typography.sizes.body *
      typography.sizes.titleMultiplier *
      localFontSizeMultiplier,
    subtitle:
      typography.sizes.body *
      typography.sizes.subtitleMultiplier *
      localFontSizeMultiplier,
    body: typography.sizes.body * localFontSizeMultiplier,
  };

  // Opções disponíveis para seleção de fonte
  const fontOptions = [
    { key: "arial", value: "Arial" },
    { key: "times", value: "Times New Roman" },
    { key: "roboto", value: "Roboto" },
  ];

  // Opções disponíveis para seleção de tema de cores
  const themeOptions = [
    { key: "light", value: "Claro" },
    { key: "dark", value: "Escuro" },
    { key: "daltonic", value: "Daltônico" },
  ];

  // Função para aplicar as mudanças locais ao estado global
  const applyChanges = () => {
    setFontFamily(localFontFamily);
    setColorScheme(localColorScheme);
    // Aplica o multiplicador local ao Zustand
    useSettingsStore.setState({ fontSizeMultiplier: localFontSizeMultiplier });
  };

  // Handlers para tamanho local imediato
  const handleIncrease = () => {
    if (localFontSizeMultiplier < 1.5) {
      setLocalFontSizeMultiplier((prev) => prev + 0.1);
    }
  };

  const handleDecrease = () => {
    if (localFontSizeMultiplier > 0.8) {
      setLocalFontSizeMultiplier((prev) => prev - 0.1);
    }
  };

  return (
    <View
      style={[
        globalStyles.container,
        { backgroundColor: previewColors.background },
      ]}
    >
      {/* Seleção de Fonte */}
      <Text
        style={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
      >
        Fonte do corpo:
      </Text>

      <SelectList
        setSelected={setLocalFontFamily}
        data={fontOptions}
        defaultOption={fontOptions.find((f) => f.key === localFontFamily)}
        search={false}
        boxStyles={{ marginBottom: 20 }}
        dropdownTextStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
        inputStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
      />

      {/* Ajuste de Tamanho da Fonte */}
      <Text
        style={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
      >
        Tamanho da fonte:
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: previewColors.button },
          ]}
          onPress={handleDecrease}
        >
          <Text
            style={{
              fontFamily: previewFontFamily,
              fontSize: fontSizes.body,
              color: previewColors.text,
            }}
          >
            A-
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: previewColors.button },
          ]}
          onPress={handleIncrease}
        >
          <Text
            style={{
              fontFamily: previewFontFamily,
              fontSize: fontSizes.body,
              color: previewColors.text,
            }}
          >
            A+
          </Text>
        </TouchableOpacity>
      </View>

      {/* Seleção de Tema de Cores */}
      <Text
        style={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
      >
        Tema de cores:
      </Text>

      <SelectList
        setSelected={setLocalColorScheme}
        data={themeOptions}
        defaultOption={themeOptions.find((t) => t.key === localColorScheme)}
        search={false}
        boxStyles={{ marginBottom: 20 }}
        dropdownTextStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
        inputStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.body,
          color: previewColors.text,
        }}
      />

      {/* Botões de Ação */}
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: previewColors.button }]}
        onPress={applyChanges}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.body,
            color: previewColors.text,
          }}
        >
          Confirmar mudanças
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: previewColors.button }]}
        onPress={restoreDefaults}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.body,
            color: previewColors.text,
          }}
        >
          Restaurar padrão
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: previewColors.button }]}
        onPress={() => navigation.goBack()}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.body,
            color: previewColors.text,
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
