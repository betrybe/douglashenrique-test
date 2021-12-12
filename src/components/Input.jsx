import React from 'react';
import { inputProps, inputDefaultProps } from '../propTypes';

const Input = ({
  inputValue = '',
  onChange,
  type,
  dataTestid,
  className,
  id,
  name,
  labelText,
}) => (
  <label htmlFor={ id }>
    {labelText}
    <input
      value={ inputValue }
      onChange={ ({ target: { value } }) => onChange(value) }
      type={ type }
      data-testid={ dataTestid }
      className={ className }
      id={ id }
      name={ name }
    />
  </label>
);

export default Input;

Input.propTypes = inputProps;

Input.defaultProps = inputDefaultProps;
