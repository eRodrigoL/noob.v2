const AsyncStorageMock = {
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
  multiRemove: jest.fn(() => Promise.resolve()), // necessário para restoreDefaults()
};

export default AsyncStorageMock;
