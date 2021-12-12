import React from 'react';
import TextField from '@mui/material/TextField';
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
  <TextField
    label={ labelText }
    value={ inputValue }
    onChange={ ({ target: { value } }) => onChange(value) }
    type={ type }
    inputProps={ { 'data-testid': dataTestid } }
    className={ className }
    id={ id }
    name={ name }
    margin="normal"
    fullWidth
    autoFocus
  />
);

export default Input;

Input.propTypes = inputProps;

Input.defaultProps = inputDefaultProps;
