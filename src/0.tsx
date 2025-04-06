import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "@global";
import theme from "@theme";
import typography from "@typography";
import { SelectList } from "react-native-dropdown-select-list";
import { useSettingsStore } from "@/store/useSettingsStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { useTheme } from "@useTheme";

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

  // Hook de tema e fonte para obter estilos com base no Zustand
  const { fontSizes } = useTheme();

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

  // Opções para seleção de fontes
  const fontOptions = [
    { key: "arial", value: "Arial" },
    { key: "times", value: "Times New Roman" },
    { key: "roboto", value: "Roboto" },
  ];

  // Opções para seleção de temas
  const themeOptions = [
    { key: "light", value: "Claro" },
    { key: "dark", value: "Escuro" },
    { key: "daltonic", value: "Daltônico" },
  ];

  // Aplica as alterações escolhidas localmente ao Zustand
  const applyChanges = () => {
    setFontFamily(localFontFamily);
    setColorScheme(localColorScheme);
    useSettingsStore.setState({ fontSizeMultiplier: localFontSizeMultiplier });
  };

  // Restaura os valores padrão apenas localmente
  const restoreLocalDefaults = () => {
    setLocalFontFamily("arial");
    setLocalColorScheme("light");
    setLocalFontSizeMultiplier(1);
  };

  // Ajuste local do tamanho da fonte (visualizado imediatamente)
  const handleIncrease = () => {
    if (localFontSizeMultiplier < 1.5) {
      setLocalFontSizeMultiplier((prev) => +(prev + 0.1).toFixed(2)); // Mantém precisão
    }
  };

  const handleDecrease = () => {
    if (localFontSizeMultiplier > 0.8) {
      setLocalFontSizeMultiplier((prev) => +(prev - 0.1).toFixed(2));
    }
  };

  return (
    <View
      style={[
        globalStyles.container,
        { backgroundColor: previewColors.backgroundBase },
      ]}
    >
      {/* ======== SEÇÃO: Fonte ======== */}
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

      {/* ======== SEÇÃO: Tamanho da Fonte ======== */}
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

      {/* ======== SEÇÃO: Tema ======== */}
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

      {/* ======== AÇÕES ======== */}
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

      <TouchableOpacity
        style={[
          globalStyles.button,
          { backgroundColor: previewColors.backgroundSemiHighlight },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text
          style={{
            fontFamily: previewFontFamily,
            fontSize: fontSizes.base,
            color: previewColors.textOnSemiHighlight,
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
