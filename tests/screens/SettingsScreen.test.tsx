import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SettingsScreen from "@/screens/SettingsScreen";
import { useSettingsStore } from "@/store/useSettingsStore";

// 🔁 Mock de navegação necessário para simular o comportamento do botão "Voltar"
const navigation = { goBack: jest.fn() };
const route = { params: {} }; // Obrigatório por causa do tipo NativeStackScreenProps

describe("SettingsScreen", () => {
  beforeEach(() => {
    // 🧼 Antes de cada teste, definimos o estado do store com valores iniciais e funções mockadas
    useSettingsStore.setState({
      fontFamily: "arial",
      colorScheme: "light",
      fontSizeMultiplier: 1,
      setFontFamily: jest.fn(),
      setColorScheme: jest.fn(),
      increaseFontSize: jest.fn(),
      decreaseFontSize: jest.fn(),
      restoreDefaults: jest.fn(),
    });
  });

  it("deve renderizar corretamente os textos da tela", () => {
    // 🧪 Verifica se os textos principais da tela estão aparecendo
    const { getByText } = render(
      <SettingsScreen navigation={navigation as any} route={route as any} />,
    );

    expect(getByText("Fonte do corpo:")).toBeTruthy();
    expect(getByText("Tamanho da fonte:")).toBeTruthy();
    expect(getByText("Tema de cores:")).toBeTruthy();
    expect(getByText("Confirmar mudanças")).toBeTruthy();
    expect(getByText("Restaurar padrão")).toBeTruthy();
    expect(getByText("Voltar")).toBeTruthy();
  });

  it("deve chamar increaseFontSize e decreaseFontSize ao tocar nos botões A+ e A-", () => {
    // 🔧 Cria mocks para verificar se as funções são chamadas
    const increaseMock = jest.fn();
    const decreaseMock = jest.fn();

    // 🧠 Atualiza as ações no Zustand com os mocks criados
    useSettingsStore.setState((state) => ({
      ...state,
      increaseFontSize: increaseMock,
      decreaseFontSize: decreaseMock,
    }));

    const { getByText } = render(
      <SettingsScreen navigation={navigation as any} route={route as any} />,
    );

    // 🔼 Simula clique no botão A+
    fireEvent.press(getByText("A+"));
    expect(increaseMock).toHaveBeenCalled();

    // 🔽 Simula clique no botão A-
    fireEvent.press(getByText("A-"));
    expect(decreaseMock).toHaveBeenCalled();
  });

  it("deve chamar restoreDefaults ao tocar em Restaurar padrão", () => {
    // 🔧 Cria mock para verificar se restoreDefaults é chamado
    const restoreMock = jest.fn();

    useSettingsStore.setState((state) => ({
      ...state,
      restoreDefaults: restoreMock,
    }));

    const { getByText } = render(
      <SettingsScreen navigation={navigation as any} route={route as any} />,
    );

    fireEvent.press(getByText("Restaurar padrão"));
    expect(restoreMock).toHaveBeenCalled();
  });

  it("deve chamar navigation.goBack ao tocar em Voltar", () => {
    const { getByText } = render(
      <SettingsScreen navigation={navigation as any} route={route as any} />,
    );

    fireEvent.press(getByText("Voltar"));
    expect(navigation.goBack).toHaveBeenCalled(); // 🔙 Verifica se navegação foi disparada
  });
});
