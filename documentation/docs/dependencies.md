<!-- markdownlint-disable-next-line MD041 -->
[← Voltar (Índice)](../index.md)

# Dependências

Abaixo, a lista dos comandos utilizados para instalar as bibliotecas, pacotes, plugins e afins utilizados ao longo do desenvolvimento (categorizados em agrupamentos e identificada a ordem de instalação).

## Ambiente Web e Core

- (1) React DOM:

  ```bash
  npx expo install react-dom
  ```

  (Renderiza aplicações React no ambiente web)

- (2) React Native Web:

  ```bash
  npx expo install react-native-web
  ```

  (Permite que componentes React Native funcionem na web)

- (3) Expo Metro Runtime:

  ```bash
  npx expo install @expo/metro-runtime
  ```

  (Responsável pela execução do bundler Metro com suporte ao Expo)

## Navegação

- (4) React Navigation:

  ```bash
  npm install @react-navigation/native
  ```

  (Biblioteca principal de navegação para React Native)

- (5) Native Stack Navigator:

  ```bash
  npm install @react-navigation/native-stack
  ```

  (Implementa navegação em pilha com melhor desempenho nativo)

- (6) Bottom Tabs Navigator:

  ```bash
  npm install @react-navigation/bottom-tabs
  ```

  (Cria navegação com abas inferiores)

- (7) Drawer Navigator:

  ```bash
  npm install @react-navigation/drawer
  ```

  (Implementa navegação lateral tipo "gaveta")

- (8) React Native Screens:

  ```bash
  npm install react-native-screens
  ```

  (Melhora a performance gerenciando a renderização de telas nativamente)

- (9) Safe Area Context:

  ```bash
  npm install react-native-safe-area-context
  ```

  (Garante que o layout respeite as áreas seguras dos dispositivos)

- (10) Gesture Handler:

  ```bash
  npm install react-native-gesture-handler
  ```

  (Lida com gestos de toque de forma nativa)

- (11) Reanimated:

  ```bash
  npm install react-native-reanimated
  ```

  (Animações com desempenho nativo e mais controle)

- (12) Masked View:

  ```bash
  npm install @react-native-masked-view/masked-view
  ```

  (Suporte para aplicação de máscaras visuais em componentes)

## Suporte a Caminhos e Fontes

- (13) Babel Module Resolver:

  ```bash
  npm install --save-dev babel-plugin-module-resolver
  ```

  (Permite importar arquivos usando caminhos absolutos)

- (18) Expo Font:

  ```bash
  npm install expo-font
  ```

  (Carregamento de fontes customizadas (.ttf) com Expo)

## Gerenciamento de Estado e UI

- (15) Select Dropdown:

  ```bash
  npm install react-native-select-dropdown
  ```

  (Dropdown estilizado para listas de seleção)

- (16) Zustand:

  ```bash
  npm install zustand
  ```

  (Gerenciamento de estado leve e escalável para React)

- (17) Async Storage:

  ```bash
  npm install @react-native-async-storage/async-storage
  ```

  (Armazenamento local e persistente de dados)

## Formatação e Qualidade de Código

- (14) Prettier:

  ```bash
  npm install prettier --save-dev
  ```

  (Formatação automática e padronização de estilo de código)

## Testes

- (19) React Test Renderer:

  ```bash
  npm install --save-dev react-test-renderer@18.3.1
  ```

  (Renderiza componentes em memória para testes unitários)

- (20) Testing Library - React Native:

  ```bash
  npm install --save-dev @testing-library/react-native
  ```

  (Escreve testes simulando interações reais do usuário)

- (21) Jest Expo:

  ```bash
  npm install --save-dev jest-expo
  ```

  (Integra o Jest com projetos Expo)

- (22) Testing Library - Jest Native:

  ```bash
  npm install --save-dev @testing-library/jest-native
  ```

  (Expande os matchers do Jest para testes mais legíveis)

- (23) Types Jest:

  ```bash
  npm install --save-dev @types/jest
  ```

  (Tipos TypeScript para Jest)

## Integração com APIs

- (24) Axios:

  ```bash
  npm install axios
  ```

  (Cliente HTTP para requisições REST)

- (25) Axios Retry:

  ```bash
  npm install axios-retry
  ```

  (Middleware para tentativas automáticas com Axios)

- (26) Expo Image Picker:

  ```bash
  npx expo install expo-image-picker
  ```

  (Seleção de imagem do dispositivo)

### Exemplo

- (99) Nome:

  ```bash
  código
  ```

  (Descrição)

### [← Voltar (Índice)](../index.md)
