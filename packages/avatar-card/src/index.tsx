import React, { Fragment, FC } from 'react';
import { getColors } from './constant';
import { Avatar, Popover } from 'antd';
import PopContent from './PopContent';
import type { TextAvatarType } from './type';

// import './index.less';
import './index.css';

const TextAvatar = (props: TextAvatarType) => {
  const {
    children,
    nickname = '',
    size = 32,
    account,
    empStatus = 1,
    trigger = 'hover',
    randomColor = true,
    theme = 'default',
    placement = 'rightTop',
    style = {},
    showPopover = true,
    linearGradient = false,
    sameAsChildren = true,
  } = props;

  const isChinese = (str: string) => {
    let flag = false;
    if (/[\u4e00-\u9fa5]+/.test(str)) {
      flag = true;
    }
    return flag;
  };

  const key = (account && account.substr(0, 1)) || 'a';
  const disabledColor = '#9E9E9E';

  const matchResult = nickname.match(/[^0-9]+/g);
  const newNickname = matchResult && matchResult.length > 0 ? matchResult[0] : nickname;
  const nameLen = newNickname.length;
  let nameWritten = newNickname;
  if (nameLen > 2) {
    // 如果用户输入的姓名大于等于3个字符，截取后面两位
    const first = newNickname.substring(0, 1);
    if (isChinese(first)) {
      nameWritten = newNickname.substring(nameLen - 2);
    } else {
      // 截取前面的两个英文字母
      nameWritten = newNickname.substring(0, 2).toUpperCase();
    }
  }

  let { currentColors, colorIndex } = getColors({
    letter: key,
    empStatus,
    randomColor,
    theme,
  });
  let colorBg = linearGradient
    ? `linear-gradient(to bottom right,${currentColors[0]},${currentColors[1]})`
    : null;

  return (
    <div className="tntx-avatar-card" style={{ ...style }}>
      {showPopover && (
        <Popover
          content={
            <PopContent
              colorIndex={colorIndex}
              currentColors={currentColors}
              colorBg={colorBg}
              nameWritten={nameWritten}
              sameAsChildren={sameAsChildren}
              {...props}
            />
          }
          trigger={trigger}
          placement={placement}
          overlayClassName="tntx-avatar-card-popover"
          className="tntx-avatar-card-popover"
        >
          {children ? (
            children
          ) : (
            <Avatar
              size={size}
              style={{
                backgroundColor: empStatus === 2 ? disabledColor : currentColors[0],
                backgroundImage: colorBg || '',
                verticalAlign: 'middle',
                cursor: 'default',
              }}
            >
              {nameWritten}
            </Avatar>
          )}
        </Popover>
      )}
      {!showPopover && (
        <Fragment>
          {children ? (
            children
          ) : (
            <Avatar
              {...props}
              size={size}
              style={{
                backgroundColor: empStatus === 2 ? disabledColor : currentColors[0],
                backgroundImage: colorBg || '',
                verticalAlign: 'middle',
                cursor: 'pointer',
              }}
            >
              {nameWritten}
            </Avatar>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default TextAvatar;
