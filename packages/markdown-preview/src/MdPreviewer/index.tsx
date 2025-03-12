import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css';
import './github-markdown-light.css';

const MdPreviewer: React.FC<{ md: string }> = ({ md }) => {
  return (
    <div className="tntx-markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // 添加 remark-gfm 插件
        rehypePlugins={[rehypeHighlight, rehypeRaw]} // 代码高亮插件和 raw HTML 插件
      >
        {md}
      </ReactMarkdown>
    </div>
  );
};

export default MdPreviewer;
