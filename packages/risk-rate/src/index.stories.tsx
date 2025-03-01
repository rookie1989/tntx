import RiskRate from './index';
import { Space } from 'antd';

export default {
  title: 'RiskRate',
  component: RiskRate,
};

export const Default = () => {
  return (
    <Space>
      <RiskRate color="#f00" text="安全等级" count={98} width={120} />
      <RiskRate status="success" text="风险评估" count={98} />
    </Space>
  );
};
