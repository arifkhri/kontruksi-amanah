import React from 'react';
import clsx from 'clsx';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Replace default className. */
  overrideClassName?: boolean;
}

function Container(props: ContainerProps) {
  const { className, overrideClassName, children } = props || {};

  return (
    <div
      className={overrideClassName
        ? className
        : clsx([
          '[@media(min-width:1440px)]:max-w-[1440px]',
          'mx-auto',
          className
        ])}
    >
      {children}
    </div>
  );
}

export default Container;