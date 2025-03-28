// Importa o hook personalizado useSettingsStore do arquivo de configurações
import { useSettingsStore } from "@/store/useSettingsStore";
import theme from "@/theme/theme"; // Importa as definições de tema (cores) do arquivo theme.ts
import typography from "@/theme/typography"; // Importa as definições de tipografia do arquivo typography.ts

// Hook personalizado que fornece tema e tipografia atualizados globalmente
export const useTheme = () => {
  // Extrai as configurações relevantes do store de configurações
  const { colorScheme, fontFamily, fontSizeMultiplier } = useSettingsStore();

  // Retorna um objeto com as configurações de tema e tipografia
  return {
    // Obtém as cores correspondentes ao esquema de cores selecionado (claro ou escuro)
    colors: theme[colorScheme],

    // Obtém a família da fonte definida nas configurações
    // O 'as keyof typeof typography.fonts' garante que fontFamily seja uma chave válida do objeto typography.fonts
    fontFamily: typography.fonts[fontFamily as keyof typeof typography.fonts],

    // Calcula e retorna os tamanhos de fonte ajustados com base no multiplicador definido pelo usuário
    fontSizes: {
      // Tamanho do título: tamanho base * multiplicador de título * multiplicador global
      title:
        typography.sizes.body *
        typography.sizes.titleMultiplier *
        fontSizeMultiplier,

      // Tamanho do subtítulo: tamanho base * multiplicador de subtítulo * multiplicador global
      subtitle:
        typography.sizes.body *
        typography.sizes.subtitleMultiplier *
        fontSizeMultiplier,

      // Tamanho do corpo do texto: tamanho base * multiplicador global
      body: typography.sizes.body * fontSizeMultiplier,
    },
  };
};
