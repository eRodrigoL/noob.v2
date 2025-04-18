import axios from "axios";
import axiosRetry from "axios-retry";
import Constants from "expo-constants";

// Verifica a URL da API nas variáveis de ambiente
const baseURL = Constants.expoConfig?.extra?.API_BASE_URL;

if (!baseURL) {
  throw new Error("❌ A variável de ambiente API_BASE_URL não foi definida.");
}

// Cria instância Axios com base da API
const api = axios.create({
  baseURL,
  timeout: 10000, // tempo limite de resposta (10s)
});

// Aplica o retry automático
axiosRetry(api, {
  retries: 3, // tenta até 3 vezes
  retryDelay: (retryCount) => retryCount * 1000, // espera 1s, depois 2s, depois 3s
  retryCondition: (error) =>
    error.code === "ECONNABORTED" || error.response?.status! >= 500,
  // error.code === "ECONNABORTED" trata timeout
  // error.response?.status! >= 500 tenta acessar .status só se response existir
  // O ! diz ao TypeScript: “Se chegou até aqui, pode confiar que status existe.”
});

export default api;

/*
// Exemplo de importação
import api from "@/api/apiClient";

// Exemplo de requisição GET
const response = await api.get("usuarios");
*/
