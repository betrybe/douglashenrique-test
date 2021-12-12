import React from 'react';
import { buttonProps, buttonDefaultProps } from '../propTypes';

const Button = ({
  disabled, type, onClick, text, className, dataTestid,
}) => (
  <button
    disabled={ disabled }
    type={ type === 'button' ? 'button' : 'submit' }
    onClick={ onClick }
    className={ className }
    data-testid={ dataTestid }
  >
    {text}
  </button>
);

export default Button;

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaultProps;
