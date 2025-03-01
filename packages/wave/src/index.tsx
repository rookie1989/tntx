// @ts-nocheck
import React from 'react';
import WaveHook from './WaveHook';

export interface WaveProps {
  width?: string;
  color?: string;
  fontSize?: 'small' | 'default' | 'large';
  range?: number;
  fontColor?: string;
}
const Wave = (props: WaveProps) => {
  return <WaveHook {...props} />;
};

export default Wave;
