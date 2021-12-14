import React from 'react';
import { selectDefaultProps, selectProps } from '../propTypesControl';

const Select = ({
  id,
  dataTestid,
  selectValue,
  onChange,
  name,
  options,
  labelText,
}) => (
  <label
    style={
      { color: 'white', display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }
    }
    htmlFor={ id }
  >
    {labelText}
    <select
      style={ { borderRadius: '10px', height: '30px', textAlign: 'center' } }
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
