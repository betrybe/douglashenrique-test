import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

// eslint-disable-next-line max-len
const EMAIL_REGEXP = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

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
        <input
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          type="email"
          data-testid="email-input"
        />
        <input
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          type="password"
          data-testid="password-input"
        />
        <button
          disabled={ buttonDisabeld }
          type="button"
          onClick={ handleSubmit }
        >
          Entrar
        </button>
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
