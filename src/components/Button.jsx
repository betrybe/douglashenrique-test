import React from 'react';
import Button from '@mui/material/Button';
import { buttonProps, buttonDefaultProps } from '../propTypes';

const CustomButton = ({
  disabled, type, onClick, text, className, dataTestid,
}) => (
  <Button
    data-testid={ dataTestid }
    disabled={ disabled }
    type={ type === 'button' ? 'button' : 'submit' }
    onClick={ onClick }
    className={ className }
    fullWidth
    variant="contained"
    sx={ { mt: 3, mb: 2 } }
    color={ disabled ? 'error' : 'success' }
  >
    {text}
  </Button>
);

export default CustomButton;

CustomButton.propTypes = buttonProps;

CustomButton.defaultProps = buttonDefaultProps;
