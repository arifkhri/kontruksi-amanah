import React from 'react';
import styles from './tabs.module.scss';

interface TabsButtonProps {
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active: boolean;
  name: string;
}

export function TabsButton(props: TabsButtonProps) {
  return (
    <button
      role="tab"
      aria-selected={props.active}
      aria-controls={props.name}
      aria-label={`${props.name} tab button.`}
      id={props.id}
      className={styles['tabs-button']}
      onClick={props.onClick}
      data-active={props.active}
    >
      <span className="pointer-events-none select-none">{props.name}</span>
    </button>
  );
}
