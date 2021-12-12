import PropTypes from 'prop-types';

const expenses = PropTypes.arrayOf(
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
);

const buttonProps = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  dataTestid: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

const buttonDefaultProps = {
  type: 'button',
  dataTestid: '',
  text: '',
  disabled: false,
  className: '',
  onClick: () => {},
};

const inputProps = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  dataTestid: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
};

const inputDefaultProps = {
  type: 'text',
  dataTestid: '',
  className: '',
  id: '',
  name: '',
  labelText: '',
};

const headerProps = {
  email: PropTypes.string,
  expenses,
};

const headerDefaultProps = {
  email: '',
  expenses: [],
};

const walletProps = {
  email: PropTypes.string,
  saveExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrencyOptions: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenses,
};

const walletDefaultProps = {
  email: '',
  expenses: [],
  currencies: [],
};

const tableExpensesProps = {
  expenses,
  editExpenseActive: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const tableExpensesDefaultProps = {
  expenses: [],
};

const formExpensesProps = {
  handleSubmit: PropTypes.func.isRequired,
  setTag: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  setMethod: PropTypes.func.isRequired,
  value: PropTypes.string,
  description: PropTypes.string,
  currency: PropTypes.string,
  currencies: PropTypes.arrayOf(PropTypes.string),
  method: PropTypes.string,
  tag: PropTypes.string,
  id: PropTypes.string.isRequired,
  TAG_ARRAY: PropTypes.arrayOf(PropTypes.string),
  METHOD_ARRAY: PropTypes.arrayOf(PropTypes.string),
};

const formExpensesDefaultProps = {
  value: '',
  description: '',
  currency: '',
  currencies: [],
  method: '',
  tag: '',
  TAG_ARRAY: [],
  METHOD_ARRAY: [],
};

const selectProps = {
  id: PropTypes.string,
  dataTestid: PropTypes.string,
  selectValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  labelText: PropTypes.string,
};

const selectDefaultProps = {
  id: '',
  dataTestid: '',
  selectValue: '',
  name: '',
  options: [],
  labelText: '',
};

export {
  buttonProps,
  buttonDefaultProps,
  inputProps,
  inputDefaultProps,
  headerProps,
  headerDefaultProps,
  walletProps,
  walletDefaultProps,
  tableExpensesProps,
  tableExpensesDefaultProps,
  formExpensesProps,
  formExpensesDefaultProps,
  selectProps,
  selectDefaultProps,
};
