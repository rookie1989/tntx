# markdown 解析器

## Usage

### react-markdown-previewer

安装

```sh
npm install @tntx/markdown-preview-react
# or
yarn add @tntx/markdown-preview-react
```

使用

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CodePreviewer, MdPreviewer } from '@tntx/markdown-preview-react';

const titleMd = '# 这是h1标签';
const codeMd = '<button>测试</button>';

ReactDOM.render(
  <div>
    <MdPreviewer md={titleMd}></MdPreviewer>
    <CodePreviewer code={codeMd}>
      <button>测试</button>
    </CodePreviewer>
  </div>,
  document.getElementById('app'),
);
```

## License

MIT
