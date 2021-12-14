import {
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  SAVE_CURRENCY,
  EDIT_EXPENSE,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_CURRENCY:
    return { ...state, currencies: action.currencies };
  case SAVE_EXPENSE:
    return { ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          id: state.expenses.length,
        },
      ],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.map(
          (expense) => (
            expense.id === action.expense.id
              ? ({ ...expense, ...action.expense })
              : expense
          ),
        ),
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses
          .filter((expense) => Number(expense.id) !== Number(action.id)),
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
