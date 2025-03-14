import React from 'react';
import { images } from './constant';

interface PopContentProps {
  sameAsChildren?: boolean;
  children: React.ReactNode;
  nickname?: string;
  cardConfig?: {
    label: string;
    value: string;
  }[];
  nameWritten: string;
  onClick?: () => void;
  currentColors: string[];
  colorIndex: number;
  colorBg?: any;
  empStatus?: number;
  theme?: string;
}

export default (props: any) => {
  const {
    sameAsChildren,
    children,
    nickname,
    cardConfig = [],
    nameWritten,
    onClick,
    currentColors,
    colorIndex,
    colorBg,
    empStatus,
    theme = 'default',
  } = props;

  let selectImages = images[theme] ? images[theme] : images['default'];

  return (
    <div
      className="popover-content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="popover-content-header">
        <div
          className="popover-content-header-wave"
          style={{
            backgroundImage: `url(${selectImages[colorIndex]})`,
            filter: empStatus === 2 ? 'grayscale(1)' : undefined,
          }}
        >
          <img src={selectImages[colorIndex]} />
        </div>
      </div>
      <div className="popover-content-info">
        <div
          className="avatar-card"
          style={{
            backgroundColor: currentColors[0],
            backgroundImage: colorBg,
            cursor: onClick ? 'pointer' : 'default',
          }}
          onClick={() => {
            onClick && onClick();
          }}
        >
          {!sameAsChildren && <span>{empStatus === 2 ? '离职' : nameWritten}</span>}
          {children && sameAsChildren ? (
            children
          ) : (
            <span>{empStatus === 2 ? '离职' : nameWritten}</span>
          )}
        </div>
        <h2>{nickname}</h2>
      </div>
      <div className="popover-content-body">
        <ul>
          {(cardConfig || []).map((item: any, index: number) => {
            return (
              <li key={index}>
                <label>{item.label}</label>
                <p>{item.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
