import React, { useEffect } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const { id, value, classes, onChange, validate, placeholder, label = '' } = props;
  const { contClass, fieldClass, errorClass } = classes;

  useEffect(() => {
    addField({
      field: props,
      value,
    });
  }, []);

  return (
    <div class={contClass}>
      {label}
      <input
        id={id}
        type="text"
        value={value}
        class={fieldClass}
        onChange={onChange}
        validatge={validate}
        placeholder={placeholder}
      />
      <p class={errorClass}>// place for errors</p>
    </div>
  );
};

export default Input;
