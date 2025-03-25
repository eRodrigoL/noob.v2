# Arquitetura De Pastas

A estrutura do projeto é dividida em pastas que representam diferentes categorias de funcionalidades e recursos. Essa organização ajuda a manter o projeto escalável e facilita a compreensão do código por outros desenvolvedores.

    (° = ainda não criado)
    📦 noob.v2/
    ├── 📂 [ ] assets/ # Imagens, ícones, fontes, etc.
    │   ├── 📂 [ ] fonts/ # arquivos de fontes
    │   │   ├── [ ] Arial.ttf
    │   │   ├── [ ] Open Sans.ttf
    │   │   ├── [ ] SpaceMono-Regular.ttf
    │   │   └── [ ] Times New Roman.ttf
    │   ├── 📂 [ ] images/ # arquivos de fontes
    │   │   ├── [ ] splash.png
    │   │   ├── [ ] SpaceMono-Regular.ttf
    │   │   └── [ ] Times New Roman.ttf
    │   │   ├── 📂 [ ] icons/
    │   │   │   └── [ ] icon.png
    │   │   ├── 📂 [ ] lottie/
    ├── 📂 [x] docs/ # documentação.
    │   ├── [x] dependenciesList.md
    │   └── [x] folderTree.md
    ├── 📂 [ ] src/
    │   ├── 📂 [ ] api/ # Comunicação com APIs
    │   │   ├── [ ] apiClient.ts
    │   │   ├── [ ] auth.ts
    │   │   ├── [ ] users.ts
    │   │   └── [ ] games.ts
    │   ├── 📂 [ ] components/ # Componentes reutilizáveis
    │   │   ├── [ ] Header.tsx
    │   │   ├── [ ] Button.tsx
    │   │   ├── [ ] Card.tsx
    │   │   ├── [ ] Header.tsx
    │   │   ├── [ ] Input.tsx
    │   │   ├── [ ] Loading.tsx
    │   │   ├── [ ] Modal.tsx
    │   │   ├── [ ] ParallaxProfile.tsx
    │   │   ├── [ ] SandwichMenu.tsx
    │   │   └── [ ] ThemeToggle.tsx
    │   ├── 📂 [ ] hooks/ # Hooks personalizados
    │   │   ├── [ ] useAuth.ts
    │   │   ├── [ ] useGames.ts
    │   │   ├── [ ] useFetch.ts
    │   │   └── [ ] useTheme.ts
    │   ├── 📂 [ ] navigation/ # Navegação (React Navigation)
    │   │   ├── [ ] RootNavigator.tsx
    │   │   ├── [ ] AppTabs.tsx
    │   │   ├── [ ] AuthStack.tsx
    │   │   └── [ ] linking.ts
    │   ├── 📂 [ ] screens/ # Telas da aplicação
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
    │   │   ├── [ ] SettingsScreen.tsx
    │   │   ├── [ ] TestScreen.tsx
    │   ├── 📂 [ ] services/
    │   ├── 📂 [ ] store/ # Zustand para gerenciamento de estado
    │   │   ├── [ ] useSettingsStore.ts
    │   │   ├── [ ] useAuthStore.ts
    │   │   ├── [ ] useThemeStore.ts
    │   │   ├── [ ] useGameStore.ts
    │   │   └── [ ] index.ts
    ├── 📂 [ ] tests/ # Testes unitários e de integração
    │   │   ├── 📂 [ ] components/
    │   │   ├── 📂 [ ] hooks/
    │   │   ├── 📂 [ ] screens/
    │   │   └── 📂 [ ] api/
    │   ├── 📂 [ ] theme/ # Tema (cores, fontes)
    │   │   ├── [ ] theme.ts
    │   │   ├── [ ] typography.ts
    │   │   ├── [ ] spacing.ts
    │   │   └── [ ] index.ts
    │   ├── 📂 [ ] utils/ # Utilitários e helpers
    │   │   ├── [ ] formatDate.ts
    │   │   ├── [ ] storage.ts
    │   │   ├── [ ] validators.ts
    │   │   └── [ ] constants.ts
    │   ├── [ ] types.ts # Definição de tipos
    │   └── [ ] env.ts # Configuração de variáveis de ambiente
    ├── [x] .gitignore
    ├── [x] .editconfig (funciona com a extensão "EditorConfig for VS Code")
    ├── [x] .prettierignore
    ├── [x] app.json # Configuração do Expo
    ├── [x] App.tsx # Arquivo principal
    ├── [x] babel.config.js # Configuração do Babel
    ├── [x] index.ts # Ponto de entrada
    ├── [x] package.json
    ├── [x] README.md
    └── [x] tsconfig.json # Configuração do TypeScript

A árvore de pastas acima contém nome geréricos de arquivos quando se trata dos arquivos ainda não criados (iniciados com "° "). Esta organização de pastas foi planejada pensando na:

- Organização: Cada pasta tem um propósito claro, facilitando a localização de componentes e funcionalidades específicas.

- Escalabilidade: A estrutura permite que o projeto cresça sem se tornar desorganizado.

- Manutenção: A organização facilita a manutenção e atualização do código.

- Colaboração: Outros desenvolvedores podem rapidamente entender a estrutura do projeto.
