import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

function Card(props: CardProps) {
  const { children } = props || {};

  return (
    <div className="md:px-[50px] px-[30px] md:py-[38px] py-[24px] rounded-[20px] md:rounded-[50px] shadow-[0px_8px_12px_rgba(222,228,237,0.8)] bg-white">
      {children}
    </div>
  );
}

export default Card;