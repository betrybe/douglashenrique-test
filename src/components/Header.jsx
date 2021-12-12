import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { headerProps, headerDefaultProps } from '../propTypes';

const Header = ({ email, expenses }) => (
  <Grid container padding={ 2 } fixed="true" component={ Paper }>
    <Grid item xs={ 6 } />
    <Grid item xs={ 3 }>
      <Typography component="h1" variant="h5" data-testid="email-field">
        {email}
      </Typography>
    </Grid>
    <Grid item xs={ 3 }>
      <Typography component="p" variant="h5" data-testid="total-field">
        {`${expenses.reduce(
          (acc, curr) => acc + (
            Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
          ),
          0,
        ).toFixed(2)} `}
        <span data-testid="header-currency-field">BRL</span>
      </Typography>
    </Grid>
  </Grid>
);

export default Header;

Header.propTypes = headerProps;

Header.defaultProps = headerDefaultProps;
