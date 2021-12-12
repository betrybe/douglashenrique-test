import React, { useEffect, useState } from 'react';
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
    ? <Redirect to="/carteira" />
    : (
      <>
        <Input
          inputValue={ email }
          onChange={ setEmail }
          type="email"
          dataTestid="email-input"
        />
        <Input
          inputValue={ password }
          onChange={ setPassword }
          type="password"
          dataTestid="password-input"
        />
        <Button
          disabled={ buttonDisabeld }
          type="button"
          onClick={ handleSubmit }
          text="Entrar"
        />
      </>
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
