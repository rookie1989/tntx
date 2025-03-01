import RiskRate from './index';
import { Space } from 'antd';

export default {
  title: 'RiskRate',
  component: RiskRate,
};

export const Default = () => {
  return (
    <Space>
      <RiskRate status="processing" text="安全等级" count={98} />
      <RiskRate status="success" text="风险评估" count={98} />
    </Space>
  );
};
