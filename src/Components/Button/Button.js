import React, { forwardRef } from 'react';
import ButtonLink from './ButtonLink';
import ButtonExternalLink from './ButtonExternalLink';
import ButtonAction from './ButtonAction';
import ButtonNavLink from './ButtonNavLink';

export const Button = forwardRef((props, ref) => {
  const { type } = props;

  const buttons = {
    navLink: <ButtonNavLink {...props} ref={ref} />,
    link: <ButtonLink {...props} ref={ref} />,
    externalLink: <ButtonExternalLink {...props} ref={ref} />,
  };

  return buttons[type] || <ButtonAction {...props} ref={ref} />;
});

export default Button;