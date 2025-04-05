// Exporta uma função que configura o Babel, um compilador de JavaScript
module.exports = function (api) {
  // Ativa o cache para melhorar o desempenho durante a compilação
  api.cache(true);

  // Retorna as configurações do Babel
  return {
    // Define os presets (configurações padrão) que o Babel deve usar
    presets: ["babel-preset-expo"], // Este preset é específico para projetos Expo

    // Define os plugins que o Babel deve usar para funcionalidades adicionais
    plugins: [
      // Plugin necessário para o funcionamento do react-native-reanimated
      "react-native-reanimated/plugin",

      // Configura o plugin module-resolver para facilitar a importação de módulos usando aliases
      [
        "module-resolver",
        {
          root: ["./src"],
          // Alias: aliases servem como encurtadores de rotas a partir da raiz do aplicativo
          alias: {
            // Raiz
            "@": "./src",

            // Telas
            "@screens": "./src/screens",

            // Componentes
            "@components/*": "./src/components/*",

            // Estilo
            "@compStyles": "./src/theme/components",
            "@globalStyles": "./src/theme/globalStyles.ts",
            "@theme": "./src/theme/theme.ts",
            "@typography": "./src/theme/typography.ts",
            "@useTheme": "./src/hooks/useTheme.ts",
            "@compStyles/*": "./src/theme/components/*",
          },
        },
      ],
    ],
  };
};
