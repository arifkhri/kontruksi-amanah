import React, { useEffect, useState } from 'react';

import Input from '../Input';
import Select from '../Select';
import { WarningCircledanger } from '../Icons';

import useLocalData from '../../hooks/useLocalData';

import style from './style.module.scss';

export interface FormGroupProps {
  label: string;
  name?: string;
  componentProps?: any;
  validation?: {
    required?:boolean;
    rules?: (value: any) => boolean,
    message: string;
  };
  component?: 'input' | 'select';
  value?: any;
}

const componentMap = {
  'input': Input,
  'select': Select
};

function FormGroup(props: FormGroupProps) {
  const { componentProps = {}, component = 'input', name, label, validation, value: valueProps } = props || {};
  const {onChange, onBlur,...restComponentProps} = componentProps || {};
  
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState<any>(null);
  const { store, dispatch } = useLocalData();

  const Comp = componentMap[component];

  function handleOnChange(eComp: any) {
    const value = component === 'select' ? eComp : eComp.target.value;
    setValue(value);

    if (validation) {
      if ((validation.required && (!value || value.length <= 0)) || (validation.rules && !validation.rules(value))) {
        setErrorMessage(validation.message);
        
        dispatch({
          type: 'update',
          name: 'errorFormGroup',
          value: {
            ...store.errorFormGroup,
            [`${name}`]: validation.message
          }
        });
      } else {
        setErrorMessage('');
        dispatch({
          type: 'update',
          name: 'errorFormGroup',
          value: {
            ...store.errorFormGroup,
            [`${name}`]: null
          }
        });
      }
    }

    if (onChange) {
      onChange(value);
    }
  }

  function handleOnBlur() {
    if (onBlur) {
      onBlur(value);
    }
  }

  return (
    <div className={style['form-group']}>
      <label
        className={`${validation?.required ? style['required'] : ''}`}
        htmlFor={name || componentProps.name}
      >
        {label}
      </label>
      <Comp
        value={valueProps}
        name={name}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        {...restComponentProps}
      />
      {errorMessage && (
        <div className={style['error']}>
          <WarningCircledanger />
          <div className="text-error">
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  );
}

export default FormGroup;