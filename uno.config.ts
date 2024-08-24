// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  safelist: [
    'i-mdi:apple',
    'i-mdi:apple-keyboard-shift',
    'i-mdi:apple-keyboard-command',
    'i-mynaui:delete',
    'i-mdi:apple-keyboard-option',
    'i-mdi:alpha-h-box-outline',
    'i-mdi:alpha-q-box-outline',
  ],
  shortcuts: {
    disabled: 'opacity-50 select-none pointer-events-none',
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.5,
      extraProperties: {
        display: 'block',
      },
    }),
  ],
});
