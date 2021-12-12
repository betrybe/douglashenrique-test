import React from 'react';
import { Paper, Grid } from '@mui/material';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import { formExpensesDefaultProps, formExpensesProps } from '../propTypes';

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
  <Grid
    style={ { backgroundColor: 'gray' } }
    container
    padding={ 2 }
    component={ Paper }
  >
    <form onSubmit={ handleSubmit } style={ { width: '100%' } }>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Input
            inputValue={ value }
            onChange={ setValue }
            dataTestid="value-input"
            id="valueInput"
            type="number"
            name="value"
            labelText="Valor:"
          />
        </Grid>
        <Grid item>
          <Input
            inputValue={ description }
            onChange={ setDescription }
            dataTestid="description-input"
            id="descriptionInput"
            type="text"
            name="description"
            labelText="Descrição:"
          />
        </Grid>
        <Grid item>
          <Select
            id="selectCurrency"
            dataTestid="currency-input"
            selectValue={ currency }
            onChange={ setCurrency }
            name="currency"
            options={ currencies }
            labelText="Moeda:"
          />
        </Grid>
        <Grid item>
          <Select
            id="selectPayment"
            dataTestid="method-input"
            selectValue={ method }
            onChange={ setMethod }
            name="method"
            options={ METHOD_ARRAY }
            labelText="Método de pagamento:"
          />
        </Grid>
        <Grid item>
          <Select
            id="selectTag"
            dataTestid="tag-input"
            selectValue={ tag }
            onChange={ setTag }
            name="tag"
            options={ TAG_ARRAY }
            labelText="Tag:"
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            text={ id === '' ? 'Adicionar despesa' : 'Editar despesa' }
          />
        </Grid>
      </Grid>
    </form>
  </Grid>
);

export default FormExpenses;

FormExpenses.propTypes = formExpensesProps;

FormExpenses.defaultProps = formExpensesDefaultProps;
