import React from 'react';
import { headerProps, headerDefaultProps } from '../propTypes';

const Header = ({ email, expenses }) => (
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
);

export default Header;

Header.propTypes = headerProps;

Header.defaultProps = headerDefaultProps;
