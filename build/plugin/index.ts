import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import purgeIcons from 'vite-plugin-purge-icons';
import Unocss from 'unocss/vite';
import topLevelAwait from 'vite-plugin-top-level-await';
// import AutoImport from 'unplugin-auto-import/vite';
import { configSvgIconsPlugin } from './svgSprite';
import { configHtmlPlugin } from './html';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';
import { configPwaConfig } from './pwa';
import uncossConfig from '../../unocss.config';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),

    Unocss(uncossConfig),

    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
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
