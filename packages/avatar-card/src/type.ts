import React from "react";

export type ThemeType = "default" | "plant";
export type ColorGradient = [string, string];
export interface ColorsType {
  default: ColorGradient[];
  plant: ColorGradient[];
}

export interface TextAvatarType {
  children?: React.ReactNode;
  nickname?: string;
  size?: number;
  account?: string;
  empStatus?: number;
  trigger?: "hover" | "click";
  randomColor?: boolean;
  theme?: "default" | "plant";
  placement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  style?: React.CSSProperties;
  showPopover?: boolean;
  linearGradient?: boolean;
  sameAsChildren?: boolean;
  cardConfig?: { label: string; value: string }[];
  onClick?: (e: any) => void;
}
