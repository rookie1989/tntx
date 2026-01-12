import { FC, ComponentProps } from 'react';
import cc from 'classnames';
// import "./index.less";
import './index.css';

type StatusType = 'default' | 'success' | 'error' | 'warning' | 'processing';
export interface RiskRateProps extends Omit<ComponentProps<'div'>, 'onClick'> {
  status?: StatusType;
  color?: string;
  count?: number | string;
  text?: string;
  width?: string | number;
}

export const RiskRate: FC<RiskRateProps> = ({
  status = 'default',
  color,
  text,
  width,
  count = 0,
  className,
}) => {
  const statusMap: Record<StatusType, string> = {
    success: '#52c41a',
    error: '#ff4d4f',
    default: '#d9d9d9',
    processing: '#1890ff',
    warning: '#faad14',
  };

  if (!color && ['success', 'error', 'default', 'processing', 'warning'].indexOf(status) > -1) {
    color = statusMap[status];
  }

  return (
    <div
      className={cc('tntx-risk-rate', className)}
      style={{
        width: width || '80px',
        borderColor: color,
      }}
    >
      <span
        className="tntx-risk-rate-score"
        style={{
          backgroundColor: color,
        }}
      >
        {count}
      </span>
      <span
        className="tntx-risk-rate-text"
        style={{
          color: color,
        }}
      >
        {text || '-'}
      </span>
    </div>
  );
};

export default RiskRate;
