import React, { useState, useEffect } from 'react';

import { Tooltip } from 'antd';

import { CopyOutlined, CodeOutlined } from '@ant-design/icons';
import cls from 'classnames';
import MdPreviewer from '../MdPreviewer';
import './index.css';

export interface IProps {
  showCode?: boolean;
  code: string;
  children?: React.ReactNode;
}

export default ({ showCode = false, code, children }: IProps) => {
  const [hasCopy, setHasCopy] = useState(false);
  const [showCodeState, setShowCodeState] = useState(showCode);

  useEffect(() => {
    setShowCodeState(showCode);
  }, [showCode]);

  const onClipSuccess = () => {
    setHasCopy(true);
  };

  const onClipLeave = () => {
    setTimeout(
      () => {
        setHasCopy(false);
      },

      300,
    );
  };

  return (
    <div className="tntx-code-preview">
      <div className="tntx-code-preview-component"> {children}</div>{' '}
      <div className="tntx-code-preview-operate">
        <div
          className="copy-wrapper"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code);
              onClipSuccess();
            } catch (err) {
              console.error('复制失败:', err);
            }
          }}
          onMouseLeave={onClipLeave}
        >
          <Tooltip title={hasCopy ? '已复制' : '复制到剪贴板'}>
            <CopyOutlined />
          </Tooltip>
        </div>
        <Tooltip title={showCodeState ? '隐藏代码' : '显示代码'}>
          <CodeOutlined onClick={() => setShowCodeState(!showCodeState)} />
        </Tooltip>
      </div>
      <div className="tntx-code-preview-code">
        <div
          className={cls({
            'code-content': true,
            'hide-code-content': !showCodeState,
          })}
        >
          <MdPreviewer md={code} />
        </div>
      </div>
    </div>
  );
};
