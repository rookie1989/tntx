import { MdPreviewer, CodePreviewer } from './index';
import { Space, Button } from 'antd';

export default {
  title: 'CodePreviewer',
  component: CodePreviewer,
};

export const Default = () => {
  return (
    <div>
      <div>
        <MdPreviewer md="# hello" />
      </div>
      <div>
        <CodePreviewer code="## hi">
          <Button type="primary">按钮</Button>
        </CodePreviewer>
      </div>
    </div>
  );
};
