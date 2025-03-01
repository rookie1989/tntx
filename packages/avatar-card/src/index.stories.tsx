import AvatarCard from './index';
import { Space, message } from 'antd';

export default {
  title: 'AvatarCard',
  component: AvatarCard,
};

export const Default = () => {
  const user = {
    id: 10,
    account: 'xiaoming',
    empStatus: 1,
    nickname: '王小明',
  };

  const cardConfig = [
    {
      label: '部门',
      value: '企业技术部-PaaS-UED',
    },
    {
      label: '邮箱',
      value: 'xiaoming@qq.com',
    },
  ];

  return (
    <AvatarCard
      {...user}
      cardConfig={cardConfig}
      onClick={() => {
        message.info('跳转链接');
      }}
    />
  );
};
