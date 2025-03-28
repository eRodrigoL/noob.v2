// Definição básica dos tamanhos e fontes usadas na aplicação
const typography = {
  // Definição das famílias de fontes disponíveis
  fonts: {
    arial: "Arial", // Fonte Arial
    times: "Times New Roman", // Fonte Times New Roman
    openSans: "Open Sans", // Fonte Open Sans
  },

  // Definição dos tamanhos de texto e multiplicadores
  sizes: {
    body: 16, // Tamanho base do corpo do texto em pixels
    subtitleMultiplier: 1.2, // Multiplicador para o tamanho do subtítulo (20% maior que o corpo)
    titleMultiplier: 1.5, // Multiplicador para o tamanho do título (50% maior que o corpo)
    min: 12, // Tamanho mínimo permitido para textos em pixels
    max: 24, // Tamanho máximo permitido para textos em pixels
  },
};

// Exporta o objeto typography para ser usado em outros arquivos
export default typography;
