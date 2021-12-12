import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../actions';

const METHOD_ARRAY = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAG_ARRAY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const HEADER_TABLE = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

const Wallet = ({
  email,
  saveExpense,
  expenses,
  deleteExpense,
  currencies,
  getCurrencyOptions,
  editExpense,
}) => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState(currencies[0]);
  const [method, setMethod] = useState(METHOD_ARRAY[0]);
  const [tag, setTag] = useState(TAG_ARRAY[0]);
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyOptions());
  }, [dispatch, getCurrencyOptions]);

  useEffect(() => {
    setCurrency(currencies[0]);
  }, [currencies]);

  const editExpenseActive = (selectedId) => {
    const selectedExpense = expenses.find((expense) => expense.id === selectedId);
    setValue(selectedExpense.value);
    setDescription(selectedExpense.description);
    setCurrency(selectedExpense.currency);
    setMethod(selectedExpense.method);
    setTag(selectedExpense.tag);
    setId(selectedId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objectSend = {
      value,
      description,
      currency,
      method,
      tag,
      id,
    };
    if (id === '') {
      dispatch(saveExpense(objectSend));
    } else {
      dispatch(editExpense(objectSend));
    }
    setValue('');
    setDescription('');
    setCurrency(currencies[0]);
    setMethod(METHOD_ARRAY[0]);
    setTag(TAG_ARRAY[0]);
    setId('');
  };

  return (
    <>
      <>
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">
          {expenses.reduce(
            (acc, curr) => acc + (
              Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
            ),
            0,
          ).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="valueInput">
          Valor:
          <input
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
            data-testid="value-input"
            id="valueInput"
            type="number"
            name="value"
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição:
          <input
            data-testid="description-input"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
            id="descriptionInput"
            type="text"
            name="description"
          />
        </label>
        <label htmlFor="selectCurrency">
          Moeda:
          <select
            data-testid="currency-input"
            value={ currency }
            onChange={ ({ target }) => setCurrency(target.value) }
            id="selectCurrency"
            name="currency"
          >
            {currencies.map(
              (label) => <option key={ label }>{label}</option>,
            )}
          </select>
        </label>
        <label htmlFor="selectPayment">
          Método de pagamento:
          <select
            data-testid="method-input"
            value={ method }
            onChange={ ({ target }) => setMethod(target.value) }
            id="selectPayment"
            name="method"
          >
            {METHOD_ARRAY.map(
              (label) => <option key={ label }>{label}</option>,
            )}
          </select>
        </label>
        <label htmlFor="selectTag">
          Tag:
          <select
            data-testid="tag-input"
            id="selectTag"
            name="tag"
            value={ tag }
            onChange={ ({ target }) => setTag(target.value) }
          >
            {TAG_ARRAY.map(
              (label) => <option key={ label }>{label}</option>,
            )}
          </select>
        </label>
        <button type="submit">
          {id === '' ? 'Adicionar despesa' : 'Editar despesa' }
        </button>
      </form>
      <table>
        <thead>
          <tr>
            {HEADER_TABLE.map((name) => <th key={ name }>{name}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {
                  (Number(expense.value)
                  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => editExpenseActive(expense.id) }
                >
                  editar
                </button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => deleteExpense(expense.id) }
                  type="button"
                >
                  excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = ({ user: { email }, wallet: { expenses, currencies } }) => ({
  email, expenses, currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => actions.saveExpense(expense),
  deleteExpense: (id) => dispatch(actions.deleteExpense(id)),
  getCurrencyOptions: actions.getCurrencyOptions,
  editExpense: (expense) => dispatch(actions.editExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
  saveExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrencyOptions: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.objectOf(
        PropTypes.shape({
          code: PropTypes.string,
          codein: PropTypes.string,
          name: PropTypes.string,
          high: PropTypes.string,
          low: PropTypes.string,
          varBid: PropTypes.string,
          pctChange: PropTypes.string,
          bid: PropTypes.string,
          ask: PropTypes.string,
          timestamp: PropTypes.string,
          create_date: PropTypes.string,
        }),
      ),
    }),
  ),
};

Wallet.defaultProps = {
  email: '',
  expenses: [],
  currencies: [],
};
