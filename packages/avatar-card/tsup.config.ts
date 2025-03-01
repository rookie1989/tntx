import { defineConfig } from 'tsup';
import { lessLoader } from 'esbuild-plugin-less';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  external: ['react', 'react-dom'],
  dts: true,
  splitting: false, // 禁用代码分割
  sourcemap: false,
  clean: true,
  injectStyle: true,
  esbuildPlugins: [lessLoader()],
  loader: {
    '.svg': 'dataurl',
  },
});
