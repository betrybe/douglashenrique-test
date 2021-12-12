import React from 'react';
import { tableExpensesDefaultProps, tableExpensesProps } from '../propTypes';

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

const TableExpenses = ({
  expenses, editExpenseActive, deleteExpense,
}) => (
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
);

export default TableExpenses;

TableExpenses.propTypes = tableExpensesProps;

TableExpenses.defaultProps = tableExpensesDefaultProps;
