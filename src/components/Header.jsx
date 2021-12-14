import React from 'react';
import { headerProps, headerDefaultProps } from '../propTypesControl';

const Header = ({ email, expenses }) => (
  <div
    style={
      { display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottom: '1px black solid' }
    }
  >
    <div style={ { width: '100%', height: 'auto', marginLeft: '30px' } }>
      <img
        style={ {
          width: '10%', height: '10%' } }
        src="./trybe.png"
        alt="trybe logo"
      />
    </div>
    <div style={ { display: 'flex', width: '70%', justifyContent: 'center' } }>
      <div style={ { display: 'flex', width: '70%', justifyContent: 'space-around' } }>
        <div>
          <h2 data-testid="email-field">{email}</h2>
        </div>
        <div style={ { display: 'flex' } }>
          <h2 data-testid="total-field">
            {expenses.reduce(
              (acc, curr) => acc + (
                Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
              ),
              0,
            ).toFixed(2)}
          </h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

Header.propTypes = headerProps;

Header.defaultProps = headerDefaultProps;
