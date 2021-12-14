import React from 'react';
import { buttonProps, buttonDefaultProps } from '../propTypesControl';

const Button = ({
  disabled, type, onClick, text, className, dataTestid,
}) => (
  <button
    disabled={ disabled }
    type={ type === 'button' ? 'button' : 'submit' }
    onClick={ onClick }
    className={ className }
    data-testid={ dataTestid }
    style={
      {
        backgroundColor: disabled ? 'gray' : 'green',
        borderRadius: '5px',
        boxShadow: 'none',
        color: 'white',
        cursor: 'pointer',
        margin: '10px 0px',
        outline: 0,
        padding: '5px 15px',
        height: '30px' }
    }
  >
    {text}
  </button>
);

export default Button;

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaultProps;
