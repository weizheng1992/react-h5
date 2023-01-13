import { defineConfig, presetIcons, presetUno, presetAttributify } from 'unocss';

export const theme = {
  colors: {
    primary: 'var(--adm-color-primary)',
    text: 'var(--adm-color-text)',
    sed: 'var(--adm-color-text-secondary)',
    light: 'var(--adm-color-light)',
  },
};

export const unocssPresets = [presetUno(), presetAttributify(), presetIcons()];

export default defineConfig({
  presets: unocssPresets,
  rules: [
    [/^w-(\d+)$/, ([, d]: any) => ({ width: `${d / 4}rem` })],
    [/^h-(\d+)$/, ([, d]: any) => ({ height: `${d / 4}rem` })],
  ],
  theme: theme,
});
