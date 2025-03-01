import React from "react";
import DashboardCard from "./index";
import { message, Row, Col, Divider } from "antd";
import {
  AreaChartOutlined,
  DotChartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default {
  title: "DashboardCard",
  component: DashboardCard,
};

export const Default = () => {
  const list: any = [
    {
      title: "内容生成量",
      count: "5367",
      color: "#F78435",
      icon: <AreaChartOutlined />,
    },
    {
      title: "内容点击量",
      count: "123",
      color: "#6BCE6B",
      icon: <DotChartOutlined />,
    },
    {
      title: "内容曝光量",
      count: "5643",
      color: "#59a6e5",
      icon: <HeartOutlined />,
    },
    {
      title: "用户活跃数",
      count: "7779",
      color: "#ec7f7f",
      icon: <UserOutlined />,
    },
  ];
  return (
    <>
      <Divider>默认</Divider>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
      <Divider>主题一</Divider>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                theme="s1"
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
      <Divider>主题二</Divider>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                theme="s2"
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
      <Divider>主题三</Divider>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                theme="s3"
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
      <Divider>主题四</Divider>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                theme="s4"
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
