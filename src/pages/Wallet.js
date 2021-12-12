import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../actions';
import { FormExpenses, Header, TableExpenses } from '../components';
import { walletDefaultProps, walletProps } from '../propTypes';

const METHOD_ARRAY = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAG_ARRAY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
      <Header
        expenses={ expenses }
        email={ email }
      />
      <FormExpenses
        handleSubmit={ handleSubmit }
        value={ value }
        setValue={ setValue }
        description={ description }
        setDescription={ setDescription }
        currency={ currency }
        setCurrency={ setCurrency }
        currencies={ currencies }
        method={ method }
        setMethod={ setMethod }
        tag={ tag }
        setTag={ setTag }
        id={ String(id) }
        METHOD_ARRAY={ METHOD_ARRAY }
        TAG_ARRAY={ TAG_ARRAY }
      />
      <TableExpenses
        expenses={ expenses }
        editExpenseActive={ editExpenseActive }
        deleteExpense={ deleteExpense }
      />
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

Wallet.propTypes = walletProps;

Wallet.defaultProps = walletDefaultProps;
