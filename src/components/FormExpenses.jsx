import React from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import { formExpensesDefaultProps, formExpensesProps } from '../propTypesControl';

const FormExpenses = ({
  handleSubmit,
  value,
  setValue,
  description,
  setDescription,
  currency = '',
  setCurrency,
  currencies,
  method = '',
  setMethod,
  tag = '',
  setTag,
  id,
  TAG_ARRAY,
  METHOD_ARRAY,
}) => (
  <form
    style={
      { display: 'flex',
        width: '99vh%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottom: '1px black solid',
        backgroundColor: 'black',
        padding: '20px' }
    }
    onSubmit={ handleSubmit }
  >
    <Input
      inputValue={ value }
      onChange={ setValue }
      dataTestid="value-input"
      id="valueInput"
      type="number"
      name="value"
      labelText="Valor:"
    />
    <Input
      inputValue={ description }
      onChange={ setDescription }
      dataTestid="description-input"
      id="descriptionInput"
      type="text"
      name="description"
      labelText="Descrição:"
    />
    <Select
      id="selectCurrency"
      dataTestid="currency-input"
      selectValue={ currency }
      onChange={ setCurrency }
      name="currency"
      options={ currencies }
      labelText="Moeda:"
    />
    <Select
      id="selectPayment"
      dataTestid="method-input"
      selectValue={ method }
      onChange={ setMethod }
      name="method"
      options={ METHOD_ARRAY }
      labelText="Método de pagamento:"
    />
    <Select
      id="selectTag"
      dataTestid="tag-input"
      selectValue={ tag }
      onChange={ setTag }
      name="tag"
      options={ TAG_ARRAY }
      labelText="Tag:"
    />
    <Button
      type="submit"
      text={ id === '' ? 'Adicionar despesa' : 'Editar despesa' }
    />
  </form>
);

export default FormExpenses;

FormExpenses.propTypes = formExpensesProps;

FormExpenses.defaultProps = formExpensesDefaultProps;
