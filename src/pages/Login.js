import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, Button } from '../components';

const EMAIL_REGEXP = /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/i;

const MINIMUM_PASWORD = 6;

const Login = ({ saveEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabeld, setButtonDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const emailIsValid = EMAIL_REGEXP.test(email);
    const passwordIsValid = password.length >= MINIMUM_PASWORD;
    setButtonDisabled(!(emailIsValid && passwordIsValid));
  }, [email, password]);

  const handleSubmit = () => {
    saveEmail(email);
    setRedirect(true);
  };

  return redirect
    ? <Redirect to="/carteira" /> : (
      <Container component="main" maxWidth="xs">
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Typography component="h1" variant="h5">
            Trybe Wallet
          </Typography>
          <Input
            inputValue={ email }
            onChange={ setEmail }
            type="email"
            dataTestid="email-input"
            labelText="email"
            id="email"
          />
          <Input
            inputValue={ password }
            onChange={ setPassword }
            type="password"
            dataTestid="password-input"
            labelText="password"
            id="password"
          />
          <Button
            disabled={ buttonDisabeld }
            type="button"
            onClick={ handleSubmit }
            text="Entrar"
          >
            Entrar
          </Button>
        </Box>
      </Container>
    );
};
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(actions.saveEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};
