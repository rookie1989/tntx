# TNTX 组件库

基于 React 的组件库，使用 pnpm workspace 管理的 monorepo 项目。

## 📋 目录

- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [新增组件](#新增组件)
- [修改组件](#修改组件)
- [预览和调试](#预览和调试)
- [构建组件](#构建组件)
- [发布组件](#发布组件)

## 🔧 环境要求

- Node.js >= 16
- pnpm >= 7

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

## ✨ 新增组件

### 1. 创建组件目录

在 `packages/` 目录下创建新的组件目录：

```bash
mkdir packages/my-component
cd packages/my-component
```

### 2. 初始化 package.json

创建 `package.json` 文件，参考以下模板：

```json
{
  "name": "@tntx/my-component-react",
  "version": "1.0.0",
  "type": "module",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "description": "组件描述",
  "scripts": {
    "build": "tsup"
  },
  "keywords": ["tnt", "tntd", "tntx", "my-component"],
  "repository": {
    "type": "git",
    "url": "https://github.com/rookie1989/tntx.git",
    "directory": "packages/my-component"
  },
  "license": "MIT",
  "files": ["dist"],
  "dependencies": {
    // 组件依赖
  },
  "peerDependencies": {
    "antd": ">=4.0.0",
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
```

### 3. 创建 tsup.config.ts

创建 `tsup.config.ts` 构建配置文件：

```typescript
import { defineConfig } from 'tsup';
import { lessLoader } from 'esbuild-plugin-less';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  external: ['react', 'react-dom'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  injectStyle: true,
  esbuildPlugins: [lessLoader()],
});
```

### 4. 创建 tsconfig.json

创建 `tsconfig.json` TypeScript 配置文件：

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

### 5. 创建组件文件结构

```
my-component/
├── src/
│   ├── index.tsx          # 组件入口文件
│   ├── index.stories.tsx # Storybook 故事文件
│   ├── index.less        # 样式文件（可选）
│   └── index.css         # CSS 文件（可选）
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

### 6. 编写组件代码

在 `src/index.tsx` 中编写组件：

```tsx
import React from 'react';
import './index.less';

export interface MyComponentProps {
  // 组件属性
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return <div className="my-component">My Component</div>;
};

export default MyComponent;
```

### 7. 创建 Storybook 故事

在 `src/index.stories.tsx` 中创建 Storybook 故事：

```tsx
import MyComponent from './index';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const Default = () => {
  return <MyComponent />;
};
```

## 📝 修改组件

### 1. 修改组件代码

直接编辑组件源文件（`src/` 目录下的文件）

### 2. 更新版本号

修改 `package.json` 中的 `version` 字段：

```json
{
  "version": "1.0.1" // 根据变更类型更新版本号
}
```

版本号遵循 [语义化版本](https://semver.org/)：

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 3. 重新构建

```bash
cd packages/my-component
pnpm build
```

## 👀 预览和调试

### 启动 Storybook

在项目根目录运行：

```bash
pnpm storybook
# 或
npm run storybook
# 或
yarn storybook
```

Storybook 会在 `http://localhost:6006` 启动。

### 添加新的 Story

在组件的 `src/index.stories.tsx` 文件中添加新的故事：

```tsx
export const CustomStory = () => {
  return <MyComponent customProp="value" />;
};
```

### 调试技巧

1. **实时预览**：修改代码后，Storybook 会自动热更新
2. **控制台调试**：在浏览器开发者工具中查看组件状态
3. **React DevTools**：使用 React DevTools 检查组件树和 props

## 🔨 构建组件

### 构建单个组件

```bash
cd packages/my-component
pnpm build
```

构建产物会输出到 `dist/` 目录：

- `dist/index.js` - 编译后的 JavaScript 文件
- `dist/index.d.ts` - TypeScript 类型定义文件

### 构建所有组件

```bash
# 在项目根目录
pnpm -r build
```

## 📦 发布组件

### 发布前准备

#### 1. 确保已登录 npm

```bash
npm whoami
```

如果未登录，执行：

```bash
npm login
```

#### 2. 配置 2FA 或访问令牌

npm 发布需要启用 2FA 或使用访问令牌：

**方式 A：启用 2FA（推荐）**

1. 访问：https://www.npmjs.com/settings/[你的用户名]/tfa
2. 启用 Two-Factor Authentication
3. 使用 Authenticator 应用扫描二维码
4. **重要**：保存恢复代码到安全位置

**方式 B：使用访问令牌**

1. 访问：https://www.npmjs.com/settings/[你的用户名]/tokens
2. 创建 "Granular Access Token"
3. 权限选择：`Publish packages`
4. 作用域选择：`@tntx` 或整个账户
5. 复制生成的令牌

#### 3. 检查发布权限

```bash
npm access list packages @tntx
```

确保你有对应包的 `read-write` 权限。

#### 4. 构建组件

```bash
cd packages/my-component
pnpm build
```

### 发布步骤

#### 1. 更新版本号

在 `package.json` 中更新版本号：

```json
{
  "version": "1.0.1"
}
```

#### 2. 检查构建产物

确保 `dist/` 目录包含最新构建：

```bash
ls -la dist/
```

#### 3. 执行发布

**如果启用了 2FA：**

```bash
cd packages/my-component
npm publish --access public --otp=你的6位验证码
```

从 Authenticator 应用获取 6 位验证码。

**如果使用访问令牌：**

```bash
# 方式 1: 使用环境变量
export NPM_TOKEN=你的令牌
cd packages/my-component
npm publish --access public

# 方式 2: 配置到 .npmrc
echo "//registry.npmjs.org/:_authToken=你的令牌" >> ~/.npmrc
cd packages/my-component
npm publish --access public
```

#### 4. 验证发布

发布成功后，访问：

```
https://www.npmjs.com/package/@tntx/my-component-react
```

### 发布检查清单

- [ ] 版本号已更新
- [ ] 组件已构建（`dist/` 目录存在）
- [ ] `package.json` 信息正确（名称、描述、仓库地址等）
- [ ] 已登录 npm
- [ ] 已配置 2FA 或访问令牌
- [ ] 有发布权限
- [ ] README.md 已更新（可选但推荐）

### 常见问题

#### 403 Forbidden - 需要 2FA

**错误信息：**

```
403 Forbidden - Two-factor authentication or granular access token with bypass 2fa enabled is required
```

**解决方案：**

- 启用 2FA 或使用访问令牌（见上方"发布前准备"）

#### EOTP - 需要验证码

**错误信息：**

```
This operation requires a one-time password from your authenticator
```

**解决方案：**

- 使用 `--otp=验证码` 参数发布
- 从 Authenticator 应用获取 6 位验证码

#### 版本已存在

**错误信息：**

```
You cannot publish over the previously published versions
```

**解决方案：**

- 更新 `package.json` 中的版本号

## 🛠️ 其他命令

### 清理缓存

```bash
pnpm clean
```

### 代码格式化

```bash
pnpm format
```

## 📚 相关资源

- [pnpm workspace 文档](https://pnpm.io/workspaces)
- [Storybook 文档](https://storybook.js.org/)
- [tsup 文档](https://tsup.egoist.dev/)
- [npm 发布指南](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
