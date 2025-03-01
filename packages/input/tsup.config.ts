import { defineConfig } from "tsup";
import { lessLoader } from "esbuild-plugin-less";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  external: ["react", "react-dom"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [lessLoader()],
});
