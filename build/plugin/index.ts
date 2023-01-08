import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import purgeIcons from 'vite-plugin-purge-icons';
import Unocss from 'unocss/vite';
// import AutoImport from 'unplugin-auto-import/vite';
import { configSvgIconsPlugin } from './svgSprite';
import { configHtmlPlugin } from './html';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';
import { configPwaConfig } from './pwa';

import { presetUno, presetAttributify, presetIcons } from 'unocss';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),

    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      theme: {
        colors: {
          primary: 'var(--adm-color-primary)',
        },
      },
    }),

    // AutoImport({
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //   ],
    //   dts: './types/auto-imports.d.ts',
    // }),
  ];

  VITE_LEGACY && isBuild && vitePlugins.push(legacy());

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  vitePlugins.push(purgeIcons());

  vitePlugins.push(configVisualizerConfig());

  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    );

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv));
  }

  return vitePlugins;
}
