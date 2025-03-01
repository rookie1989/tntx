# 风险评估结果

## 安装

```bash
npm i @tntx/risk-rate
#or
yarn add @tntx/risk-rate
#or
pnpm add @tntx/risk-rate
```

## 使用

```jsx
import React from "react";
import RiskRate from "@tntx/risk-rate";

export default () => {
  return <RiskRate color="#07C790" text="通过" count={67} width={100} />;
};
```

### API

| 参数  | 说明                 | 类型   | 是否必须 | 默认值  |
| ----- | -------------------- | ------ | -------- | ------- |
| width | 水波球宽度           | string | 否       | 200px   |
| color | 水波球颜色(十六进制) | string | 否       | #07C790 |
| text  | 评估结果文字         | string | 是       |
| count | 评估结果分数         | Number | 否       | 0       |
