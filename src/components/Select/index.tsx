import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import ReactSelect, { SelectProps } from 'rc-select';

import { Arrow } from '../Icons';

import style from './style.module.scss';

function Select(props: SelectProps) {
  const { className, dropdownClassName, mode, showSearch = false, ...restProps } = props || {};

  const [onExpand, setOnExpand] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(()=>{
    // accessibility purpose
    setOpen(false);
  },[]);

  function handleSelectDropdown(toggle: boolean) {
    setOnExpand(toggle);
    setOpen(toggle);
  }
  
  return (
    <ReactSelect
      inputIcon={<Arrow />}
      showArrow
      mode={mode}
      allowClear={false}
      showSearch={false}
      virtual={false}
      maxTagCount="responsive"
      className={clsx([`${style['select']}`, className])}
      dropdownClassName={clsx([`${style['dropdown-select']} ${mode}`, dropdownClassName])}
      // aria-expanded={`${onExpand}`}
      // onDropdownVisibleChange={handleSelectDropdown}
      // open={open}
      {...restProps}
    />
  );
}


export default Select;
