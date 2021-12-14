import React from 'react';
import { inputProps, inputDefaultProps } from '../propTypesControl';

const Input = ({
  inputValue = '',
  onChange,
  type,
  dataTestid,
  className,
  id,
  name,
  labelText,
  containerStyle,
}) => (
  <div
    style={
      { ...containerStyle, display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }
    }
  >
    <label style={ { color: 'white' } } htmlFor={ id }>
      {labelText}
    </label>
    <input
      style={ { borderRadius: '10px', height: '20px' } }
      value={ inputValue }
      onChange={ ({ target: { value } }) => onChange(value) }
      type={ type }
      data-testid={ dataTestid }
      className={ className }
      id={ id }
      name={ name }
    />
  </div>
);

export default Input;

Input.propTypes = inputProps;

Input.defaultProps = inputDefaultProps;
