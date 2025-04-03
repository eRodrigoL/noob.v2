module.exports = {
  // 🔧 Usa o preset do Expo para configurar o Jest corretamente
  preset: "jest-expo",

  // 🧪 Habilita matchers extras como "toBeVisible()", "toHaveTextContent()", etc.
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],

  // 📦 Diz ao Jest para usar um mock manual quando importar AsyncStorage
  moduleNameMapper: {
    "^@react-native-async-storage/async-storage$":
      "<rootDir>/__mocks__/@react-native-async-storage/async-storage.ts",
  },
};
