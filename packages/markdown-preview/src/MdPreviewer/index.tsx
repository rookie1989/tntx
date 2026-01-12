import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import { createRoot } from 'react-dom/client';
import 'highlight.js/styles/github.css';
import './github-markdown-light.css';

const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <button className="mac-copy-button" onClick={handleCopy}>
      <span className="mac-copy-icon">{copied ? <CheckOutlined /> : <CopyOutlined />}</span>
      <span className="mac-copy-text">{copied ? '已复制' : '复制'}</span>
    </button>
  );
};

const MdPreviewer: React.FC<{ md: string }> = ({ md }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const preElements = containerRef.current.querySelectorAll('pre:not(.mac-code-block pre)');

    preElements.forEach((pre) => {
      // 跳过已经处理过的代码块
      if (pre.closest('.mac-code-block')) {
        return;
      }

      const codeElement = pre.querySelector('code');
      const codeText = codeElement?.textContent || '';

      // 创建 Mac 风格包装器
      const wrapper = document.createElement('div');
      wrapper.className = 'mac-code-block';

      // 创建标题栏
      const header = document.createElement('div');
      header.className = 'mac-code-header';

      // 创建控制按钮
      const controls = document.createElement('div');
      controls.className = 'mac-code-controls';
      controls.innerHTML = `
        <span class="mac-control mac-control-close"></span>
        <span class="mac-control mac-control-minimize"></span>
        <span class="mac-control mac-control-maximize"></span>
      `;

      // 创建标题
      const title = document.createElement('div');
      title.className = 'mac-code-title';
      title.textContent = '';

      // 创建操作按钮容器
      const actions = document.createElement('div');
      actions.className = 'mac-code-actions';

      // 创建复制按钮容器
      const copyButtonContainer = document.createElement('div');
      const root = createRoot(copyButtonContainer);
      root.render(<CopyButton code={codeText} />);
      actions.appendChild(copyButtonContainer);

      header.appendChild(controls);
      header.appendChild(title);
      header.appendChild(actions);

      wrapper.appendChild(header);

      // 将 pre 元素移动到包装器中
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    });
  }, [md]);

  return (
    <div className="tntx-markdown-body" ref={containerRef}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
        {md}
      </ReactMarkdown>
    </div>
  );
};

export default MdPreviewer;
