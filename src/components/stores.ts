import { TestStore } from './stores/settings.ts';
import { createContext } from 'react';

export const stores = Object.freeze({
  test: new TestStore(),
});

export const storesContext = createContext(stores);
export const StoresProvider = storesContext.Provider;
