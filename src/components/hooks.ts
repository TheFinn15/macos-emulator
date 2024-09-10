import React from 'react';
import { stores, storesContext } from './stores';

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): (typeof stores)[T] => React.useContext(storesContext)[store];

export const useDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
