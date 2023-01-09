import { defineConfig, presetIcons, presetUno, presetAttributify } from 'unocss';

export const theme = {
  colors: {
    primary: 'var(--adm-color-primary)',
  },
};

export const unocssPresets = [presetUno(), presetAttributify(), presetIcons()];

export default defineConfig({
  presets: unocssPresets,
  rules: [],
  theme: theme,
});
