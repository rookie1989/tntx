import { MdPreviewer, CodePreviewer } from './index';
import { Space, Button } from 'antd';

export default {
  title: 'MarkdownPreview',
  component: MdPreviewer,
};

export const MdPreviewerDefault = () => {
  const markdown = `# Markdown Previewer

这是一个 **Markdown** 预览组件示例。

## 功能特性

- 支持标准的 Markdown 语法
- 支持 GitHub Flavored Markdown (GFM)
- 代码高亮显示
- 支持 HTML 标签

### 代码示例

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

### 列表

1. 第一项
2. 第二项
3. 第三项

### 引用

> 这是一段引用文本

### 链接和图片

[链接示例](https://example.com)

### 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
`;

  return <MdPreviewer md={markdown} />;
};

export const CodePreviewerDefault = () => {
  return (
    <CodePreviewer code="## hi">
      <Button type="primary">按钮</Button>
    </CodePreviewer>
  );
};

export const Combined = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <h3>Markdown Previewer</h3>
        <MdPreviewer md="# hello\n\n这是一个简单的 Markdown 预览示例。" />
      </div>
      <div>
        <h3>Code Previewer</h3>
        <CodePreviewer code="## hi">
          <Button type="primary">按钮</Button>
        </CodePreviewer>
      </div>
    </Space>
  );
};
