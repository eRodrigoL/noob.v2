import { useSettingsStore } from "@/store/useSettingsStore";

describe("useSettingsStore", () => {
  beforeEach(() => {
    useSettingsStore.setState({
      fontFamily: "arial",
      colorScheme: "light",
      fontSizeMultiplier: 1,
    });
  });

  it("should set font family correctly", () => {
    useSettingsStore.getState().setFontFamily("times");
    expect(useSettingsStore.getState().fontFamily).toBe("times");
  });

  it("should set color scheme correctly", () => {
    useSettingsStore.getState().setColorScheme("dark");
    expect(useSettingsStore.getState().colorScheme).toBe("dark");
  });

  it("should increase font size correctly", () => {
    useSettingsStore.getState().increaseFontSize();
    expect(useSettingsStore.getState().fontSizeMultiplier).toBeCloseTo(1.1);
  });

  it("should decrease font size correctly", () => {
    useSettingsStore.setState({ fontSizeMultiplier: 1.1 });
    useSettingsStore.getState().decreaseFontSize();
    expect(useSettingsStore.getState().fontSizeMultiplier).toBeCloseTo(1.0);
  });

  it("should restore defaults correctly", () => {
    useSettingsStore.setState({
      fontFamily: "times",
      colorScheme: "dark",
      fontSizeMultiplier: 1.2,
    });
    useSettingsStore.getState().restoreDefaults();
    expect(useSettingsStore.getState().fontFamily).toBe("Arial");
    expect(useSettingsStore.getState().colorScheme).toBe("light");
    expect(useSettingsStore.getState().fontSizeMultiplier).toBe(1);
  });
});
