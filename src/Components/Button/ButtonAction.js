import React, { forwardRef } from 'react';
import Spinner from '../Spinner';
import { StyledButtonAction } from './Button.style';

export const ButtonAction = forwardRef((props, ref) => {
  const { children, icon, rightIcon: RightIcon, className, loading, disabled, label, icon: Icon, ...restProps } = props;
  const { variation } = restProps;
  
  return (
    <StyledButtonAction 
      {...restProps} 
      className={`${variation} ${className}`} 
      ref={ref} 
      disabled={disabled || loading}
    >
      {children
        ? children
        : <>
          {loading
            ? <Spinner color="#fff" />
            : (
              <>
                {Icon && <Icon/>}
                {label && label}
                {props.rightIcon && <RightIcon/>}
              </>
            )
          }
        </>
      }
    </StyledButtonAction>
  );
});

export default ButtonAction;
