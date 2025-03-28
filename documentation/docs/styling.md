### [← Voltar (Índice)](../index.md)

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
- **daltonic** (tema adaptado para daltônicos)

Adicionar ou modificar cores deve ser feito exclusivamente nesse arquivo.

### 2. `typography.ts`

É a fonte da verdade para as fontes (fontFamily) e tamanhos de texto. Contém:

- Fontes disponíveis (`arial`, `times`, `openSans`, etc.).
- Tamanho padrão (`body`) que serve como base.
- Multiplicadores para título e subtítulo.
- Limites máximo e mínimo para o multiplicador de acessibilidade.

Alterar fontes ou tamanhos deve ocorrer apenas nesse arquivo.

### 3. `globalStyles.ts`

Contém estilos fixos, reutilizáveis e independentes das escolhas dinâmicas feitas pelo usuário, tais como:

- padding
- margens
- flex
- alinhamentos

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

### [← Voltar (Índice)](../index.md)
