# Sobre a aplicação

Esta é a aplicação para trabalho de conclusão de curso do curso superior de Tecnologia em Desenvolvimento de Produtos Plásticos, pela Fatec Mauá.

A aplicação trata-se de uma ferramenta Android/web desenvolvida em TypeScript para o registro de partidas de jogos de tabuleiro, com o objetivo de fornecer ao usuário uma análise de desempenho neste tipo de passatempo. Para tal finalidade, a aplicação é planejada com as seguintes principais funcionalidades:

- Cadastro e edição de usuário
- Cadastro e edição de jogos
- Registro de partidas
- Visualização de desempenho

# Inicialização

O projeto é construído em torno do React Native pelo framework de desenvolvimento Expo (https://docs.expo.dev/). Foi usado a opção "Blank (TypeScript)" do comando:

```bash
npx create-expo-app@latest --template
```

### Bibliotecas e pacotes iniciais

O comando escolhido para iniciar o projeto fornece uma aplicação totalmente limpa, sendo necessária antes da implementação dequalquer funcionalidade a instalação de bibliotecas adicionais necessárias ao desenvolvimento. As bibliotecas instaladas incluem:

- React DOM: Utilizada para compatibilidade com aplicativos web.
  ```bash
  npx expo install react-dom
  ```
- React Native Web: Permite a execução da aplicação em navegadores.
  ```bash
  npx expo install react-native-web
  ```
- Expo Metro Runtime: Essencial para a compatibilidade nos navegadores.
  ```bash
  npx expo install @expo/metro-runtime
  ```

# Arquitetura De Pastas

A estrutura do projeto é dividida em pastas que representam diferentes categorias de funcionalidades e recursos. Essa organização ajuda a manter o projeto escalável e facilita a compreensão do código por outros desenvolvedores.

    (° = ainda não criado)
    📦 noob.v2/
    ├── 📂 assets/ # Imagens, ícones, fontes, etc.
    │ ├── ° icon.png
    │ ├── ° splash.png
    │ ├── ° fonts/
    │ ├── ° icons/
    │ └── ° lottie/
    ├── 📂 ° src/
    │ ├── 📂 ° api/ # Comunicação com APIs
    │ │ ├── ° apiClient.ts
    │ │ ├── ° auth.ts
    │ │ ├── ° users.ts
    │ │ └── ° games.ts
    │ ├── 📂 ° components/ # Componentes reutilizáveis
    │ │ ├── ° FontSizeButtons.tsx
    │ │ ├── ° Button.tsx
    │ │ ├── ° Card.tsx
    │ │ ├── ° Header.tsx
    │ │ ├── ° Input.tsx
    │ │ ├── ° Loading.tsx
    │ │ ├── ° Modal.tsx
    │ │ └── ° ThemeToggle.tsx
    │ ├── 📂 ° hooks/ # Hooks personalizados
    │ │ ├── ° useAuth.ts
    │ │ ├── ° useGames.ts
    │ │ ├── ° useTheme.ts
    │ │ └── ° useFetch.ts
    │ ├── 📂 ° navigation/ # Navegação (React Navigation)
    │ │ ├── ° RootNavigator.tsx
    │ │ ├── ° AppTabs.tsx
    │ │ ├── ° AuthStack.tsx
    │ │ └── ° linking.ts
    │ ├── 📂 ° screens/ # Telas da aplicação
    │ │ ├── ° HomeScreen.tsx
    │ │ ├── ° ProfileScreen.tsx
    │ │ ├── ° GameDetailsScreen.tsx
    │ │ ├── ° LoginScreen.tsx
    │ │ ├── ° RegisterScreen.tsx
    │ │ └── SettingsScreen.tsx
    │ ├── 📂 ° store/ # Zustand para gerenciamento de estado
    │ │ ├── ° useSettingsStore.ts
    │ │ ├── ° useAuthStore.ts
    │ │ ├── ° useThemeStore.ts
    │ │ ├── ° useGameStore.ts
    │ │ └── ° index.ts
    │ ├── 📂 ° theme/ # Tema (cores, fontes)
    │ │ ├── colors.ts
    │ │ ├── fonts.ts
    │ │ ├── ° spacing.ts
    │ │ └── ° index.ts
    │ ├── 📂 ° utils/ # Utilitários e helpers
    │ │ ├── ° formatDate.ts
    │ │ ├── ° storage.ts
    │ │ ├── ° validators.ts
    │ │ └── ° constants.ts
    │ ├── App.tsx # Arquivo principal
    │ ├── ° types.ts # Definição de tipos
    │ └── ° env.ts # Configuração de variáveis de ambiente
    ├── 📂 ° tests/ # Testes unitários e de integração
    │ ├── ° components/
    │ ├── ° hooks/
    │ ├── ° screens/
    │ └── ° api/
    ├── ° .env/ # Variáveis de ambiente
    ├── .gitignore
    ├── ° .prettierignore
    ├── index.ts # Ponto de entrada
    ├── app.json # Configuração do Expo
    ├── babel.config.js # Configuração do Babel
    ├── package.json
    ├── tsconfig.json # Configuração do TypeScript
    └── README.md

A árvore de pastas acima contém nome geréricos de arquivos quando se trata dos arquivos ainda não criados (iniciados com "° "). Esta organização de pastas foi planejada pensando na:

- Organização: Cada pasta tem um propósito claro, facilitando a localização de componentes e funcionalidades específicas.

- Escalabilidade: A estrutura permite que o projeto cresça sem se tornar desorganizado.

- Manutenção: A organização facilita a manutenção e atualização do código.

- Colaboração: Outros desenvolvedores podem rapidamente entender a estrutura do projeto.

# Bibliotecas

Abaixo, a lista das bibliotecas e dependências instaladas ao longo do desenvolvimento.

### Expo e Web

- React DOM:

  ```bash
  npx expo install react-dom
  ```

  (Biblioteca para renderização web)

- React Native Web:

  ```bash
  npx expo install react-native-web
  ```

  (Biblioteca para suporte web em React Native)

  - Expo Metro Runtime:

  ```bash
  npx expo install @expo/metro-runtime
  ```

  (Runtime necessário para o Expo)

  ### Navegação

  - React Navigation:

  ```bash
  npm install @react-navigation/native
  ```

  (Biblioteca de navegação para React Native)

- React Navigation Stack:

  ```bash
  npm install @react-navigation/native-stack
  ```

  (Suporte para navegação em pilha)

- React Navigation Bottom Tabs:

  ```bash
  npm install @react-navigation/bottom-tabs
  ```

  (Suporte para abas inferiores)

- React Navigation Drawer:

  ```bash
  npm install @react-navigation/drawer
  ```

  (Suporte para navegação em gaveta)

  ### Componentes e Utilitários

- React Native Screens:

  ```bash
  npm install react-native-screens
  ```

  (Biblioteca para melhorar a performance de telas)

- React Native Safe Area Context:

  ```bash
  npm install react-native-safe-area-context
  ```

  (Biblioteca para lidar com áreas seguras em dispositivos)

- React Native Gesture Handler:

  ```bash
  npm install react-native-gesture-handler
  ```

  (Biblioteca para lidar com gestos)

- React Native Reanimated:

  ```bash
  npm install react-native-reanimated
  ```

  (Biblioteca para animações avançadas)

- React Native Masked View:

  ```bash
  npm install @react-native-masked-view/masked-view
  ```

  (Biblioteca para máscaras visuais)

### Plugin Babel

- Module Resolver

  ```bash
  npm install --save-dev babel-plugin-module-resolver
  ```
