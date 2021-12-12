import getCurrency from '../service';

const SAVE_EMAIL = 'SAVE_EMAIL';
const SAVE_EXPENSE = 'SAVE_EXPENSE';
const SAVE_CURRENCY = 'SAVE_CURRENCY';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const TURISM_DOLAR = 'USDT';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const saveEmail = (email) => ({
  email,
  type: SAVE_EMAIL,
});

const saveExpense = (expense) => async (dispatch) => {
  const exchangeRates = await getCurrency();
  dispatch({
    expense: { ...expense, exchangeRates },
    type: SAVE_EXPENSE,
  });
};

const deleteExpense = (id) => ({
  id,
  type: DELETE_EXPENSE,
});

const getCurrencyOptions = () => async (dispatch) => {
  const currencies = await getCurrency();
  dispatch({
    currencies: Object.keys(currencies).filter((curr) => curr !== TURISM_DOLAR),
    type: SAVE_CURRENCY,
  });
};

const editExpense = (expense) => ({
  expense,
  type: EDIT_EXPENSE,
});

export {
  saveEmail,
  SAVE_EMAIL,
  saveExpense,
  SAVE_EXPENSE,
  deleteExpense,
  DELETE_EXPENSE,
  getCurrencyOptions,
  SAVE_CURRENCY,
  editExpense,
  EDIT_EXPENSE,
};
