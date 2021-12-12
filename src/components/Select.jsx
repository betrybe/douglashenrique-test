import React from 'react';
import { selectDefaultProps, selectProps } from '../propTypes';

const Select = ({
  id,
  dataTestid,
  selectValue,
  onChange,
  name,
  options,
  labelText,
}) => (
  <label htmlFor={ id }>
    {labelText}
    <select
      data-testid={ dataTestid }
      value={ selectValue }
      onChange={ ({ target }) => onChange(target.value) }
      id={ id }
      name={ name }
    >
      {options.map(
        (label) => <option key={ label }>{label}</option>,
      )}
    </select>
  </label>
);

export default Select;

Select.propTypes = selectProps;

Select.defaultProps = selectDefaultProps;
