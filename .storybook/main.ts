import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(js|jsx|ts|tsx)", // 加载 packages 目录下的 stories
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // 添加 ts-loader 处理 TypeScript 文件
    config.module?.rules?.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    // 确保 Webpack 解析 TypeScript 文件
    if (config.resolve) {
      config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx"];
    }

    return config;
  },
};

export default config;
