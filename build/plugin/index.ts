import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import purgeIcons from 'vite-plugin-purge-icons';
import { configSvgIconsPlugin } from './svgSprite';
import { configHtmlPlugin } from './html';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';
import { configPwaConfig } from './pwa';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),
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
