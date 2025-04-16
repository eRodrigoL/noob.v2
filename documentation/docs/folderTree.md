<!-- markdownlint-disable-next-line MD041 -->
[← Voltar (Índice)](../index.md)

# Arquitetura De Pastas

A estrutura do projeto é dividida em pastas que representam diferentes categorias de funcionalidades e recursos. Essa organização ajuda a manter o projeto escalável e facilita a compreensão do código por outros desenvolvedores.

    ([x] = arquivos e pastas já presentes na aplicação)
    📦 noob.v2/
    ├── 📂 [x] __mocks__/
    │   └── 📂 [x] @react-native-async-storage/
    │       └── [x] async-storage.ts
    ├── 📂 [x] assets/ # Imagens, ícones, fontes, etc.
    │   ├── 📂 [x] fonts/ # arquivos de fontes
    │   │   ├── [x] Arial.ttf
    │   │   ├── [x] Roboto.ttf
    │   │   └── [x] Times New Roman.ttf
    │   └── 📂 [ ] images/ # arquivos de fontes
    │       ├── 📂 [ ] icons/
    │       │   └── [ ] icon.png
    │       ├── 📂 [ ] lottie/
    │       ├── [ ] splash.png
    │       ├── [ ] SpaceMono-Regular.ttf
    │       └── [ ] Times New Roman.ttf
    ├── 📂 [x] documentation/ # documentação.
    │   ├── 📂 [ ] docs/
    │   │   ├── [x] commit-guidelines.md
    │   │   ├── [x] dependenciesList.md
    │   │   ├── [x] folderTree.md
    │   │   └── [x] styling.md
    │   └── [x] index.ms (sumário)
    ├── 📂 [x] src/
    │   ├── 📂 [x] api/ # Comunicação com APIs
    │   │   ├── [x] apiClient.ts
    │   │   ├── [ ] auth.ts
    │   │   ├── [ ] users.ts
    │   │   └── [ ] games.ts
    │   ├── 📂 [x] components/ # Componentes reutilizáveis
    │   │   ├── [x] Button.tsx
    │   │   ├── [x] ButtonHighlight.tsx
    │   │   ├── [x] Header.tsx
    │   │   ├── [ ] Card.tsx
    │   │   ├── [ ] Header.tsx
    │   │   ├── [ ] Input.tsx
    │   │   ├── [ ] Loading.tsx
    │   │   ├── [ ] Modal.tsx
    │   │   ├── [ ] ParallaxProfile.tsx
    │   │   ├── [x] SandwichMenu.tsx
    │   │   └── [ ] ThemeToggle.tsx
    │   ├── 📂 [x] hooks/ # Hooks personalizados
    │   │   ├── [ ] useAuth.ts
    │   │   ├── [ ] useGames.ts
    │   │   ├── [ ] useFetch.ts
    │   │   └── [x] useTheme.ts
    │   ├── 📂 [x] navigation/ # Navegação (React Navigation)
    │   │   ├── [x] RootNavigator.tsx
    │   │   ├── [ ] AppTabs.tsx
    │   │   ├── [ ] AuthStack.tsx
    │   │   └── [ ] linking.ts
    │   ├── 📂 [x] screens/ # Telas da aplicação
    │   │   ├── 📂 [ ] boardgame/
    │   │   │   ├── [ ] EditGame.tsx
    │   │   │   ├── [ ] List.tsx
    │   │   │   └── [ ] RegisterGame.tsx
    │   │   ├── 📂 [ ] matches/
    │   │   │   ├── [ ] MatchFinish.tsx
    │   │   │   ├── [ ] MatchStart.tsx
    │   │   │   └── [ ] Matches.tsx
    │   │   ├── 📂 [ ] user/
    │   │   │   ├── [ ] EditUser.tsx
    │   │   │   ├── [ ] Login.tsx
    │   │   │   ├── [ ] RegisterUser.tsx
    │   │   │   └── [ ] UserProfile.tsx
    │   │   ├── [x] SettingsScreen.tsx
    │   │   ├── [x] TestScreen.tsx
    │   ├── 📂 [ ] services/
    │   ├── 📂 [x] store/ # Zustand para gerenciamento de estado
    │   │   ├── [x] useSettingsStore.ts
    │   │   ├── [ ] useAuthStore.ts
    │   │   ├── [ ] useThemeStore.ts
    │   │   ├── [ ] useGameStore.ts
    │   │   └── [ ] index.ts
    │   ├── 📂 [x] theme/ # Tema (cores, fontes)
    │   │   ├── 📂 [x] components
    │   │   │   ├── [x] Header.styles.ts
    │   │   │   └── [x] SandwichMenu.styles.ts
    │   │   ├── 📂 [x] global
    │   │   │   ├── [x] globalStyles.ts
    │   │   │   ├── [x] theme.ts
    │   │   │   └── [x] typography.ts
    │   │   ├── [ ] spacing.ts
    │   │   └── [x] index.ts
    │   ├── 📂 [ ] utils/ # Utilitários e helpers
    │   │   ├── [ ] formatDate.ts
    │   │   ├── [ ] storage.ts
    │   │   ├── [ ] validators.ts
    │   │   └── [ ] constants.ts    
    │   ├── [x] App.tsx # Arquivo principal
    │   ├── [ ] types.ts # Definição de tipos
    │   └── [ ] env.ts # Configuração de variáveis de ambiente
    ├── 📂 [x] tests/ # Testes unitários e de integração
    │   ├── 📂 [ ] components/
    │   ├── 📂 [ ] hooks/
    │   ├── 📂 [x] screens/
    │   │   └── [x] SettingsScreen.test.tsx
    │   ├── 📂 [x] store/
    │   │   └── [x] useSettingsStore.test.ts
    │   └── 📂 [ ] api/
    ├── [x] .gitignore
    ├── [x] .editconfig
    ├── [x] .prettierignore
    ├── [x] app.json # Configuração do Expo
    ├── [x] babel.config.js # Configuração do Babel
    ├── [x] index.ts # Ponto de entrada
    ├── [x] jest.config.js
    ├── [x] package-lock.json
    ├── [x] package.json
    ├── [x] README.md
    └── [x] tsconfig.json # Configuração do TypeScript

A árvore de pastas acima contém nome geréricos de arquivos quando se trata dos arquivos ainda não criados (iniciados com "° "). Esta organização de pastas foi planejada pensando na:

- Organização: Cada pasta tem um propósito claro, facilitando a localização de componentes e funcionalidades específicas.

- Escalabilidade: A estrutura permite que o projeto cresça sem se tornar desorganizado.

- Manutenção: A organização facilita a manutenção e atualização do código.

- Colaboração: Outros desenvolvedores podem rapidamente entender a estrutura do projeto.

[← Voltar (Índice)](../index.md)
