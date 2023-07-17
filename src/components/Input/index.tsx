import clsx from 'clsx';
import React from 'react';

import style from './style.module.scss';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}

function Input(props: InputProps) {
  
  const { addonAfter, addonBefore, ...restProps } = props || {};

  return (
    <div className={style['input-wrapper']}>
      {
        addonBefore && (
          <div className={style['addon-before']}>
            <span>{addonBefore}</span>
          </div>
        )
      }
      {
        addonAfter && (
          <div className={style['addon-after']}>
            <span>{addonAfter}</span>
          </div>
        )
      }
      <input
        className={`${addonBefore ? style['input-addon-before'] : ''} ${addonAfter ? style['input-addon-after'] : ''} `}
        {...restProps}
      />
    </div>
  );
}

export default Input;