import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import 'react-tooltip/dist/react-tooltip.css';
import './App.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
