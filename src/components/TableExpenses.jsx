import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, ButtonGroup,
} from '@mui/material';
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
  <TableContainer component={ Paper }>
    <Table sx={ { minWidth: 650 } } size="small">
      <TableHead style={ { backgroundColor: 'black' } }>
        <TableRow>
          {HEADER_TABLE.map((name) => (
            <TableCell style={ { color: 'white' } } align="center" key={ name }>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={ expense.id }>
            <TableCell align="center">{expense.description}</TableCell>
            <TableCell align="center">{expense.tag}</TableCell>
            <TableCell align="center">{expense.method}</TableCell>
            <TableCell align="center">{expense.value}</TableCell>
            <TableCell align="center">
              {expense.exchangeRates[expense.currency].name}
            </TableCell>
            <TableCell align="center">
              {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </TableCell>
            <TableCell align="center">
              {
                (Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
              }
            </TableCell>
            <TableCell align="center">Real</TableCell>
            <TableCell align="center">
              <ButtonGroup variant="contained">
                <Button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => editExpenseActive(expense.id) }
                >
                  editar
                </Button>
                <Button
                  data-testid="delete-btn"
                  onClick={ () => deleteExpense(expense.id) }
                  type="button"
                  color="error"
                >
                  excluir
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableExpenses;

TableExpenses.propTypes = tableExpensesProps;

TableExpenses.defaultProps = tableExpensesDefaultProps;
