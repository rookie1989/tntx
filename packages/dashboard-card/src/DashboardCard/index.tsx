import React, { FC, ComponentProps } from 'react';
import cc from 'classnames';
import { Tooltip } from 'antd';
import './index.less';

export interface TextProps extends Omit<ComponentProps<'div'>, 'onClick'> {
  title?: string;
  tipText?: string;
  count?: number | string;
  countPrefix?: string;
  countUnit?: string;
  countColor?: string;
  icon?: React.ReactNode;
  color?: string;
  iconShape?: 'round' | 'circle';
  theme?: 'default' | 's1' | 's2' | 's3' | 's4';
  bgGradient?: boolean;
}

export const DashboardCard: FC<TextProps> = ({
  className,
  title,
  tipText,
  count,
  countPrefix,
  countUnit,
  countColor,
  icon,
  color = '#59a6e5',
  style,
  theme = 'default',
  iconShape = 'round',
  bgGradient = false,
  ...rest
}) => {
  const cardTheme = {
    'dashboard-theme-default': theme === 'default',
    'dashboard-theme-s1': theme === 's1',
    'dashboard-theme-s2': theme === 's2',
    'dashboard-theme-s3': theme === 's3',
    'dashboard-theme-s4': theme === 's4',
  };

  const hexToRgba = (hexColor: string, alpha: number = 0.5) => {
    // 移除 # 号并提取颜色值
    const hex = hexColor.replace('#', '');

    // 将颜色值拆分成 R、G、B 三个部分
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // 转换为 RGBA 格式并添加透明度
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    return rgba;
  };

  let iconColor = color;
  let bgColor = color;
  // iconStyle
  const iconStyle: any = { background: 'inherit' };
  if (theme === 'default' || theme === 's2') {
    iconStyle.background = iconColor;
    bgColor = hexToRgba(iconColor, 0.15);
  }
  if (theme === 's3' || theme === 's4') {
    iconStyle.background = hexToRgba(color, 0.2);
    iconStyle.color = iconColor;

    bgColor = hexToRgba(color, 0.15);
  }
  // bgColor
  const bgStyle: any = { background: bgColor };
  if (theme === 's4') {
    bgStyle.background = hexToRgba(color, 0.2);
    bgStyle.borderLeft = `4px solid ${color}`;
  }
  if (theme !== 's4' && bgGradient) {
    const rgbaColor = hexToRgba(color, 0.8);
    delete bgStyle.background;
    bgStyle.backgroundImage = `linear-gradient(to right, ${rgbaColor} ,${bgColor})`;
  }

  let combinedClassName = 'tntx-dashboard-card';
  if (className) {
    combinedClassName += ` ${className}`;
  }
  if (cardTheme) {
    combinedClassName += ` ${Object.values(cardTheme).join(' ')}`;
  }

  return (
    <div className={cc(['tntx-dashboard-card', className, { ...cardTheme }])} {...rest}>
      {(theme === 'default' || theme === 's1' || theme === 's3' || theme === 's4') && (
        <div className="main-wrap" style={bgStyle}>
          {icon && (
            <div className={`icon-wrap ${iconShape}`} style={iconStyle}>
              {icon}
              {theme === 's3' && <span className="line"></span>}
            </div>
          )}
          <div className="content-wrap">
            <div className="title">
              <h4>{title}</h4>
              {/* {tipText && (
                <Tooltip title={tipText}>
                  <Icon type="info-circle" theme="filled" />
                </Tooltip>
              )} */}
            </div>
            <div className="data">
              <span className="num">{count}</span>
            </div>
          </div>
        </div>
      )}
      {theme === 's2' && (
        <div className="main-wrap" style={bgStyle}>
          <div className="title">
            <h4>{title}</h4>
            {/* {tipText && (
              <Tooltip title={tipText}>
                <Icon type="info-circle" theme="filled" />
              </Tooltip>
            )} */}
          </div>
          <div className="content-wrap">
            {icon && (
              <div className={`icon-wrap ${iconShape}`} style={iconStyle}>
                {icon}
              </div>
            )}
            <div className="data">
              <span className="num">{count}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DashboardCard.displayName = 'DashboardCard';

export default DashboardCard;
