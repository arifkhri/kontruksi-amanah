import React from 'react';
import clsx from 'clsx';

import { Spin } from '../Icons';

import style from './style.module.scss';

export interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  type?: Type;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
  size?: SizeType;
  loading?: boolean;
  shape?: 'circle' | 'square';
}

function Button(props: ButtonProps) {
  const { children, buttonType, type, size, className, disabled, loading, shape, ...restProps } = props || {};
  
  return (
    <button
      type={buttonType}
      disabled={disabled}
      className={clsx([
        `${style['btn']} ${style[size || 'md']} ${style[type || 'primary']} ${style[shape || 'square']}`,
        className
      ])}
      {...restProps}
    >
      {loading && <Spin />}
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'md',
  type: 'primary',
  buttonType: 'button'
};

export default Button;
