import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../actions';
import { Input, Button } from '../components';

const EMAIL_REGEXP = /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/i;

const MINIMUM_PASWORD = 6;

const INPUT_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
};

const Login = ({ saveEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabeld, setButtonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailIsValid = EMAIL_REGEXP.test(email);
    const passwordIsValid = password.length >= MINIMUM_PASWORD;
    setButtonDisabled(!(emailIsValid && passwordIsValid));
  }, [email, password]);

  const handleSubmit = () => {
    saveEmail(email);
    history.push('/carteira');
  };

  return (
    <div
      style={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#2fc18c',
      } }
    >
      <div
        style={ { display: 'flex',
          flexDirection: 'column',
          width: '40%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid black',
          borderRadius: '10%',
          backgroundColor: 'white',

        } }
      >
        <h2>Trybe Wallet</h2>
        <div
          style={ {
            display: 'flex',
            flexDirection: 'column',
            height: '40%',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
          } }
        >
          <Input
            containerStyle={ INPUT_STYLE }
            inputValue={ email }
            onChange={ setEmail }
            type="email"
            dataTestid="email-input"
            labelText="email"
          />
          <Input
            containerStyle={ INPUT_STYLE }
            inputValue={ password }
            onChange={ setPassword }
            type="password"
            dataTestid="password-input"
            labelText="password"
          />
        </div>
        <div>
          <Button
            disabled={ buttonDisabeld }
            type="button"
            onClick={ handleSubmit }
            text="Entrar"
          />
        </div>
      </div>
    </div>
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
