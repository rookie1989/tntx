import PackageMeta from './index';

export default {
  title: 'PackageMeta',
  component: PackageMeta,
};

export const Default = () => {
  return (
    <PackageMeta
      title="Disk资源管理"
      description="一个小而美的资源管理UI组件，通过简单的配置就有好的用户体验，上手简单，搭配灵活，支持folder文件夹、file文件、link链接；"
      author={{
        nickname: '露娜',
        avatar: <img src="https://avatars.githubusercontent.com/u/10259607?v=4" />,
      }}
      link={{
        url: 'https://github.com/moco-ui/moco-ui',
        type: 'design',
      }}
      extra={{
        npm: 'https://www.npmjs.com/package/disk-resource-manager',
        github: 'https://github.com/rookie-ninja/disk-resource-manager',
        gitlab: 'https://gitlab.com/rookie-ninja/disk-resource-manager',
        // gitee: "https://gitee.com/rookie-ninja/disk-resource-manager",
        // otherLink: "https://github.com/rookie-ninja/disk-resource-manager",
        maturity: 85,
        useList: [
          {
            name: '天策',
            version: '1.0.0',
          },
        ],
      }}
    />
  );
};
