import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useSettingsStore } from "@/store/useSettingsStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { useTheme, theme, typography, globalStyles } from "@theme"; // Importa temas, cores e estilos

import Header from "@components/Header"; // Componente cabeçalho

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
    giant:
      typography.sizes.base *
      typography.sizes.giantMultiplier *
      localFontSizeMultiplier,
    large:
      typography.sizes.base *
      typography.sizes.largeMultiplier *
      localFontSizeMultiplier,
    base: typography.sizes.base * localFontSizeMultiplier,
    small: typography.sizes.smallMultiplier * localFontSizeMultiplier,
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

  // Restaura os valores padrão apenas localmente
  const restoreLocalDefaults = () => {
    setLocalFontFamily("arial");
    setLocalColorScheme("light");
    setLocalFontSizeMultiplier(1);
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
        { backgroundColor: previewColors.backgroundBase },
      ]}
    >
      {/* Componente Header (cabeçalho) */}
      <Header title="Configurações" />

      {/* Seleção de Fonte */}
      <Text
        style={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
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
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
        }}
        inputStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
        }}
      />

      {/* Ajuste de Tamanho da Fonte */}
      <Text
        style={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
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
            { backgroundColor: previewColors.backgroundSemiHighlight },
          ]}
          onPress={handleDecrease}
        >
          <Text
            style={{
              fontFamily: previewFontFamily,
              fontSize: fontSizes.base,
              color: previewColors.textOnSemiHighlight,
            }}
          >
            A-
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: previewColors.backgroundSemiHighlight },
          ]}
          onPress={handleIncrease}
        >
          <Text
            style={{
              fontFamily: previewFontFamily,
              fontSize: fontSizes.base,
              color: previewColors.textOnSemiHighlight,
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
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
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
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
        }}
        inputStyles={{
          fontFamily: previewFontFamily,
          fontSize: fontSizes.base,
          color: previewColors.textOnBase,
        }}
      />

      {/* Botões de Ação */}
      <TouchableOpacity
        style={[
          globalStyles.button,
          { backgroundColor: previewColors.backgroundHighlight },
        ]}
        onPress={applyChanges}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.base,
            color: previewColors.textOnHighlight,
          }}
        >
          Confirmar mudanças
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          globalStyles.button,
          { backgroundColor: previewColors.backgroundSemiHighlight },
        ]}
        onPress={restoreLocalDefaults}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.base,
            color: previewColors.textOnSemiHighlight,
          }}
        >
          Restaurar padrão
        </Text>
      </TouchableOpacity>
    </View>
  );
}
