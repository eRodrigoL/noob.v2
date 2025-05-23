<!-- markdownlint-disable-next-line MD041 -->
[← Voltar (Índice)](../index.md)

# Documentação técnica da estilização

Este documento descreve detalhadamente a estratégia de estilização adotada até aqui na aplicação. O foco atual é na implementação técnica da estilização, enquanto a criação visual das telas e definição precisa da aparência será abordada em etapas futuras.

## 📌 Objetivo da estilização

Oferecer ao usuário uma experiência visual personalizada com alterações imediatas conforme escolhas feitas em relação a:

- **Fonte** (tipo de letra);
- **Tamanho da fonte** (acessibilidade);
- **Tema de cores** (Claro, Escuro e Daltônico).

## 📂 Estrutura e responsabilidades

A estilização está organizada em três arquivos principais dentro da pasta `src/theme`:

- `theme.ts`
- `typography.ts`
- `globalStyles.ts`

### 1. `theme.ts`

Este arquivo é a "fonte da verdade" para as cores. Define as paletas de cores disponíveis:

- **light** (tema claro padrão)
- **dark** (tema escuro)
- **daltonic** (tema que evita tons vermelhos-puros e verdes-puros, que são os mais críticos para usuários com protanopia/deuteranopia)

### 2. `typography.ts`

É a fonte da verdade para as fontes (fontFamily) e tamanhos de texto. Contém:

- Fontes disponíveis (`arial`, `times`, `openSans`, etc.).
- Tamanho padrão (`body`) que serve como base.
- Multiplicadores para título e subtítulo.
- Limites máximo e mínimo para o multiplicador de acessibilidade.

### 3. `globalStyles.ts`

Contém estilos fixos, reutilizáveis e independentes das escolhas dinâmicas feitas pelo usuário, tais como:

- padding
- margens
- flex
- alinhamentos

## ⚙️ Como modificar ou expandir os estilos da aplicação

### 🎨 Paletas de Cores (`theme.ts`)

- **Adicionar uma nova cor em uma paleta existente:**

  ```ts
  light: {
    background: "#FFFFFF",
    text: "#000000",
    novaCor: "#ABCDEF", // nova cor adicionada
  }
  ```

- **Criar uma nova paleta de cores:**

  ```ts
  sepia: {
    background: "#F4ECD8",
    text: "#5B4636",
    button: "#CBB994",
  }
  ```

  > Após criar a nova paleta, adicione-a no SelectList da tela de configurações e no tipo aceito pelo Zustand.

### 🔠 Fontes (`typography.ts` + `assets/fonts` + `App.tsx`)

- **Adicionar nova fonte:**

  1. Coloque o arquivo `.ttf` em `assets/fonts/` com nome sem espaços ou hifens (ex: `TimesNewRoman.ttf`).
  2. No `App.tsx`, registre a fonte:

     ```ts
     useFonts({
       TimesNewRoman: require("../assets/fonts/TimesNewRoman.ttf"),
     });
     ```

  3. Em `typography.ts`, adicione:

     ```ts
     fonts: {
       timesNewRoman: "TimesNewRoman";
     }
     ```

  4. Adicione a nova fonte na lista de opções do SelectList em `SettingsScreen.tsx`.

### 🔡 Tamanhos de Fonte (`typography.ts`)

- **Modificar o tamanho base e os limites:**

  ```ts
  sizes: {
    body: 16, // tamanho base da fonte padrão
    subtitleMultiplier: 1.2, // título secundário
    titleMultiplier: 1.5,    // título principal
    min: 12,                 // limite mínimo do multiplicador
    max: 24                  // limite máximo do multiplicador
  }
  ```

### 🧱 Estilos Fixos (`globalStyles.ts`)

- **Adicionar bordas, sombras e espaçamentos reutilizáveis:**

  ```ts
  button: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  ```

  > Use globalStyles apenas para estilos estáticos, que não dependem do tema, fonte ou tamanho escolhidos pelo usuário.

## 🌐 Gerenciamento dinâmico dos estilos

Para que a aplicação reflita as escolhas do usuário em tempo real, usamos uma combinação de Zustand (estado global) e um hook personalizado (`useTheme`).

### 📌 Zustand (`useSettingsStore.ts`)

- Armazena globalmente as preferências do usuário (fonte, tamanho e paleta).
- Atualiza e persiste essas preferências utilizando `AsyncStorage`.
- Garante que as escolhas sejam lembradas nas próximas aberturas da aplicação.

### 📌 Hook personalizado (`useTheme.ts`)

Este hook é responsável por:

- Consumir os estados globais armazenados no Zustand.
- Combinar os estados globais com as definições fixas dos arquivos `theme.ts` e `typography.ts`.
- Retornar diretamente para as telas a paleta correta, fontes e tamanhos atualizados automaticamente.

### 🔄 Ciclo lógico

1. Usuário faz uma escolha na tela de configurações (`SettingsScreen.tsx`).
2. Essa escolha altera estados locais para visualização imediata.
3. Ao confirmar, essas escolhas são enviadas ao Zustand e persistidas no AsyncStorage.
4. Zustand atualiza os estados globais.
5. O hook personalizado (`useTheme`) reconhece imediatamente essas mudanças globais.
6. Todas as telas que consomem esse hook (`useTheme`) atualizam seus estilos instantaneamente.

### 🎯 Pré-visualização Imediata na tela de Configurações

- As escolhas feitas na tela `SettingsScreen.tsx` têm efeito visual imediato, permitindo ao usuário experimentar as mudanças antes de confirmá-las.
- Isso ocorre por meio da utilização direta das variáveis locais que controlam fontes, tamanhos e cores, antes de persistir no Zustand.

## 📚 Próximas etapas previstas

- Criar e aplicar telas finais seguindo essa abordagem estruturada.
- Definir aparência definitiva das telas, componentes específicos, espaçamento e refinamento visual.
- Trocar futuramente o AsyncStorage por chamadas API.

[← Voltar (Índice)](../index.md)
