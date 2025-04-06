// Definição básica dos tamanhos e fontes usadas na aplicação
const typography = {
  // Definição das famílias de fontes disponíveis
  fonts: {
    arial: "Arial",
    roboto: "Roboto",
    times: "Times New Roman",
  },

  // Definição dos tamanhos de texto e multiplicadores
  sizes: {
    body: 16, // Tamanho base do corpo do texto em pixels
    subtitleMultiplier: 1.3, // Multiplicador para o tamanho do subtítulo (30% maior que o corpo)
    titleMultiplier: 1.6, // Multiplicador para o tamanho do título (60% maior que o corpo)
    min: 12, // Tamanho mínimo permitido para textos em pixels
    max: 24, // Tamanho máximo permitido para textos em pixels
  },
};

// Exporta o objeto typography para ser usado em outros arquivos
export default typography;
