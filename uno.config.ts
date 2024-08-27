// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  safelist: [
    'i-mdi:apple',
    'i-mdi:apple-keyboard-shift',
    'i-mdi:apple-keyboard-control',
    'i-mdi:apple-keyboard-command',
    'i-mynaui:delete',
    'i-mynaui:globe',
    'i-mdi:slash-forward',
    'i-mdi:apple-keyboard-option',
    'i-mdi:cloud-outline',
    'i-mdi:clock-time-nine-outline',
    'i-mdi:file-outline',
    'i-mdi:folder-outline',
    'i-mdi:home-variant-outline',
    'i-mdi:computer',
    'i-mdi:radio-tower',
    'i-mdi:internet',
    'i-mdi:folder-shared-outline',
    'i-simple-icons:appstore',
    'i-mdi:hammer-screwdriver',
    ...'0123456789'.split('').map((num) => `i-mdi:number-${num}`),
    ...'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .map((char) => `i-mdi:alpha-${char}-box-outline`),
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
